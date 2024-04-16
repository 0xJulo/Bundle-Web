import React from 'react';
import Image from 'next/image';

import LoginButton from './LoginButton';

const Header: React.FC = () => {
  return (
    <div className="absolute top-0 z-50 flex justify-between w-full p-4">
      <Image src="/bundle-logo.svg" alt="Bundle Logo" width={130} height={100} />
      <LoginButton />
    </div>
  );
};

export default Header;

