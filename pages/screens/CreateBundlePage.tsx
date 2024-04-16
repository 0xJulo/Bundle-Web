import React from 'react';

interface CreateBundleScreenProps {
    handleCreateNewBundle: () => void;
}

const CreateBundleScreen: React.FC<CreateBundleScreenProps> = ({
    handleCreateNewBundle,
}) => {
    return (
        <section className='h-[100vh] mx-4 mt-24 md:mx-10 md:mt-24'>
            <p>CreateBundleScreen</p>
            <button onClick={handleCreateNewBundle}>close</button>
        </section>
    );
};

export default CreateBundleScreen;
