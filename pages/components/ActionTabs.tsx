'use client';
import React, { useState } from 'react';
import ExampleBundles, { Bundle } from '../utils/ExampleDataStore';
import BundleDetail from './BundleDetail';

const ActionTabs: React.FC<{ onActionNameChange: (name: string) => void }> = ({
    onActionNameChange,
}) => {
    const [activeTab, setActiveTab] = useState(0);

    const tabs = [
        { label: 'Defi', content: 'This is the content of Tab 1' },
        { label: 'Transactions', content: 'This is the content of Tab 2' },
        { label: 'NFTs', content: 'This is the content of Tab 3' },
        { label: 'Bridge', content: 'This is the content of Tab 4' },
    ];

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onActionNameChange(e.target.value);
    };

    return (
        <div className='w-full mb-8 mt-6'>
            {tabs.map((tab, index) => (
                <button
                    key={index}
                    onClick={() => setActiveTab(index)}
                    className={`mb-2 px-4 py-2 ${
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
                            id='uniswapSwap'
                            name='uniswapSwap'
                            value='uniswapSwap'
                            className='mb-3 mr-2 h-5 w-5'
                            onChange={handleNameChange}
                        />
                        <label
                            htmlFor='uniswapSwap'
                            className='bundle-text-smaller'
                        >
                            Swap two assets on CoW Swap
                        </label>
                        <p>
                            This action will ask for the two tokens that you wish to swap, along with how much
                            of the original asset you would like to swap.
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
                            Enter another use case
                        </label>
                        <p className='text-gray-400'>
                            This action will ask for the recipient's wallet address and the amount of
                            tokens you would like to send.
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
                            Stake assets
                        </label>
                        <p className='text-gray-400'>
                            This action will allow you to choose a staking platform, and from
                            that choice which tokens you would like to stake.
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
                            This action will ask for the recipient's wallet address and the amount of
                            tokens you would like to send.
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
                            disabled={true}
                        />
                        <label
                            htmlFor='condition'
                            className='bundle-text-smaller text-gray-400'
                        >
                            Create Woop Pay fundraiser link
                        </label>
                        <p className='text-gray-400'>
                            This action will allow you to create a Woop Pay link, set a target
                            you would like to receive and provide you with a QR code to share 
                            with others.
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
                            Create single ERC-721 NFT
                        </label>
                        <p>
                            This action will walk you through the process of quickly
                            creating an NFT. You may upload an asset from your computer
                            to do this.
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
                            Sell NFT on OpenSea
                        </label>
                        <p className='text-gray-400'>
                            This action will allow you to list an items on OpenSea 
                            for sale. You may set the price you are hoping to get for it.
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
                            Send NFT to someone else
                        </label>
                        <p className='text-gray-400'>
                            This action will ask for a recipient's wallet address and the NFT you would like to send.
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
                            disabled={true}
                        />
                        <label
                            htmlFor='condition'
                            className='bundle-text-smaller text-gray-400'
                        >
                            Bridge assets to Gnosis Chain
                        </label>
                        <p className='text-gray-400'>
                            This action will ask for the desired amount and token
                            that you would like to bridge to Gnosis Chain.
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
                            disabled={true}
                        />
                        <label
                            htmlFor='condition'
                            className='bundle-text-smaller text-gray-400'
                        >
                            Bridge assets to Arbitrum
                        </label>
                        <p className='text-gray-400'>
                            This action will ask for the desired amount and token
                            that you would like to bridge to Arbitrum.
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
                            Open-ended bridge
                        </label>
                        <p className='text-gray-400'>
                            This action will ask you for the two networks you want to bridge 
                            between, as well as asset and amount. 
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ActionTabs;
