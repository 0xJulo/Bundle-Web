import React, { createContext, useContext, useState, ReactNode } from 'react';

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
    created: string;
    owner: string;
    description: string;
    tags?: string[];
    trigger: {
        title: string;
        type: string;
        input: string;
    };
    conditions: Array<{
        id: number;
        title: string;
        type: string;
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

// Example data for bundles
const ExampleBundles: Bundle[] = [
    {
        id: 1,
        name: 'Swap ETH to USDC',
        type: 'My Bundles',
        created: 'Bundle',
        owner: 'Julo.eth',
        description: 'Take shit and swap from ETH to USDC on Uniswap',
        tags: ['NFT', 'Art', 'Music'],
        trigger: {
            title: 'Start by...',
            type: 'internal',
            input: 'wallet',
        },
        conditions: [
            {
                id: 1,
                title: 'Check for...',
                type: 'data',
                source: 'chainlink',
            },
            {
                id: 2,
                title: 'If',
                type: 'price of ETH is greater than',
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
        id: 2,
        name: 'Bridge to Gnosis Pay',
        type: 'Saved',
        created: 'Bundle',
        owner: 'Julo.eth',
        description: 'Take assets and bridge to Gnosis',
        tags: ['NFT', 'Art', 'Music'],
        trigger: {
            title: 'Start by...',
            type: 'internal',
            input: 'wallet',
        },
        conditions: [
            {
                id: 1,
                title: 'Check for...',
                type: 'data',
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
        id: 3,
        name: 'Create Woop Fundraiser',
        type: 'Saved',
        created: 'Bundle',
        owner: 'Julo.eth',
        description: 'Use Woop pay to create a fundraier',
        tags: ['NFT', 'Art', 'Music'],
        trigger: {
            title: 'Start by...',
            type: 'internal',
            input: 'wallet',
        },
        conditions: [
            {
                id: 1,
                title: 'Check for...',
                type: 'data',
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
        created: 'Bundle',
        owner: 'Julo.eth',
        description: "Check if you're eligible for Arbitrum airdrop",
        tags: ['NFT', 'Art', 'Music'],
        trigger: {
            title: 'Start by...',
            type: 'internal',
            input: 'wallet',
        },
        conditions: [
            {
                id: 1,
                title: 'Check for...',
                type: 'data',
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
        created: 'Bundle',
        owner: 'Julo.eth',
        description:
            'Mint a singular NFT asset (ERC-721) to the network of your choice, initially setting ownership to your own wallet.',
        tags: ['NFT', 'Art', 'Music'],
        trigger: {
            title: 'Start by...',
            type: 'internal',
            input: 'wallet',
        },
        conditions: [
            {
                id: 1,
                title: 'Check for...',
                type: 'data',
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

export default ExampleBundles;
