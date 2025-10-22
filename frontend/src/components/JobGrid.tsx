import React from 'react';
import styled from 'styled-components';
import { saveProfile, getProfile, ProfileData } from '../services/profileService';
import { getUserEmail } from '../utils/cookieUtils';

const JobGridContainer = styled.div`
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  margin-top: 12px;
  position: relative;
  z-index: 10;

  @media (max-width: 480px) {
    padding: 0;
    gap: 12px;
    margin-left: -50vw;
    margin-right: -50vw;
    width: 100vw;
    position: relative;
    left: 50%;
  }
`;

const JobCard = styled.div`
  background: linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%);
  border-radius: 16px;
  padding: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
  border: 1px solid #3a3a3a;
  border-left: 4px solid #ffffff;
  position: relative;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;

  &:hover {
    box-shadow: 0 8px 24px rgba(255, 255, 255, 0.15);
    transform: translateY(-2px);
    border-left-color: #e0e0e0;
    border-color: #4a4a4a;
  }

  @media (max-width: 480px) {
    padding: 16px 12px;
    gap: 8px;
    border-left-width: 4px;
    margin: 0;
    border-radius: 12px;
  }
`;

const JobHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 8px;
  gap: 12px;
  flex-wrap: wrap;

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 12px;
  }

  @media (max-width: 480px) {
    margin-bottom: 12px;
  }
`;

const JobInfo = styled.div`
  flex: 1 1 auto;
  min-width: 0;
`;

const JobTitle = styled.h3`
  color: #ffffff;
  font-size: 1.2rem;
  margin: 0 0 4px 0;
  font-weight: 700;
  word-wrap: break-word;
  line-height: 1.3;

  @media (max-width: 480px) {
    font-size: 1.05rem;
    margin: 0 0 6px 0;
  }
`;

const Company = styled.p`
  color: #b0b0b0;
  margin: 0 0 4px 0;
  font-size: 0.9rem;
  word-wrap: break-word;

  @media (max-width: 480px) {
    font-size: 0.9rem;
    margin: 0 0 8px 0;
  }
`;

const NotificationToggleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;

  @media (max-width: 600px) {
    width: 100%;
    justify-content: flex-start;
  }
`;

