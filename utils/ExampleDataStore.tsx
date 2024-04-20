import React, { createContext, useContext, useState, ReactNode } from "react";

// Example data for bundles
const ExampleBundles: Bundle[] = [
  {
    id: "1",
    name: "(Example) Swap asset on Uniswap when price is reached",
    type: "My Bundles",
    createdBy: "Bundle (Example Bundle)",
    description:
      "Set a condition for a price to be reached and swap assets from your wallet",
    tags: ["defi", "swap"],
    conditions: {
      title: "uniswapSwap",
      token: "ETH",
      conditionSign: ">",
      referencePoint: 3150,
    },
    actions: {
      id: 1,
      title: "Send a...",
      type: "transaction",
      source: "external",
    },
    route: "/screens/CreateUniswapSwapPage",
  },
  {
    id: "2",
    name: "(Example) Bridge to Gnosis Pay from other network",
    type: "Saved",
    createdBy: "Bundle",
    description:
      "Take assets from another chain and bridge to Gnosis to get funds on Gnosis Pay account",
    tags: ["defi", "bridge"],
    conditions: {
      title: "",
      token: "",
      conditionSign: "",
      referencePoint: 0,
    },
    actions: {
      id: 1,
      title: "Send a...",
      type: "transaction",
      source: "external",
    },
    route: "/screens/BridgeArbGnosisPage",
  },
  {
    id: "3",
    name: "(Example) Create Woop Fundraiser",
    type: "Saved",
    createdBy: "Bundle",
    description: "Use Woop pay to create a fundraier",
    tags: ["defi", "fundraiser"],
    conditions: {
      title: "",
      token: "",
      conditionSign: "",
      referencePoint: 0,
    },
    actions: {
      id: 1,
      title: "Send a...",
      type: "transaction",
      source: "external",
    },
  },
  // {
  //   id: "4",
  //   name: "(Example) Arbitrum Airdrop",
  //   type: "Popular",
  //   createdBy: "Bundle",
  //   description: "Check if you're eligible for Arbitrum airdrop",
  //   tags: ["arbitrum", "airdrop"],
  //   conditions: {
  //     title: "",
  //     token: "",
  //     conditionSign: "",
  //     referencePoint: 0,
  //   },
  //   actions: {
  //     id: 1,
  //     title: "Send a...",
  //     type: "transaction",
  //     source: "external",
  //   },
  // },
  // {
  //   id: "5",
  //   name: "(Example) Create single NFT and deploy to chain of your choice",
  //   type: "Pre-defined",
  //   createdBy: "Bundle",
  //   description:
  //     "Mint a singular NFT asset (ERC-721) to the network of your choice, initially setting ownership to your own wallet.",
  //   tags: ["nft", "art", "music"],
  //   conditions: {
  //     title: "",
  //     token: "",
  //     conditionSign: "",
  //     referencePoint: 0,
  //   },
  //   actions: {
  //     id: 1,
  //     title: "createNFT",
  //     type: "transaction",
  //     source: "external",
  //   },

  //   route: "/screens/CreateNFTPage",
  // },
];

interface conditionObject {
  title: string | undefined;
  token: string | undefined;
  conditionSign: string | undefined;
  referencePoint: number | undefined;
}

// Bundle data shape
export interface Bundle {
  id: string;
  name: string;
  type: string;
  createdBy: any;
  description: string;
  tags?: string[];
  conditions: conditionObject | undefined;
  actions: {
    id: number;
    title: string;
    type: string;
    source: string;
  };
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
