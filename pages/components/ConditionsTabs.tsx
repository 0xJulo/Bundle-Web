"use client";
import { userAgent } from "next/server";
import React, { useState } from "react";
import UniswapCompare from "./Uniswap/UniswapCompare";

interface conditionObject {
  name: string | undefined;
  token: string | undefined;
  conditionSign: string | undefined;
  referencePoint: number | undefined;
}

const ConditionsTabs: React.FC<{
  onConditionNameChange: (object: conditionObject) => void;
}> = ({ onConditionNameChange }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [name, setName] = useState<string>();
  const [selectedAssets, setSelectedAssets] = useState<string>("ETH");
  const [selectedSigns, setSelectedSigns] = useState<string>(">");
  const [amount, setAmount] = useState<number>(0);
  const [uniswap, setUniswap] = useState<boolean>(false);

  const tabs = [
    { label: "Check data source (ChainLink)" },
    { label: "Check wallet" },
  ];

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleTokenSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOptions = e.target.value;
    setSelectedAssets(selectedOptions);
  };

  const handleSignSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedSigns = e.target.value;
    setSelectedSigns(selectedSigns);
  };

  const handleAmountChange = (event: any) => {
    const inputValue = event.target.value;
    setAmount(inputValue);
  };

  const handleUniswapCreate = () => {
    const condition: conditionObject = {
      name: "uniswapCompare",
      token: selectedAssets,
      conditionSign: selectedSigns,
      referencePoint: amount,
    };
    onConditionNameChange(condition);
  };

  return (
    <div className="w-full mb-8 mt-6">
      {tabs.map((tab, index) => (
        <button
          key={index}
          onClick={() => setActiveTab(index)}
          className={`mb-6 px-4 py-2 ${
            activeTab === index
              ? "border-b-2 border-[#80BAA8] text-[#80BAA8]"
              : "text-gray-500 hover:text-gray-700"
          }`}
        >
          {tab.label}
        </button>
      ))}
      {/* Data Source Content */}
      {activeTab === 0 && (
        <div>
          {/* Compare the price of two assets on Uniswap */}
          <div id="unswiap" className="mt-4 bg-gray-200 rounded-lg w-full p-6">
            <input
              type="radio"
              id="uniswapCompare"
              name="uniswapCompare"
              value="uniswapCompare"
              className="mb-3 mr-2 h-5 w-5"
              onChange={handleNameChange}
            />
            <label htmlFor="uniswapCompare" className="bundle-text-smaller">
              Compare the price of two assets on Uniswap
            </label>
            <p>
              This option will allow you to check a wallet for assets or simply
              send a transaction. You may use your own wallet or base your
              actions on someone elses
            </p>
            <select
              id="tokenSelect"
              value={selectedAssets}
              onChange={handleTokenSelectChange}
            >
              <option value="ETH">Ethereum (ETH)</option>
              <option value="BTC">Bitcoin (BTC)</option>
              <option value="SOL">Solana (SOL)</option>
            </select>
            <div>
              <select
                id="signSelect"
                value={selectedSigns}
                onChange={handleSignSelectChange}
              >
                <option value=">">{`>`}</option>
                <option value="<">{`<`}</option>
                <option value="=">{`=`}</option>
              </select>
            </div>

            <input
              type="number"
              id="referencePoint"
              name="referencePoint"
              value={amount}
              placeholder="100"
              onChange={handleAmountChange}
            ></input>
            <button type="button" onClick={handleUniswapCreate}>
              Run
            </button>
            <UniswapCompare />
          </div>
          {/* Check volume of NFT project on OpenSea */}
          <div id="opensea" className="mt-4 bg-gray-200 rounded-lg w-full p-6">
            <input
              type="radio"
              id="condition"
              name="condition"
              value="condition"
              className="mb-3 mr-2 h-5 w-5"
              disabled={true}
            />
            <label
              htmlFor="condition"
              className="bundle-text-smaller text-gray-400"
            >
              Check volume of NFT project on OpenSea
            </label>
            <p className="text-gray-400">
              This option will allow you to check a wallet for assets or simply
              send a transaction. You may use your own wallet or base your
              actions on someone elses
            </p>
          </div>
          {/* Check events from Smart Contract */}
          <div id="api" className="mt-4 bg-gray-200 rounded-lg w-full p-6">
            <input
              type="radio"
              id="condition"
              name="condition"
              value="condition"
              className="mb-3 mr-2 h-5 w-5"
              disabled={true}
            />
            <label
              htmlFor="condition"
              className="bundle-text-smaller text-gray-400"
            >
              Check events from Smart Contract
            </label>
            <p className="text-gray-400">
              This option will allow you to check a wallet for assets or simply
              send a transaction. You may use your own wallet or base your
              actions on someone elses
            </p>
          </div>
        </div>
      )}
      {/* Wallet Content */}
      {activeTab === 1 && (
        <div>
          {/* Check for amout of asset in a wallet */}
          <div id="amount" className="mt-4 bg-gray-200 rounded-lg w-full p-6">
            <input
              type="radio"
              id="condition"
              name="condition"
              value="condition"
              className="mb-3 mr-2 h-5 w-5"
            />
            <label htmlFor="condition" className="bundle-text-smaller">
              Check for amout of asset in a wallet
            </label>
            <p>
              This option will allow you to check a wallet for assets or simply
              send a transaction. You may use your own wallet or base your
              actions on someone elses
            </p>
          </div>
          {/* Check presence of NFT in wallet */}
          <div id="nft" className="mt-4 bg-gray-200 rounded-lg w-full p-6">
            <input
              type="radio"
              id="condition"
              name="condition"
              value="condition"
              className="mb-3 mr-2 h-5 w-5"
              disabled={true}
            />
            <label
              htmlFor="condition"
              className="bundle-text-smaller text-gray-400"
            >
              Check for presence of NFT in wallet
            </label>
            <p className="text-gray-400">
              This option will allow you to check a wallet for assets or simply
              send a transaction. You may use your own wallet or base your
              actions on someone elses
            </p>
          </div>
          {/* Check for transactions in wallet */}
          <div
            id="transactions"
            className="mt-4 bg-gray-200 rounded-lg w-full p-6"
          >
            <input
              type="radio"
              id="condition"
              name="condition"
              value="condition"
              className="mb-3 mr-2 h-5 w-5"
              disabled={true}
            />
            <label
              htmlFor="condition"
              className="bundle-text-smaller text-gray-400"
            >
              Check for transactions in wallet
            </label>
            <p className="text-gray-400">
              This option will allow you to check a wallet for assets or simply
              send a transaction. You may use your own wallet or base your
              actions on someone elses
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ConditionsTabs;
