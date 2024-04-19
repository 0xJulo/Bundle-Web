import React from "react";

const UniswapCompare: React.FC<{
  onSelectedAssets: any;
  onTokenSelectChange: any;
  selectedSigns: any;
  onSignSelectChange: any;
  amount: any;
  onAmountChange: any;
  onSetCondition: any;
  isConditionSaved: any;
}> = (props) => {
  const {
    onSelectedAssets,
    onTokenSelectChange,
    selectedSigns,
    onSignSelectChange,
    amount,
    onAmountChange,
    onSetCondition,
    isConditionSaved,
  } = props;
  return (
    <div className="mt-4">
      {/* Form for creating the NFT */}
      <form>
        {/* When */}
        <div className="mb-5 flex flex-wrap md:flex-nowrap items-end">
          <div className="w-1/3">
            <label htmlFor="nftName" className="bundle-text-smaller">
              When
            </label>
            {/* <input
              type="number"
              name="nftName"
              id="nftName"
              className="mt-2 md:mt-4 block w-full h-12 p-2 rounded-md border-[#80BAA8] border-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              placeholder="Enter amount"
            /> */}
          </div>
          <div className="w-2/3 mt-4 md:mt-0 md:ml-4">
            <select
              id="networkSelect"
              name="networkSelect"
              className="mt-2 md:mt-4 block w-full h-12 p-2 bg-white rounded-md border-[#80BAA8] border-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              value={onSelectedAssets}
              onChange={onTokenSelectChange}
            >
              <option value="">Please select an asset</option>
              <option value="ethereum">Ethereum (ETH)</option>
              <option value="arbitrum">Arbitrum (ARB)</option>
              <option value="polygon">Polygon (MATIC)</option>
              <option value="optimism">Optimism (OP)</option>
              <option value="bsc">BSC (BNB)</option>
              <option value="usdc">USDCoin (USDC)</option>
              <option value="usdt">Tether (USDT)</option>
            </select>
          </div>
        </div>

        {/* Is */}
        <div className="mb-2 flex items-center">
          <label htmlFor="networkSelect" className="bundle-text-smaller mr-4">
            Is
          </label>
          <select
            id="networkSelect"
            name="networkSelect"
            className="mt-2 md:mt-0 flex-1 h-12 p-2 bg-white rounded-md border-[#80BAA8] border-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            value={selectedSigns}
            onChange={onSignSelectChange}
          >
            <option value="">Please select a condition</option>
            <option value="greater-than">Greater than</option>
            <option value="less-than">Less than</option>
            <option value="equal-to">Equal to</option>
          </select>
        </div>

        {/* Than*/}
        <div className="mb-8 flex flex-wrap md:flex-nowrap items-end">
          <div className="w-1/3">
            <input
              type="number"
              name="nftName"
              value={amount}
              onChange={onAmountChange}
              id="nftName"
              className="mt-2 md:mt-4 block w-full h-12 p-2 rounded-md border-[#80BAA8] border-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              placeholder="Enter amount"
            />
          </div>
          <div className="w-2/3 mt-4 md:mt-0 md:ml-4">
            <select
              id="networkSelect"
              name="networkSelect"
              className="mt-2 md:mt-4 block w-full h-12 p-2 bg-white rounded-md border-[#80BAA8] border-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            >
              <option value="">Please select an asset</option>
              {/* <option value="ethereum">Ethereum (ETH)</option>
              <option value="arbitrum">Arbitrum (ARB)</option>
              <option value="polygon">Polygon (MATIC)</option>
              <option value="optimism">Optimism (OP)</option>
              <option value="bsc">BSC (BNB)</option> */}
              <option value="usdc">USDCoin (USDC)</option>
              {/* <option value="usdt">Tether (USDT)</option> */}
            </select>
          </div>
        </div>

        {/* Submit button */}
        <button
          type="button"
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700"
          onClick={onSetCondition}
          disabled={isConditionSaved}
        >
          {isConditionSaved ? "Saved" : "Set Condition"}
        </button>
      </form>
    </div>
  );
};

export default UniswapCompare;
