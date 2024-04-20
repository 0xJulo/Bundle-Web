import React from 'react';

interface ButtonProps {
    label: string;
    onClick: (bundleId: number) => void;
    bundleId: number;
}

const Button: React.FC<ButtonProps> = ({ label, onClick, bundleId }) => {
  return (
      <button className='bundle-primary-button' onClick={() => {}}>{label}</button>
  ); 
};

export default Button;

