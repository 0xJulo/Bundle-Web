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
  const [isCondition, setIsCondition] = useState<boolean>(false);
  const [isUniswapCompareSelected, setIsUniswapCompareSelected] = useState<boolean>(false);

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

  const handleCombinedChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const currentlySelected = isUniswapCompareSelected;
    if (currentlySelected) {
      setIsUniswapCompareSelected(false);
    }
    handleAmountChange(event);
    setIsCondition(!isCondition);
    setIsUniswapCompareSelected(true);
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
              onChange={handleCombinedChange}
              onClick={() => setIsUniswapCompareSelected(!isUniswapCompareSelected)}
              checked={isUniswapCompareSelected}
            />
            <label htmlFor="uniswapCompare" className="bundle-text-smaller">
              Compare the price of two tokens
            </label>
            <p className="mb-4">
              This condition will allow you to compare the prices of two assets
              using Chainlink.
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
            {isUniswapCompareSelected && <UniswapCompare />}
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
              This condition will allow to check the amount of daily, weekly, or 
              monthly volume of a project on OpenSea.
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
              This condition will allow you to monitor events from the 
              smart contract of your choice.
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
              This condition will allow you to check if an asset is present in your 
              wallet, and if so, how much of that asset you have.
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
              This condition will check your wallet to see if you hold a particular NFT
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
              This condition can analyse the transactions in your wallet against
              a specific smart contract to see how many of these transactions
              you have made.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ConditionsTabs;
