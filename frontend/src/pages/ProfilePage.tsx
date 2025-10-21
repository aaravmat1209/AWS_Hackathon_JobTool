// ProfilePage.tsx
import React, { useState, useId } from "react";
import { useNavigate } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import { motion } from "framer-motion";
import myProfileImage from '../assets/my_profile.png';
import { uploadResumeAndParse, saveProfile, getProfile, ProfileData } from '../services/profileService';
import { getUserEmail, setUserEmail } from '../utils/cookieUtils';

/* -------------------- Global styles (font + resets) -------------------- */
const GlobalStyle = createGlobalStyle`
  :root{
    --asu-gold: #FFC627;
    --asu-gold-dark: #E6B400;
    --asu-maroon: #8B1538;
    --asu-maroon-dark: #6d1028;
    --ink-900:#000000;
    --ink-700:#333333;
    --ink-500:#666666;
    --ink-300:#9AA0A6;
    --surface:#FFFFFF;
    --surface-muted:#F8F9FA;
    --border:#E6E6E6;
  }

  * { box-sizing: border-box; }
  html, body, #root { height: 100%; }
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');

  body {
    margin: 0;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
    color: white;
    background: #000000;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-feature-settings: 'cv02', 'cv03', 'cv04', 'cv11';
  }

  ::placeholder { color: #A6ACB2; opacity: 1; }
`;

/* ------------------------------ Layout --------------------------------- */
const Page = styled.div`
  min-height: 100vh;
  padding: 140px 20px 72px;
  background: #000000;
  background-image: 
    radial-gradient(circle at 20% 80%, rgba(74, 222, 128, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(74, 222, 128, 0.05) 0%, transparent 50%),
    radial-gradient(circle at 50% 50%, rgba(74, 222, 128, 0.03) 0%, transparent 70%);
`;

const Header = styled(motion.header)`
  max-width: 1100px;
  margin: 0 auto 40px;
  text-align: center;
`;

const Title = styled(motion.h1)`
  margin: 0;
  font-size: clamp(2rem, 5vw, 3rem);
  line-height: 1.1;
  font-weight: 700;
  letter-spacing: -0.02em;
  background: linear-gradient(135deg, #4ade80 0%, #22c55e 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const DateText = styled(motion.p)`
  margin: 12px 0 0;
  color: rgba(255, 255, 255, 0.6);
  font-size: 1rem;
`;

/* Hidden file input for resume upload */
const HiddenFile = styled.input.attrs({ type: "file" })`
  display: none;
`;

const UploadButton = styled(motion.button)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  background: rgba(74, 222, 128, 0.1);
  border: 1px solid rgba(74, 222, 128, 0.3);
  border-radius: 8px;
  color: #4ade80;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  font-family: 'Inter', sans-serif;

  &:hover {
    background: rgba(74, 222, 128, 0.15);
    border-color: rgba(74, 222, 128, 0.5);
    transform: translateY(-1px);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
  }
`;

/* --------------------------- Profile section --------------------------- */
const Card = styled(motion.section)`
  max-width: 1100px;
  margin: 0 auto;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(74, 222, 128, 0.2);
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  position: relative;
  z-index: 1;
`;

const ProfileSection = styled.div`
  padding: 40px 48px 48px 48px;
  
  @media (max-width: 720px){
    padding: 24px 20px 32px 20px;
  }
`;

const ProfileHeader = styled.div`
  text-align: center;
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

const Avatar = styled.div`
  width: 82px; height: 82px; margin: 0 auto 16px;
  border-radius: 999px; background: var(--asu-maroon);
  display: grid; place-items: center;
  background-image: url(${myProfileImage});
  background-size: cover;
  background-position: center;
`;

const Heading = styled(motion.h2)`
  margin: 0;
  font-size: 1.875rem;
  font-weight: 700;
  color: white;
  letter-spacing: -0.01em;
`;

const EditMessage = styled(motion.div)<{ $show: boolean }>`
  margin-bottom: 32px;
  padding: 16px 20px;
  background: linear-gradient(135deg, rgba(74, 222, 128, 0.1) 0%, rgba(74, 222, 128, 0.05) 100%);
  border: 1px solid rgba(74, 222, 128, 0.3);
  border-radius: 12px;
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.9);
  text-align: center;
  display: ${props => props.$show ? 'flex' : 'none'};
  align-items: center;
  justify-content: center;
  gap: 8px;
  animation: fadeIn 0.5s ease-in-out;

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(-10px); }
    to { opacity: 1; transform: translateY(0); }
  }

  &::before {
    content: "✏️";
    font-size: 1.25rem;
  }
