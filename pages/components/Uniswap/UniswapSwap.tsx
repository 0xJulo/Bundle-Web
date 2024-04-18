import React from "react";
import {
  CowSwapWidget,
  CowSwapWidgetParams,
  TradeType,
} from "@cowprotocol/widget-react";

const params: CowSwapWidgetParams = {
  appCode: "Bundle", // Name of your app (max 50 characters)
  width: "100%", // Width in pixels (or 100% to use all available space)
  height: "640px",
  chainId: 11155111, // 1 (Mainnet), 100 (Gnosis), 11155111 (Sepolia)
  tokenLists: [
    // All default enabled token lists. Also see https://tokenlists.org
    "https://files.cow.fi/tokens/CoinGecko.json",
    "https://files.cow.fi/tokens/CowSwap.json",
  ],
  tradeType: TradeType.SWAP, // TradeType.SWAP, TradeType.LIMIT or TradeType.ADVANCED
  sell: {
    // Sell token. Optionally add amount for sell orders
    asset: "USDC",
    amount: "100000",
  },
  buy: {
    // Buy token. Optionally add amount for buy orders
    asset: "COW",
    amount: "0",
  },
  enabledTradeTypes: [
    // TradeType.SWAP, TradeType.LIMIT and/or TradeType.ADVANCED
    TradeType.SWAP,
  ],
  theme: "light", // light/dark or provide your own color palette
  standaloneMode: true,
  disableToastMessages: false,
  images: {},
  sounds: {},
  customTokens: [],
};

const UniswapSwap: React.FC = () => {
  const provider = window.ethereum;

  return (
    <div className="mb-8 md:w-1/2">
      {/* Form for creating the NFT */}
      <div className="mb-8">
        <a
          href="https://etherscan.io/address/0x68b3465833fb72a70ecdf485e0e4c7bd8665fc45"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-700 underline"
        >
          View Uniswap v3 Router Contract (opens in new tab)
        </a>
      </div>

      <CowSwapWidget params={params} provider={provider} />
    </div>
  );
};

export default UniswapSwap;
