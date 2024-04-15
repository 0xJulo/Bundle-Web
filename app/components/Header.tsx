import React from 'react';

import Button from './Button';

const Header: React.FC = () => {
  return (
    <div className="absolute top-0 z-50 flex justify-between w-full p-4">
      <h1>Bundle</h1>
      <Button />
    </div>
  );
};

export default Header;

