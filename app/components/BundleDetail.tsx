'use client';
import React, { useState } from 'react'; // Import useState from React

import AddIcon from '@mui/icons-material/Add';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ExpandLess from '@mui/icons-material/ExpandLess';

// Data imports
import ExampleBundles, { Bundle } from '../utils/ExampleDataStore';

const BundleDetail: React.FC = () => {
    const [isOpened, setOpened] = useState<boolean>(false);
    const bundle: Bundle = ExampleBundles[0];

    // Function to toggle the opened state
    const toggleOpen = () => setOpened(!isOpened);

    return (
        <div className='bg-[#EEECEC] my-4 rounded-[12px] mx-2 border-[1px] border-[#D3D3D3]'>
            <div className='bg-[#80BAA8] flex p-2 pl-3 rounded-t-[10px] font-semibold'>
                <p>{bundle.type}</p>
            </div>

            <div className='flex justify-between p-3'>
                <div>
                    <h2 className='text-2xl font-semibold'>{bundle.name}</h2>
                    <p>{bundle.description}</p>
                </div>
                {isOpened ? (
                    <ExpandLess onClick={toggleOpen} fontSize='large' />
                ) : (
                    <ExpandMore onClick={toggleOpen} fontSize='large' />
                )}
            </div>

            {isOpened && (
                <div className='p-3'>
                    <p>{bundle.owner}</p>
                </div>
            )}
        </div>
    );
};

export default BundleDetail;