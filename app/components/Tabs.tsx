'use client'
import React, { useState } from 'react';

const Tabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { label: 'All', content: 'This is the content of Tab 1' },
    { label: 'Saved', content: 'This is the content of Tab 2' },
    { label: 'Popular', content: 'This is the content of Tab 3' },
    { label: 'Pre-defined', content: 'This is the content of Tab 4' },
  ];

  return (
    <div className='w-full mb-8 '>
        <div>
            {tabs.map((tab, index) => (
                <button 
                    key={index}
                    onClick={() => setActiveTab(index)}
                    className={`px-4 py-2 ${
                        activeTab === index
                          ? 'border-b-2 border-[#80BAA8] text-[#80BAA8]'
                          : 'text-gray-500 hover:text-gray-700'
                      }`}
                >
                    {tab.label}
                </button>
            ))}
        </div>
    </div>
  );
};

export default Tabs;

