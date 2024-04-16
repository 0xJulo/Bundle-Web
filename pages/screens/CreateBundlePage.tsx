import React from 'react';
import { useRouter } from 'next/router';

interface CreateBundleScreenProps {
    handleCreateNewBundle: () => void;
}

const CreateBundleScreen: React.FC<CreateBundleScreenProps> = ({
    handleCreateNewBundle,
}) => {
    const router = useRouter();

    const goBack = () => {
        router.back();
    }
    return (
        <section className='h-[100vh] mx-4 mt-24 md:mx-10 md:mt-24'>
            <p>CreateBundleScreen</p>
            <button onClick={goBack}>close</button>
        </section>
    );
};

export default CreateBundleScreen;