const ToggleLabel = styled.label<{ $isAutoChecked?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  cursor: pointer;
  font-size: 0.8rem;
  color: ${props => props.$isAutoChecked ? '#8B1538' : '#333'};
  font-weight: 500;
  position: relative;
  max-width: 100%;

  &::before {
    content: ${props => props.$isAutoChecked ? '"(Matches your preferred role)"' : '""'};
    font-size: 0.6rem;
    color: #8B1538;
    font-weight: 400;
    margin-bottom: 2px;
    white-space: normal;
    word-wrap: break-word;
  }

  span {
    white-space: normal;
    word-wrap: break-word;
    
    @media (max-width: 480px) {
      font-size: 0.75rem;
    }
  }
`;

const ToggleSwitch = styled.div<{ $isOn: boolean }>`
  position: relative;
  width: 32px;
  height: 18px;
  background: ${props => props.$isOn ? '#8B1538' : '#ccc'};
  border-radius: 9px;
  transition: background 0.2s ease;
  cursor: pointer;
  flex-shrink: 0;

  &::after {
    content: '';
    position: absolute;
    top: 2px;
    left: ${props => props.$isOn ? '16px' : '2px'};
    width: 14px;
    height: 14px;
    background: white;
    border-radius: 50%;
    transition: left 0.2s ease;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
`;

const ToggleInput = styled.input`
  display: none;
`;

const JobChipsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  flex-wrap: wrap;
  align-items: center;
  margin: 8px 0;

  @media (max-width: 480px) {
    margin: 10px 0;
    gap: 6px;
  }
`;

const JobChip = styled.span`
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  padding: 6px 14px;
  font-size: 0.8rem;
  font-weight: 500;
  color: #e0e0e0;
  white-space: nowrap;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  align-self: flex-start;

  @media (max-width: 480px) {
    font-size: 0.72rem;
    padding: 4px 10px;
  }
`;

const JobDescription = styled.p`
  color: #c0c0c0;
  line-height: 1.6;
  margin: 12px 0;
  font-size: 0.95rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;

  @media (max-width: 480px) {
    margin: 10px 0;
    font-size: 0.88rem;
    line-height: 1.5;
  }
`;

const RequirementsContent = styled.div`
  margin: 4px 0;
`;

const RequirementsTitle = styled.h4`
  color: #ffffff;
  font-size: 0.95rem;
  margin: 0 0 4px 0;
  font-weight: 600;
`;

const RequirementsList = styled.ul`
  margin: 0;
  padding-left: 16px;
  color: #b0b0b0;
  font-size: 0.88rem;
  line-height: 1.4;
`;

const WhyThisMatchesContainer = styled.div`
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.03) 100%);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 12px;
  padding: 16px;
  margin: 12px 0 8px 0;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(255, 255, 255, 0.02);
    border-radius: 12px;
    z-index: -1;
  }

  @media (max-width: 480px) {
    padding: 15px;
    border-radius: 10px;
  }
`;

const WhyThisMatchesTitle = styled.h4`
  margin: 0 0 10px 0;
  font-size: 1rem;
  font-weight: 700;
  color: #ffffff;

  @media (max-width: 480px) {
    font-size: 14px;
    margin: 0 0 8px 0;
  }
`;

const WhyThisMatchesText = styled.p`
  margin: 0;
  font-size: 0.9rem;
  color: #d0d0d0;
  line-height: 1.6;
  text-shadow: none;

  @media (max-width: 480px) {
    font-size: 13px;
    line-height: 1.4;
  }
`;

const ButtonContainer = styled.div`
  margin-top: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: stretch;
  }

  @media (max-width: 480px) {
    gap: 12px;
  }
`;

const ApplyButton = styled.button`
  background: linear-gradient(135deg, #ffffff 0%, #e0e0e0 100%);
  color: #000000;
  border: none;
  padding: 12px 28px;
  border-radius: 25px;
  font-weight: 700;
  cursor: pointer;
  width: auto;
  min-width: 140px;
  max-width: 200px;
  font-size: 0.95rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(255, 255, 255, 0.2);
  margin: 0;
  margin-bottom: 10px;
  display: inline-block;

  &:hover {
    background: linear-gradient(135deg, #ffffff 0%, #f5f5f5 100%);
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(255, 255, 255, 0.3);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 8px rgba(255, 255, 255, 0.15);
  }

  @media (max-width: 600px) {
    width: 100%;
    max-width: 100%;
  }

  @media (max-width: 480px) {
    font-size: 0.85rem;
    padding: 10px 20px;
  }
`;

interface Job {
  id: string;
  title: string;
  description: string;
  company: string;
  salary_max: string;
  salary_min: string;
  location: string;
  type: string;
  industry?: string;
  experience: string;
  fit?: string;
  remote?: string;
  external_apply_url?: string;
}

interface JobGridProps {
  jobs: Job[];
}

const JobGrid: React.FC<JobGridProps> = ({ jobs }) => {
  const [jobNotifications, setJobNotifications] = React.useState<{ [jobId: string]: boolean }>({});
  const [autoEnabledJobs, setAutoEnabledJobs] = React.useState<Set<string>>(new Set());
  const [saveTimeout, setSaveTimeout] = React.useState<NodeJS.Timeout | null>(null);

  // Load user profile and auto-check notifications based on job title matches
  React.useEffect(() => {
    const loadUserProfile = async () => {
      try {
        const userEmail = getUserEmail();
        if (userEmail) {
          const profile = await getProfile(userEmail);
          if (profile && profile.preferredJobRole && profile.preferredJobRole !== 'N/A' && profile.preferredJobRole.trim() !== '') {
            const autoEnabledNotifications: { [jobId: string]: boolean } = {};
            const autoEnabledJobIds = new Set<string>();

            // Split preferred roles by comma and compare each individually
            const preferredRoles = profile.preferredJobRole.split(',').map(role => role.trim());

            jobs.forEach(job => {
              // Check if any of the preferred roles match this job title
              const hasMatch = preferredRoles.some(role => {
                const roleLower = role.toLowerCase();
                const titleLower = job.title.toLowerCase();
                return titleLower.includes(roleLower) || roleLower.includes(titleLower);
              });

              if (hasMatch) {
                autoEnabledNotifications[job.id] = true;
                autoEnabledJobIds.add(job.id);
              }
            });

            if (Object.keys(autoEnabledNotifications).length > 0) {
              setJobNotifications(autoEnabledNotifications);
              setAutoEnabledJobs(autoEnabledJobIds);
            }
          }
        }
      } catch (error) {
        // Failed to load user profile
      }
    };

    loadUserProfile();
  }, [jobs]);

  // Cleanup timeout on unmount
  React.useEffect(() => {
    return () => {
      if (saveTimeout) {
        clearTimeout(saveTimeout);
      }
    };
  }, [saveTimeout]);


  const formatSalary = (lower: string, upper: string) => {
    if (lower === "Not specified" || upper === "Not specified") {
      return "Salary not specified";
    }

    // Clean the salary values by removing $ and commas
    const cleanLower = lower.replace(/[$,]/g, '');
    const cleanUpper = upper.replace(/[$,]/g, '');

    // Parse as integers and format
    const lowerNum = parseInt(cleanLower);
    const upperNum = parseInt(cleanUpper);

    if (isNaN(lowerNum) || isNaN(upperNum)) {
      return "Salary information unavailable";
    }

    return `$${lowerNum.toLocaleString()}-$${upperNum.toLocaleString()}/year`;
  };

  const handleApplyClick = (job: Job) => {
    console.log('External apply URL:', job.external_apply_url);
    if (job.external_apply_url && job.external_apply_url.trim() !== '' && job.external_apply_url !== 'Not specified') {
      window.open(job.external_apply_url, '_blank', 'noopener,noreferrer');
    }
  };

  const saveProfileChanges = async (updatedNotifications: { [jobId: string]: boolean }) => {
    try {
      const userEmail = getUserEmail();

      if (userEmail) {
        // Get current profile data
        const currentProfile = await getProfile(userEmail);

        if (currentProfile) {
          const enabledJobs = Object.entries(updatedNotifications).filter(([_, enabled]) => enabled);
          const disabledJobs = Object.entries(updatedNotifications).filter(([_, enabled]) => !enabled);

          // Get the job titles for enabled notifications
          const enabledJobTitles = enabledJobs.map(([jobId, _]) => {
            const job = jobs.find(j => j.id === jobId);
            return job?.title || '';
          }).filter(title => title);

          // Get the job titles for disabled notifications
          const disabledJobTitles = disabledJobs.map(([jobId, _]) => {
            const job = jobs.find(j => j.id === jobId);
            return job?.title || '';
          }).filter(title => title);

          // Remove duplicates from enabled job titles first
          const uniqueEnabledJobTitles = Array.from(new Set(enabledJobTitles));

          // Get existing preferred job roles
          let existingRoles: string[] = [];
          if (currentProfile.preferredJobRole && currentProfile.preferredJobRole.trim()) {
            existingRoles = currentProfile.preferredJobRole.split(',').map(role => role.trim());
          }

          // Start with existing roles
          let updatedRoles = [...existingRoles];

          // Add new enabled job titles
          uniqueEnabledJobTitles.forEach(title => {
            if (!updatedRoles.some(role => role.toLowerCase() === title.toLowerCase())) {
              updatedRoles.push(title);
            }
          });

          // Remove disabled job titles
          disabledJobTitles.forEach(title => {
            const index = updatedRoles.findIndex(role => role.toLowerCase() === title.toLowerCase());
            if (index > -1) {
              updatedRoles.splice(index, 1);
            }
          });

          // Remove duplicates (case-insensitive) and preserve original casing
          const uniqueRoles = Array.from(new Set(
            updatedRoles.map(role => role.toLowerCase())
          )).map(lowercaseRole =>
            updatedRoles.find(role => role.toLowerCase() === lowercaseRole) || lowercaseRole
          );

          const updatedProfile: ProfileData = {
            ...currentProfile,
            preferredJobRole: uniqueRoles.length > 0 ? uniqueRoles.join(', ') : ''
          };

          // Save the updated profile
          await saveProfile(updatedProfile);
        }
      }
    } catch (error) {
      // Profile update failed
    }
  };

  const handleJobToggleChange = (jobId: string, enabled: boolean) => {
    const updatedNotifications = {
      ...jobNotifications,
      [jobId]: enabled
    };

    setJobNotifications(updatedNotifications);

    // If user manually disables an auto-enabled job, remove it from auto-enabled set
    if (!enabled && autoEnabledJobs.has(jobId)) {
      setAutoEnabledJobs(prev => {
        const newSet = new Set(prev);
        newSet.delete(jobId);
        return newSet;
      });
    }

    // Clear existing timeout
    if (saveTimeout) {
      clearTimeout(saveTimeout);
    }

    // Set new timeout to save after 2 seconds
    const newTimeout = setTimeout(() => {
      saveProfileChanges(updatedNotifications);
    }, 2000);

    setSaveTimeout(newTimeout);
  };

  return (
    <JobGridContainer>
      {jobs.map((job) => (
        <JobCard key={job.id}>
          <JobHeader>
            <JobInfo>
              <JobTitle>{job.title}</JobTitle>
              <Company>{job.company}</Company>
            </JobInfo>
            <NotificationToggleContainer>
              <ToggleLabel $isAutoChecked={autoEnabledJobs.has(job.id)}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <ToggleInput
                    type="checkbox"
                    checked={jobNotifications[job.id] || false}
                    onChange={(e) => handleJobToggleChange(job.id, e.target.checked)}
                  />
                  <ToggleSwitch $isOn={jobNotifications[job.id] || false} />
                  <span>Notify me for similar roles</span>
                </div>
              </ToggleLabel>
            </NotificationToggleContainer>
          </JobHeader>

          <JobChipsContainer>
            <JobChip>📍 {job.location}</JobChip>
            <JobChip>💰 {formatSalary(job.salary_min, job.salary_max)}</JobChip>
            {job.industry && <JobChip>🏢 {job.industry}</JobChip>}
            <JobChip>{job.type}</JobChip>
            {job.remote === "yes" && <JobChip>Remote</JobChip>}
          </JobChipsContainer>

          <JobDescription>{job.description}</JobDescription>

          <RequirementsContent>
            <RequirementsTitle>Requirements:</RequirementsTitle>
            <RequirementsList>
              <li>{job.experience !== "Not specified" ? `Experience: ${job.experience}` : "Experience requirements not specified"}</li>
            </RequirementsList>
          </RequirementsContent>

          <WhyThisMatchesContainer>
            <WhyThisMatchesTitle>Why this matches you</WhyThisMatchesTitle>
            <WhyThisMatchesText>
              {job.fit || "This role aligns with your profile and career goals based on your experience and preferences."}
            </WhyThisMatchesText>
          </WhyThisMatchesContainer>

          <ButtonContainer>
            <ApplyButton onClick={() => handleApplyClick(job)}>
              Apply Now
            </ApplyButton>
          </ButtonContainer>
        </JobCard>
      ))}
    </JobGridContainer>
  );
};

export default JobGrid;
