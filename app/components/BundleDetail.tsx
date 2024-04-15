'use client';
import React, { useState } from 'react'; // Import useState from React
import { useRouter } from 'next/router';


// Component imports
import Button from './Button';

// Data imports
import ExampleBundles, { Bundle } from '../utils/ExampleDataStore';

const BundleDetail: React.FC = () => {
    const [isOpened, setOpened] = useState<boolean>(false);
    const bundle: Bundle = ExampleBundles[0];
    // const router = useRouter();

    // Function to toggle the opened state
    const toggleOpen = () => setOpened(!isOpened);

    // const handleRunBundle = (bundleId: number) => {
    //     router.push(`/run-bundle/${bundleId}`);
    // }

    return (
        
        <div className='flex-row bg-[#EEECEC] my-4 rounded-[12px] border-[1px] border-[#D3D3D3]'>
            <div className='bg-gray-100 flex p-2 pl-3 rounded-t-[10px] font-semibold'>
                <p>{bundle.type}</p>
            </div>

            <div className='flex flex-col justify-between p-3'>
                <div>
                    <h2 className='text-2xl font-semibold'>{bundle.name}</h2>
                    <p>{bundle.description}</p>
                </div>
                <div className='mt-4'>
                    <Button label='Run Bundle' onClick={() => {}} bundleId={bundle.id} />
                </div>
            </div>

            {/* {isOpened && (
                <div>
                    <div className='p-3'>
                        <p>{bundle.owner}</p>
                        <h3>Start condition</h3>
                        <p>{bundle.trigger.title}</p>
                    </div>

                    <div className='p-3'>
                        <h3>Conditions</h3>
                        {bundle.conditions.map((condition, index) => (
                            <div key={index}>
                                <p>{condition.title}</p>
                                <p>Type: {condition.type}</p>
                                <p>Source: {condition.source}</p>
                            </div>
                        ))}
                    </div>

                    <div className='p-3'>
                        <h3>Actions</h3>
                        {bundle.actions.map((action, index) => (
                            <div key={index}>
                                <p>
                                    {action.title} {action.type}
                                </p>
                                <p>Source: {action.source}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )} */}
        </div>
    );
};

export default BundleDetail;
