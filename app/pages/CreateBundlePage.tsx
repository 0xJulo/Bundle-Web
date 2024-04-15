import React from 'react';

interface CreateBundleScreenProps {
  handleCreateNewBundle: () => void;
}

const CreateBundleScreen: React.FC<CreateBundleScreenProps> = ({ handleCreateNewBundle }) => {
  return(
    <div>
      <p>CreateBundleScreen</p>
      <button onClick={handleCreateNewBundle}>close</button>
    </div>
  );
};

export default CreateBundleScreen;

