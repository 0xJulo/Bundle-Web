import React from 'react';

interface ButtonProps {
    label: string;
    onClick: (bundleId: number) => void;
    bundleId: number;
}

const Button: React.FC<ButtonProps> = ({ label, onClick, bundleId }) => {
  return (
    <div className='flex items-center gap-2 bg-[#80BAA8] rounded-[10px] p-2 pl-3'>
        <button onClick={() => onClick(bundleId)}>{label}</button>
    </div>
  ); 
};

export default Button;

