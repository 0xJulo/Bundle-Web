import React, { createContext, useContext, useState, ReactNode } from "react";

// Example data for bundles
const ExampleBundles: Bundle[] = [
  {
    id: 1,
    name: "Swap asset on Uniswap when price is reached",
    type: "My Bundles",
    createdBy: "Bundle",
    description:
      "Set a condition for a price to be reached and swap assets from your wallet",
    tags: ["defi", "swap"],
    conditions: [
      {
        id: 1,
        title: "uniswapCompare",
        status: false,
      },
      {
        id: 2,
        title: "If",
        status: false,
      },
    ],
    actions: [
      {
        id: 1,
        title: "uniswapSwap",
        type: "transaction",
        source: "external",
      },
    ],
    route: "/screens/CreateUniswapSwapPage",
  },
  {
    id: 2,
    name: "Bridge to Gnosis Pay from other network",
    type: "Saved",
    createdBy: "Bundle",
    description:
      "Take assets from another chain and bridge to Gnosis to get funds on Gnosis Pay account",
    tags: ["defi", "bridge"],
    conditions: [
      {
        id: 1,
        title: "Check for...",
        status: false,
      },
    ],
    actions: [
      {
        id: 1,
        title: "Send a...",
        type: "transaction",
        source: "external",
      },
    ],
    route: "/screens/BridgeArbGnosisPage",
  },
  {
    id: 3,
    name: "Create Woop Fundraiser",
    type: "Saved",
    createdBy: "Bundle",
    description: "Use Woop pay to create a fundraier",
    tags: ["defi", "fundraiser"],
    conditions: [
      {
        id: 1,
        title: "Check for...",
        status: false,
      },
    ],
    actions: [
      {
        id: 1,
        title: "Send a...",
        type: "transaction",
        source: "external",
      },
    ],
  },
  {
    id: 4,
    name: "Arbitrum Airdrop",
    type: "Popular",
    createdBy: "Bundle",
    description: "Check if you're eligible for Arbitrum airdrop",
    tags: ["arbitrum", "airdrop"],
    conditions: [
      {
        id: 1,
        title: "Check for...",
        status: false,
      },
    ],
    actions: [
      {
        id: 1,
        title: "Send a...",
        type: "transaction",
        source: "external",
      },
    ],
  },
  {
    id: 5,
    name: "Create single NFT and deploy to chain of your choice",
    type: "Pre-defined",
    createdBy: "Bundle",
    description:
      "Mint a singular NFT asset (ERC-721) to the network of your choice, initially setting ownership to your own wallet.",
    tags: ["nft", "art", "music"],
    conditions: [
      {
        id: 1,
        title: "Check for...",
        status: false,
      },
    ],
    actions: [
      {
        id: 1,
        title: "Send a...",
        type: "transaction",
        source: "external",
      },
    ],
    route: "/screens/CreateNFTPage",
  },
];

interface conditionObject {
  name: string | undefined;
  token: string | undefined;
  conditionSign: string | undefined;
  referencePoint: number | undefined;
}

// Bundle data shape
export interface Bundle {
  id: number;
  name: string;
  type: string;
  createdBy: string;
  description: string;
  tags?: string[];
  conditions: conditionObject | undefined;
  actions: Array<{
    id: number;
    title: string;
    type: string;
    source: string;
  }>;
  route?: string;
}

// Create NFT interface - do you need this?
export interface CreateNFT {
  network: string;
  name: string;
  description: string;
  image: string;
}

export const BundlesContext = createContext<{
  bundles: Bundle[];
  addBundle?: (bundle: Bundle) => void;
}>({ bundles: ExampleBundles });

export const useBundles = () => useContext(BundlesContext);

export const BundlesProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [bundles, setBundles] = React.useState<Bundle[]>(ExampleBundles);

  const addBundle = (bundle: Bundle) => {
    setBundles((prevBundles) => [...prevBundles, bundle]);
  };

  const value = React.useMemo(() => ({ bundles, addBundle }), [bundles]);

  return (
    <BundlesContext.Provider value={value}>{children}</BundlesContext.Provider>
  );
};

// export const BundlesContext = createContext<Bundle[]>(ExampleBundles);
// export const useBundles = () => useContext(BundlesContext);

// export const BundlesProvider:React.FC<{children: React.ReactNode}> = ({children}) => {
//     return (
//         <BundlesContext.Provider value={ExampleBundles}>
//             {children}
//         </BundlesContext.Provider>
//     );
// }

export default ExampleBundles;