`;

const FormSection = styled.div`
  margin-bottom: 32px;
`;

const SectionTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: 600;
  color: white;
  margin: 0 0 20px 0;
  letter-spacing: -0.01em;
  display: flex;
  align-items: center;
  gap: 8px;
  
  &::before {
    content: '';
    width: 4px;
    height: 20px;
    background: linear-gradient(135deg, #4ade80 0%, #22c55e 100%);
    border-radius: 2px;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;

  @media (max-width: 900px){
    grid-template-columns: 1fr;
    gap: 16px;
  }
`;

const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Label = styled.label<{ $required?: boolean }>`
  display: block;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.9);
  font-size: 0.875rem;
  line-height: 1.5;
  letter-spacing: 0.01em;

  &::after {
    content: ${props => props.$required ? '" *"' : '""'};
    color: #ef4444;
    font-weight: 600;
    margin-left: 2px;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 10px 12px;
  border: 1px solid rgba(74, 222, 128, 0.2);
  border-radius: 8px;
  font-size: 14px;
  line-height: 1.5;
  background: rgba(0, 0, 0, 0.4);
  color: white;
  outline: none;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  font-family: inherit;

  &:focus{
    border-color: #4ade80;
    box-shadow: 0 0 0 3px rgba(74, 222, 128, 0.1);
    background: rgba(0, 0, 0, 0.6);
  }

  &:not(:disabled):hover {
    border-color: rgba(74, 222, 128, 0.4);
    background: rgba(0, 0, 0, 0.5);
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.4);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    background: rgba(0, 0, 0, 0.3);
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  min-height: 100px;
  padding: 10px 12px;
  border: 1px solid rgba(74, 222, 128, 0.2);
  border-radius: 8px;
  font-size: 14px;
  line-height: 1.5;
  background: rgba(0, 0, 0, 0.4);
  color: white;
  resize: vertical;
  outline: none;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  font-family: inherit;

  &:focus{
    border-color: #4ade80;
    box-shadow: 0 0 0 3px rgba(74, 222, 128, 0.1);
    background: rgba(0, 0, 0, 0.6);
  }

  &:not(:disabled):hover {
    border-color: rgba(74, 222, 128, 0.4);
    background: rgba(0, 0, 0, 0.5);
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.4);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    background: rgba(0, 0, 0, 0.3);
  }
`;

const NotificationAndButtonContainer = styled.div`
  margin-top: 40px;
  padding-top: 32px;
  border-top: 1px solid rgba(74, 222, 128, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;

  @media (max-width: 900px) {
    align-items: stretch;
  }
`;

const NotificationContainer = styled.div`
  width: 100%;
  max-width: 500px;
`;

const NotificationSection = styled.div`
  padding: 20px;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  border: 1px solid rgba(74, 222, 128, 0.2);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
`;

const NotificationTitle = styled.h3`
  margin: 0 0 16px 0;
  color: white;
  font-size: 0.875rem;
  font-weight: 600;
  letter-spacing: 0.01em;
`;

const RadioGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const RadioOption = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const RadioInput = styled.input`
  width: 16px;
  height: 16px;
  accent-color: #4ade80;
`;

const RadioLabel = styled.label`
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.9);
  cursor: pointer;
  line-height: 1.5;
`;

const CommunicationSection = styled.div<{ $show: boolean }>`
  margin-top: 16px;
  padding: 12px;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 8px;
  border: 1px solid rgba(74, 222, 128, 0.15);
  display: ${props => props.$show ? 'block' : 'none'};
`;

const CommunicationTitle = styled.h4`
  margin: 0 0 12px 0;
  color: white;
  font-size: 0.8125rem;
  font-weight: 600;
  letter-spacing: 0.01em;
`;

const CheckboxGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

const CheckboxOption = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

const CheckboxInput = styled.input`
  width: 14px;
  height: 14px;
  accent-color: #4ade80;
`;

