import React from 'react';
import { User, Atom } from 'lucide-react';

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
  <div 
    className={className} 
    style={{
      width: '40px',
      height: '40px',
      borderRadius: '50%',
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: '1px solid rgba(255, 255, 255, 0.2)',
    }}
  >
    <User size={20} color="rgba(255, 255, 255, 0.8)" />
  </div>
);

export const BotAvatarImage: React.FC<{ className?: string }> = ({ className }) => (
  <div 
    className={className} 
    style={{
      width: '40px',
      height: '40px',
      borderRadius: '50%',
      backgroundColor: 'rgba(74, 222, 128, 0.15)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: '1px solid rgba(74, 222, 128, 0.3)',
    }}
  >
    <Atom size={20} color="#4ade80" />
  </div>
);