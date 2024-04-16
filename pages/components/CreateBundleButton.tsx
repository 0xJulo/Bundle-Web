import React from 'react';
import { useRouter } from 'next/router';

import Add from '@mui/icons-material/Add';

interface CreateBundleButtonProps {
  handleCreateNewBundle: () => void;
}

const CreateBundleButton: React.FC<CreateBundleButtonProps> = () => {
  const router = useRouter();

  const handleCreateNewBundle = () => {
    router.push(`/screens/CreateBundlePage`);
  }

  return <button 
        className='bg-[#80BAA8] text-white rounded-full w-16 h-16 flex items-center justify-center fixed bottom-0 right-0 m-4'
        onClick={handleCreateNewBundle}
      >
        <Add fontSize="large" />
      </button>;
};

export default CreateBundleButton;