const CheckboxLabel = styled.label`
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.9);
  cursor: pointer;
  line-height: 1.5;
`;

const ValidationErrors = styled.div`
  margin-bottom: 16px;
  padding: 12px 16px;
  background: #fee;
  border: 1px solid #fcc;
  border-radius: 8px;
  color: #c33;
  font-size: 0.9rem;
  line-height: 1.4;

  ul {
    margin: 0;
    padding-left: 20px;
  }

  li {
    margin-bottom: 4px;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const Proceed = styled(motion.button)`
  margin: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #4ade80 0%, #22c55e 100%);
  color: white;
  border: 0;
  border-radius: 12px;
  padding: 14px 40px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 16px rgba(74, 222, 128, 0.3);
  min-width: 220px;
  letter-spacing: 0.01em;

  &:hover { 
    transform: translateY(-2px); 
    box-shadow: 0 8px 24px rgba(74, 222, 128, 0.4);
  }
  &:active { 
    transform: translateY(0); 
    box-shadow: 0 4px 12px rgba(74, 222, 128, 0.3); 
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
  }
`;

/* ----------------------------- Loading Modal ----------------------------- */
const ModalOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  backdrop-filter: blur(10px);
`;

const ModalContent = styled(motion.div)`
  background: rgba(0, 0, 0, 0.9);
  backdrop-filter: blur(20px);
  border-radius: 24px;
  padding: 40px;
  max-width: 400px;
  width: 90%;
  text-align: center;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
  border: 1px solid rgba(74, 222, 128, 0.3);
`;

const LoadingIcon = styled(motion.div)`
  width: 60px;
  height: 60px;
  margin: 0 auto 20px;
  border: 4px solid rgba(74, 222, 128, 0.2);
  border-top: 4px solid #4ade80;
  border-radius: 50%;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

const ModalTitle = styled.h3`
  color: #4ade80;
  margin: 0 0 10px;
  font-size: 1.4rem;
  font-weight: 700;
`;

const ModalMessage = styled.p`
  color: rgba(255, 255, 255, 0.8);
  margin: 0;
  font-size: 1rem;
  line-height: 1.5;
