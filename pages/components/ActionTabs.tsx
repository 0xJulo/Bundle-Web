'use client';
import React, { useState } from 'react';
import ExampleBundles, { Bundle } from '../utils/ExampleDataStore';
import BundleDetail from './BundleDetail';

const ActionTabs: React.FC = () => {
    const [activeTab, setActiveTab] = useState(0);

    const tabs = [
        { label: 'Defi', content: 'This is the content of Tab 1' },
        { label: 'Transactions', content: 'This is the content of Tab 2' },
        { label: 'NFTs', content: 'This is the content of Tab 3' },
        { label: 'Bridge', content: 'This is the content of Tab 4' },
    ];

    return (
        <div className='w-full mb-8 mt-6'>
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
            {/* Defi Content */}
            {activeTab === 0 && (
                <div>
                    {/* Swap two assets on Uniswap */}
                    <div
                        id='unswiap'
                        className='mt-4 bg-gray-200 rounded-lg w-full p-6'
                    >
                        <input
                            type='radio'
                            id='condition'
                            name='condition'
                            value='condition'
                            className='mb-3 mr-2 h-5 w-5'
                        />
                        <label
                            htmlFor='condition'
                            className='bundle-text-smaller'
                        >
                            Swap two assets on Uniswap
                        </label>
                        <p>
                            This option will allow you to check a wallet for
                            assets or simply send a transaction. You may use
                            your own wallet or base your actions on someone
                            elses
                        </p>
                    </div>
                    {/* Transactions */}
                    <div
                        id='opensea'
                        className='mt-4 bg-gray-200 rounded-lg w-full p-6'
                    >
                        <input
                            type='radio'
                            id='condition'
                            name='condition'
                            value='condition'
                            className='mb-3 mr-2 h-5 w-5'
                            disabled={true}
                        />
                        <label
                            htmlFor='condition'
                            className='bundle-text-smaller text-gray-400'
                        >
                            Send transaction to another wallet
                        </label>
                        <p className='text-gray-400'>
                            This option will allow you to check a wallet for
                            assets or simply send a transaction. You may use
                            your own wallet or base your actions on someone
                            elses
                        </p>
                    </div>
                    {/* Check events from Smart Contract */}
                    <div
                        id='api'
                        className='mt-4 bg-gray-200 rounded-lg w-full p-6'
                    >
                        <input
                            type='radio'
                            id='condition'
                            name='condition'
                            value='condition'
                            className='mb-3 mr-2 h-5 w-5'
                            disabled={true}
                        />
                        <label
                            htmlFor='condition'
                            className='bundle-text-smaller text-gray-400'
                        >
                            Check events from Smart Contract
                        </label>
                        <p className='text-gray-400'>
                            This option will allow you to check a wallet for
                            assets or simply send a transaction. You may use
                            your own wallet or base your actions on someone
                            elses
                        </p>
                    </div>
                </div>
            )}
            {/* Transactions Content */}
            {activeTab === 1 && (
                <div>
                    {/* Send transactions to another wallet */}
                    <div
                        id='amount'
                        className='mt-4 bg-gray-200 rounded-lg w-full p-6'
                    >
                        <input
                            type='radio'
                            id='condition'
                            name='condition'
                            value='condition'
                            className='mb-3 mr-2 h-5 w-5'
                        />
                        <label
                            htmlFor='condition'
                            className='bundle-text-smaller'
                        >
                            Send transactions to another wallet
                        </label>
                        <p>
                            This option will allow you to check a wallet for
                            assets or simply send a transaction. You may use
                            your own wallet or base your actions on someone
                            elses
                        </p>
                    </div>
                    {/* Create Woop Pay fundraiser link */}
                    <div
                        id='nft'
                        className='mt-4 bg-gray-200 rounded-lg w-full p-6'
                    >
                        <input
                            type='radio'
                            id='condition'
                            name='condition'
                            value='condition'
                            className='mb-3 mr-2 h-5 w-5'
                        />
                        <label
                            htmlFor='condition'
                            className='bundle-text-smaller'
                        >
                            Create Woop Pay fundraiser link
                        </label>
                        <p>
                            This option will allow you to check a wallet for
                            assets or simply send a transaction. You may use
                            your own wallet or base your actions on someone
                            elses
                        </p>
                    </div>
                </div>
            )}
            {/* NFTs Content */}
            {activeTab === 2 && (
                <div>
                    {/* Sell NFT on OpenSea */}
                    <div
                        id='amount'
                        className='mt-4 bg-gray-200 rounded-lg w-full p-6'
                    >
                        <input
                            type='radio'
                            id='condition'
                            name='condition'
                            value='condition'
                            className='mb-3 mr-2 h-5 w-5'
                        />
                        <label
                            htmlFor='condition'
                            className='bundle-text-smaller'
                        >
                            Sell NFT on OpenSea
                        </label>
                        <p>
                            This option will allow you to check a wallet for
                            assets or simply send a transaction. You may use
                            your own wallet or base your actions on someone
                            elses
                        </p>
                    </div>
                    {/* Check presence of NFT in wallet */}
                    <div
                        id='nft'
                        className='mt-4 bg-gray-200 rounded-lg w-full p-6'
                    >
                        <input
                            type='radio'
                            id='condition'
                            name='condition'
                            value='condition'
                            className='mb-3 mr-2 h-5 w-5'
                            disabled={true}
                        />
                        <label
                            htmlFor='condition'
                            className='bundle-text-smaller text-gray-400'
                        >
                            Check for presence of NFT in wallet
                        </label>
                        <p className='text-gray-400'>
                            This option will allow you to check a wallet for
                            assets or simply send a transaction. You may use
                            your own wallet or base your actions on someone
                            elses
                        </p>
                    </div>
                    {/* Check for transactions in wallet */}
                    <div
                        id='transactions'
                        className='mt-4 bg-gray-200 rounded-lg w-full p-6'
                    >
                        <input
                            type='radio'
                            id='condition'
                            name='condition'
                            value='condition'
                            className='mb-3 mr-2 h-5 w-5'
                            disabled={true}
                        />
                        <label
                            htmlFor='condition'
                            className='bundle-text-smaller text-gray-400'
                        >
                            Check for transactions in wallet
                        </label>
                        <p className='text-gray-400'>
                            This option will allow you to check a wallet for
                            assets or simply send a transaction. You may use
                            your own wallet or base your actions on someone
                            elses
                        </p>
                    </div>
                </div>
            )}
            {/* Bridge Content */}
            {activeTab === 3 && (
                <div>
                    {/* Bridge assets to Gnosis Chain */}
                    <div
                        id='amount'
                        className='mt-4 bg-gray-200 rounded-lg w-full p-6'
                    >
                        <input
                            type='radio'
                            id='condition'
                            name='condition'
                            value='condition'
                            className='mb-3 mr-2 h-5 w-5'
                        />
                        <label
                            htmlFor='condition'
                            className='bundle-text-smaller'
                        >
                            Bridge assets to Gnosis Chain
                        </label>
                        <p>
                            This option will allow you to check a wallet for
                            assets or simply send a transaction. You may use
                            your own wallet or base your actions on someone
                            elses
                        </p>
                    </div>
                    {/* Bridge assets to Arbitrum */}
                    <div
                        id='nft'
                        className='mt-4 bg-gray-200 rounded-lg w-full p-6'
                    >
                        <input
                            type='radio'
                            id='condition'
                            name='condition'
                            value='condition'
                            className='mb-3 mr-2 h-5 w-5'
                        />
                        <label
                            htmlFor='condition'
                            className='bundle-text-smaller'
                        >
                            Bridge assets to Arbitrum
                        </label>
                        <p>
                            This option will allow you to check a wallet for
                            assets or simply send a transaction. You may use
                            your own wallet or base your actions on someone
                            elses
                        </p>
                    </div>
                    {/* Bridge assets to Polygon */}
                    <div
                        id='transactions'
                        className='mt-4 bg-gray-200 rounded-lg w-full p-6'
                    >
                        <input
                            type='radio'
                            id='condition'
                            name='condition'
                            value='condition'
                            className='mb-3 mr-2 h-5 w-5'
                            disabled={true}
                        />
                        <label
                            htmlFor='condition'
                            className='bundle-text-smaller text-gray-400'
                        >
                            Bridge assets to Polygon
                        </label>
                        <p className='text-gray-400'>
                            This option will allow you to check a wallet for
                            assets or simply send a transaction. You may use
                            your own wallet or base your actions on someone
                            elses
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ActionTabs;
