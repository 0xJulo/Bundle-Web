'use client';
import React, { useState } from 'react';
import ExampleBundles, { Bundle } from '../utils/ExampleDataStore';
import BundleDetail from './BundleDetail';

const Tabs: React.FC = () => {
    const [activeTab, setActiveTab] = useState(0);

    const tabs = [
        { label: 'All', content: 'This is the content of Tab 1' },
        { label: 'Saved', content: 'This is the content of Tab 2' },
        { label: 'Popular', content: 'This is the content of Tab 3' },
        { label: 'Pre-defined', content: 'This is the content of Tab 4' },
    ];

    const getFilteredBundles = () => {
        if (tabs[activeTab].label === 'All') {
            return ExampleBundles;
        } else {
            return ExampleBundles.filter(
                (bundle) => bundle.type === tabs[activeTab].label
            );
        }
    };

    const filteredBundles = getFilteredBundles();

    return (
        <div className='w-full mb-8 mt-10'>
            <div>
                {tabs.map((tab, index) => (
                    <button
                        key={index}
                        onClick={() => setActiveTab(index)}
                        className={`mb-6 px-4 py-2 ${
                            activeTab === index
                                ? 'border-b-2 border-[#80BAA8] text-[#80BAA8]'
                                : 'text-gray-500 hover:text-gray-700'
                        }`}
                    >
                        {tab.label}
                    </button>
                ))}
                <div className='md:grid md:grid-cols-2 md:gap-x-6'>
                    {filteredBundles.map((bundle) => (
                        <BundleDetail key={bundle.id} bundle={bundle} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Tabs;
