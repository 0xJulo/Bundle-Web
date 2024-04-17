import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import LoginButton from './LoginButton';
import NotificationsIcon from './NotificationsIcon';

const Header: React.FC = () => {
  return (
    <div className="absolute top-0 z-50 flex justify-between w-full p-4">
      <Link href="/">
        <Image src="/bundle-logo.svg" alt="Bundle Logo" width={130} height={100} />
      </Link>
      <div className="flex">
        <NotificationsIcon />
        <LoginButton />
      </div>
      
    </div>
  );
};

export default Header;