`;

/* --------------------------------- Page -------------------------------- */
const ProfilePage: React.FC = () => {
  const navigate = useNavigate();
  const fileInputId = useId();


  const [formData, setFormData] = useState<ProfileData>({
    fullName: "",
    location: "",
    headline: "",
    aboutMe: "",
    education: "",
    experience: "",
    email: "",
    phone: "",
    preferredJobRole: "",
    linkedin: "",
    optInStatus: false,
    communicationMethod: ""
  });

  const [isUploading, setIsUploading] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [dataAutoFilled, setDataAutoFilled] = useState(false);
  const [isLoadingProfile, setIsLoadingProfile] = useState(false);
  const [validationErrors, setValidationErrors] = useState<string[]>([]);

  const onChange =
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;

      // Enforce character limits for text areas
      let processedValue = value;
      if (['headline', 'aboutMe', 'education', 'experience'].includes(name)) {
        processedValue = value.slice(0, 200);
      }

      // For phone number, restrict to only digits and plus sign
      if (name === 'phone') {
        // Remove any characters that aren't digits or plus signs
        processedValue = value.replace(/[^\d+]/g, '');
        // Limit length to prevent extremely long entries
        processedValue = processedValue.slice(0, 20);
      }

      setFormData(prev => ({ ...prev, [name]: processedValue }));
      // Clear validation errors when user starts typing
      if (validationErrors.length > 0) {
        setValidationErrors([]);
      }
    };

  const onPhoneBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { value } = e.target;

    // Format phone number only when user leaves the field
    if (value) {
      // Remove all non-digit characters
      const digitsOnly = value.replace(/\D/g, '');

      let formattedValue = '';
      if (digitsOnly.length === 10) {
        // Exactly 10 digits: add +1 prefix
        formattedValue = '+1' + digitsOnly;
      } else if (digitsOnly.length === 11 && digitsOnly.startsWith('1')) {
        // 11 digits starting with 1: treat first digit as country code
        formattedValue = '+1' + digitsOnly.slice(1);
      } else if (digitsOnly.length > 0) {
        // Keep as-is for other lengths, but clean up any non-digits
        formattedValue = digitsOnly;
      }

      // Limit to reasonable length
      formattedValue = formattedValue.slice(0, 12);

      setFormData(prev => ({ ...prev, phone: formattedValue }));
    }
  };

  // Helper function to convert communication method to backend format
  const getCommunicationMethodValue = (methods: string[]): string => {
    if (methods.length === 0) return '';
    if (methods.length === 1) return methods[0];
    return 'both';
  };

  // Helper function to check if at least one communication method is selected
  const hasValidCommunicationMethod = (): boolean => {
    const method = formData.communicationMethod || '';
    return method === 'email' || method === 'phone' || method === 'both';
  };

  // Helper function to get communication methods as array for checkbox state
  const getCommunicationMethodsArray = (): string[] => {
    const method = formData.communicationMethod || '';
    if (method === 'both') return ['email', 'phone'];
    if (method === 'email') return ['email'];
    if (method === 'phone') return ['phone'];
    return [];
  };

  // Validation function
  const validateForm = (): boolean => {
    const errors: string[] = [];

    // Required fields validation
    if (!formData.fullName.trim()) {
      errors.push("Full Name is required");
    }
    if (!formData.email.trim()) {
      errors.push("Email is required");
    }
    if (!formData.phone.trim()) {
      errors.push("Phone Number is required");
    }

    // Communication method validation when opt-in is enabled
    if (formData.optInStatus === true) {
      if (!hasValidCommunicationMethod()) {
        errors.push("At least one communication method must be selected when opt-in is enabled");
      }
    }

    setValidationErrors(errors);
    return errors.length === 0;
  };

  // Load existing profile data on component mount
  React.useEffect(() => {
    const loadExistingProfile = async () => {
      const storedEmail = getUserEmail();
      if (storedEmail) {
        setIsLoadingProfile(true);
        try {
          const existingProfile = await getProfile(storedEmail);
          if (existingProfile) {
            setFormData(existingProfile);
            console.log('✅ Loaded existing profile data from DynamoDB');
          } else {
            console.log('ℹ️ No existing profile found, starting fresh');
          }
        } catch (error) {
          console.error('❌ Failed to load existing profile:', error);
          // Don't show error to user, just continue with empty form
        } finally {
          setIsLoadingProfile(false);
        }
      }
    };

    loadExistingProfile();
  }, []);

  const handleResume = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsUploading(true);
    try {
      const parsedData = await uploadResumeAndParse(file);
      setFormData(parsedData);
      setDataAutoFilled(true);
    } catch (error) {
      alert('Failed to process resume. Please try again.');
    } finally {
      setIsUploading(false);
    }
  };

  const handleSaveProfile = async () => {
    // Validate form before saving
    if (!validateForm()) {
      return; // Stop if validation fails
    }

    setIsSaving(true);
    try {
      await saveProfile(formData);

      // Store email in cookie for future visits
      if (formData.email) {
        setUserEmail(formData.email);
        console.log('✅ User email stored in cookie for future visits');
      }

      // Always navigate directly to job options after saving
      navigate("/job-options", { state: { userName: formData.fullName || "User" } });
    } catch (error) {
      console.error('Save profile error:', error);
      alert(`Failed to save profile: ${error instanceof Error ? error.message : 'Unknown error'}`);
      setIsSaving(false);
    }
  };

  return (
    <>
      <GlobalStyle />

      {/* Loading Modal */}
      {(isUploading || isSaving || isLoadingProfile) && (
        <ModalOverlay
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <ModalContent
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
          >
            <LoadingIcon />
            <ModalTitle>
              {isLoadingProfile ? 'Loading Your Profile' :
               isUploading ? 'Processing Your Resume' : 'Saving Your Profile'}
            </ModalTitle>
            <ModalMessage>
              {isLoadingProfile ? 'Please wait while we retrieve your saved profile information...' :
               isUploading
                ? 'Please wait while we analyze your resume and extract your information...'
                : 'Please wait while we save your profile information...'
              }
            </ModalMessage>
          </ModalContent>
        </ModalOverlay>
      )}

      <Page>
        <Header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <Title
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            Welcome to JobSearch AI!
          </Title>
          <DateText
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {new Date().toLocaleDateString(undefined, {
              weekday: "short", day: "2-digit", month: "long", year: "numeric"
            })}
          </DateText>
        </Header>

        {/* Upload announcement strip */}
        {/* Combined Profile card with upload section */}
        <Card
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >

          <ProfileSection>
            <ProfileHeader>
              <Avatar aria-hidden></Avatar>
              <Heading>My Profile</Heading>
              <HiddenFile id={fileInputId} accept=".pdf,.doc,.docx" onChange={handleResume} disabled={isUploading || isSaving || isLoadingProfile}/>
              <UploadButton
                as="label"
                htmlFor={fileInputId}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={isUploading || isSaving || isLoadingProfile}
              >
                <span>📄</span>
                {isUploading ? 'Processing Resume...' : 'Upload Resume'}
              </UploadButton>
            </ProfileHeader>

            <EditMessage $show={dataAutoFilled}>
              You can edit any of the information below if the extracted resume needs corrections!
            </EditMessage>

            <Grid>
            <Field>
              <Label htmlFor="fullName" $required>Full Name</Label>
              <Input id="fullName" name="fullName" placeholder="Full name" value={formData.fullName} onChange={onChange} disabled={isUploading || isSaving || isLoadingProfile}/>
            </Field>

            <Field>
              <Label htmlFor="email" $required>Email</Label>
              <Input id="email" name="email" placeholder="Email address" value={formData.email} onChange={onChange} disabled={isUploading || isSaving || isLoadingProfile}/>
            </Field>

            <Field>
              <Label htmlFor="phone" $required>Phone Number</Label>
              <Input id="phone" name="phone" placeholder="10 digits (area code + number) or +1XXXXXXXXXX" value={formData.phone} onChange={onChange} onBlur={onPhoneBlur} disabled={isUploading || isSaving || isLoadingProfile}/>
            </Field>

            <Field>
              <Label htmlFor="location">Location</Label>
              <Input id="location" name="location" placeholder="City, State" value={formData.location} onChange={onChange} disabled={isUploading || isSaving || isLoadingProfile}/>
            </Field>

            <Field>
              <Label htmlFor="headline">Headline</Label>
              <TextArea id="headline" name="headline" placeholder="Professional headline (200 characters max)" value={formData.headline} onChange={onChange} disabled={isUploading || isSaving || isLoadingProfile}/>
            </Field>

            <Field>
              <Label htmlFor="aboutMe">About Me</Label>
              <TextArea id="aboutMe" name="aboutMe" placeholder="Tell us about yourself, your background, interests, and career goals (200 characters max)" value={formData.aboutMe} onChange={onChange} disabled={isUploading || isSaving || isLoadingProfile}/>
            </Field>

            <Field>
              <Label htmlFor="education">Education</Label>
              <TextArea id="education" name="education" placeholder="List any diplomas, degrees, or certifications. (200 characters max)" value={formData.education} onChange={onChange} disabled={isUploading || isSaving || isLoadingProfile}/>
            </Field>

            <Field>
              <Label htmlFor="experience">Experience</Label>
              <TextArea id="experience" name="experience" placeholder="List jobs, community service, and more (200 characters max)" value={formData.experience} onChange={onChange} disabled={isUploading || isSaving || isLoadingProfile}/>
            </Field>

            <Field>
              <Label htmlFor="preferredJobRole">Preferred Job Role</Label>
              <Input id="preferredJobRole" name="preferredJobRole" placeholder="Preferred job role" value={formData.preferredJobRole} onChange={onChange} disabled={isUploading || isSaving || isLoadingProfile}/>
            </Field>

            <Field>
              <Label htmlFor="linkedin">LinkedIn</Label>
              <Input id="linkedin" name="linkedin" placeholder="LinkedIn profile URL" value={formData.linkedin} onChange={onChange} disabled={isUploading || isSaving || isLoadingProfile}/>
            </Field>
          </Grid>

          <NotificationAndButtonContainer>
            <NotificationContainer>
              <NotificationTitle>Job Notification Preferences</NotificationTitle>
              <NotificationSection>
                <RadioGroup>
                  <RadioOption>
                    <RadioInput
                      type="radio"
                      id="notifications-yes"
                      name="jobNotifications"
                      value="true"
                      checked={formData.optInStatus === true}
                      onChange={(e) => {
                        setFormData(prev => ({ ...prev, optInStatus: true }));
                        // Clear validation errors when changing notification preference
                        if (validationErrors.length > 0) {
                          setValidationErrors([]);
                        }
                      }}
                      disabled={isUploading || isSaving || isLoadingProfile}
                    />
                    <RadioLabel htmlFor="notifications-yes">Yes, I want to receive job notifications</RadioLabel>
                  </RadioOption>
                  <RadioOption>
                    <RadioInput
                      type="radio"
                      id="notifications-no"
                      name="jobNotifications"
                      value="false"
                      checked={formData.optInStatus === false}
                      onChange={(e) => {
                        setFormData(prev => ({
                          ...prev,
                          optInStatus: false,
                          communicationMethod: ''
                        }));
                        // Clear validation errors when changing notification preference
                        if (validationErrors.length > 0) {
                          setValidationErrors([]);
                        }
                      }}
                      disabled={isUploading || isSaving || isLoadingProfile}
                    />
                    <RadioLabel htmlFor="notifications-no">No, I don't want job notifications</RadioLabel>
                  </RadioOption>
                </RadioGroup>

                <CommunicationSection $show={formData.optInStatus === true}>
                  <CommunicationTitle>Preferred Communication Method *</CommunicationTitle>
                  {formData.optInStatus === true && !hasValidCommunicationMethod() && (
                    <div style={{ color: '#d32f2f', fontSize: '12px', marginBottom: '8px' }}>
                      Please select at least one communication method to receive notifications.
                    </div>
                  )}
                  <CheckboxGroup>
                    <CheckboxOption>
                      <CheckboxInput
                        type="checkbox"
                        id="comm-email"
                        checked={getCommunicationMethodsArray().includes('email')}
                        onChange={(e) => {
                          const currentMethods = getCommunicationMethodsArray();
                          let newMethods: string[];
                          if (e.target.checked) {
                            newMethods = [...currentMethods, 'email'];
                          } else {
                            newMethods = currentMethods.filter(m => m !== 'email');
                          }
                          setFormData(prev => ({ ...prev, communicationMethod: getCommunicationMethodValue(newMethods) }));
                          // Clear validation errors when changing communication methods
                          if (validationErrors.length > 0) {
                            setValidationErrors([]);
                          }
                        }}
                        disabled={isUploading || isSaving || isLoadingProfile}
                      />
                      <CheckboxLabel htmlFor="comm-email">Email</CheckboxLabel>
                    </CheckboxOption>
                    <CheckboxOption>
                      <CheckboxInput
                        type="checkbox"
                        id="comm-phone"
                        checked={getCommunicationMethodsArray().includes('phone')}
                        onChange={(e) => {
                          const currentMethods = getCommunicationMethodsArray();
                          let newMethods: string[];
                          if (e.target.checked) {
                            newMethods = [...currentMethods, 'phone'];
                          } else {
                            newMethods = currentMethods.filter(m => m !== 'phone');
                          }
                          setFormData(prev => ({ ...prev, communicationMethod: getCommunicationMethodValue(newMethods) }));
                          // Clear validation errors when changing communication methods
                          if (validationErrors.length > 0) {
                            setValidationErrors([]);
                          }
                        }}
                        disabled={isUploading || isSaving || isLoadingProfile}
                      />
                      <CheckboxLabel htmlFor="comm-phone">Phone (SMS)</CheckboxLabel>
                    </CheckboxOption>
                  </CheckboxGroup>
                </CommunicationSection>
              </NotificationSection>
            </NotificationContainer>

            {validationErrors.length > 0 && (
              <ValidationErrors>
                <strong>Please fix the following issues:</strong>
                <ul>
                  {validationErrors.map((error, index) => (
                    <li key={index}>{error}</li>
                  ))}
                </ul>
              </ValidationErrors>
            )}

            <Proceed 
              onClick={handleSaveProfile} 
              disabled={isUploading || isSaving || isLoadingProfile || validationErrors.length > 0 || (formData.optInStatus === true && !hasValidCommunicationMethod())}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isSaving ? '💾 Saving Profile...' : 'Proceed to Job Search'}
            </Proceed>
          </NotificationAndButtonContainer>
          </ProfileSection>
        </Card>
      </Page>
    </>
  );
};

export default ProfilePage;
