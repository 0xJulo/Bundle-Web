import React, { createContext, useContext, useState, ReactNode } from 'react';

// Example data for bundles
const ExampleBundles: Bundle[] = [
    {
        id: 1,
        name: 'Swap asset on Uniswap when price is reached',
        type: 'My Bundles',
        createdBy: 'Bundle',
        description: 'Set a condition for a price to be reached and swap assets from your wallet',
        tags: ['NFT', 'Art', 'Music'],
        conditions: [
            {
                id: 1,
                title: 'Check for...',
                status: false,
                source: 'chainlink',
            },
            {
                id: 2,
                title: 'If',
                status: false,
                source: 'chainlink',
            },
        ],
        actions: [
            {
                id: 1,
                title: 'Send a...',
                type: 'transaction',
                source: 'external',
            },
        ],
        route: '/screens/CreateUniswapSwapPage',
    },
    {
        id: 2,
        name: 'Bridge to Gnosis Pay from other network',
        type: 'Saved',
        createdBy: 'Bundle',
        description: 'Take assets from another chain and bridge to Gnosis to get funds on Gnosis Pay account',
        tags: ['NFT', 'Art', 'Music'],
        conditions: [
            {
                id: 1,
                title: 'Check for...',
                status: false,
                source: 'chainlink',
            },
        ],
        actions: [
            {
                id: 1,
                title: 'Send a...',
                type: 'transaction',
                source: 'external',
            },
        ],
        route: '/screens/BridgeArbGnosisPage',
    },
    {
        id: 3,
        name: 'Create Woop Fundraiser',
        type: 'Saved',
        createdBy: 'Bundle',
        description: 'Use Woop pay to create a fundraier',
        tags: ['NFT', 'Art', 'Music'],
        conditions: [
            {
                id: 1,
                title: 'Check for...',
                status: false,
                source: 'chainlink',
            },
        ],
        actions: [
            {
                id: 1,
                title: 'Send a...',
                type: 'transaction',
                source: 'external',
            },
        ],
    },
    {
        id: 4,
        name: 'Arbitrum Airdrop',
        type: 'Popular',
        createdBy: 'Bundle',
        description: "Check if you're eligible for Arbitrum airdrop",
        tags: ['NFT', 'Art', 'Music'],
        conditions: [
            {
                id: 1,
                title: 'Check for...',
                status: false,
                source: 'chainlink',
            },
        ],
        actions: [
            {
                id: 1,
                title: 'Send a...',
                type: 'transaction',
                source: 'external',
            },
        ],
    },
    {
        id: 5,
        name: 'Create single NFT and deploy to chain of your choice',
        type: 'Pre-defined',
        createdBy: 'Bundle',
        description:
            'Mint a singular NFT asset (ERC-721) to the network of your choice, initially setting ownership to your own wallet.',
        tags: ['NFT', 'Art', 'Music'],
        conditions: [
            {
                id: 1,
                title: 'Check for...',
                status: false,
                source: 'chainlink',
            },
        ],
        actions: [
            {
                id: 1,
                title: 'Send a...',
                type: 'transaction',
                source: 'external',
            },
        ],
        route: '/screens/CreateNFTPage',
    },
];

export const BundlesContext = createContext<Bundle[]>(ExampleBundles);
export const useBundles = () => useContext(BundlesContext);

// Create NFT interface - do you need this?
export interface CreateNFT {
    network: string;
    name: string;
    description: string;
    image: string;
}

// Bundle data shape
export interface Bundle {
    id: number;
    name: string;
    type: string;
    createdBy: string;
    description: string;
    tags?: string[];
    conditions: Array<{
        id: number;
        title: string;
        status: boolean;
        source: string;
    }>;
    actions: Array<{
        id: number;
        title: string;
        type: string;
        source: string;
    }>;
    route?: string;
}



export default ExampleBundles;
