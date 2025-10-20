import React from 'react';
import botAvatar from '../assets/bot-avatar.png';
import userAvatar from '../assets/my_profile.png';

// Placeholder logo component - replace with actual logo later
export const ASULogoImage: React.FC<{ className?: string }> = ({ className }) => (
  <div 
    className={className} 
    style={{
      height: '40px',
      width: '40px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '24px',
      fontWeight: 'bold',
      color: '#6366F1',
    }}
  >
    💼
  </div>
);

export const UserAvatarImage: React.FC<{ className?: string }> = ({ className }) => (
  <img 
    src={userAvatar} 
    alt="User Avatar" 
    className={className} 
    style={{
      width: '40px',
      height: '40px',
      borderRadius: '50%',
      objectFit: 'cover'
    }} 
  />
);

export const BotAvatarImage: React.FC<{ className?: string }> = ({ className }) => (
  <img 
    src={botAvatar} 
    alt="Bot Avatar" 
    className={className} 
    style={{
      width: '40px',
      height: '40px',
      borderRadius: '50%',
      objectFit: 'cover'
    }} 
  />
);