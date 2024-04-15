import React from 'react';

import Add from '@mui/icons-material/Add';

const CreateBundleButton: React.FC = () => {
  return <button className='bg-[#80BAA8] text-white rounded-full w-16 h-16 flex items-center justify-center fixed bottom-0 right-0 m-4'><Add fontSize="large" /></button>;
};

export default CreateBundleButton;