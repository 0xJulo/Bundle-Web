import React from 'react';

const UniswapSwap: React.FC = () => {
    return (
        <div className='mb-8 md:w-1/2'>
        {/* Form for creating the NFT */}
        <form>
        {/* Action */}
        <div className='mb-8'>
            <div>
            <div className='mb-8'>
                        <a 
                            href="https://etherscan.io/address/0x68b3465833fb72a70ecdf485e0e4c7bd8665fc45" 
                            target="_blank" rel="noopener noreferrer" 
                            className='text-blue-500 hover:text-blue-700 underline'>
                            View Uniswap v3 Router Contract (opens in new tab)
                        </a>
                    </div>


                {/* Predefined amount */}
                <div>
                    <div className='mb-2 mt-2 flex flex-wrap md:flex-nowrap items-end'>
                        <div className='w-1/2'>
                            <label htmlFor='nftName' className='bundle-text'>
                                Amount
                            </label>
                            <input
                                type='number'
                                name='nftName'
                                id='nftName'
                                className='mt-2 md:mt-2 block w-full h-12 p-2 rounded-md border-[#80BAA8] border-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                                placeholder='Enter amount'
                            />
                        </div>
                        <div className='w-1/2 mt-4 md:mt-0 md:ml-4'>
                            <label htmlFor='nftName' className='bundle-text'>
                                    Asset
                            </label>
                            <select
                                id='networkSelect'
                                name='networkSelect'
                                className='mt-2 md:mt-2 block w-full h-12 p-2 bg-white rounded-md border-[#80BAA8] border-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                            >
                                <option value=''>
                                    Please select an asset
                                </option>
                                <option value='ethereum'>Ethereum (ETH)</option>
                                <option value='arbitrum'>Arbitrum (ARB)</option>
                                <option value='polygon'>Polygon (MATIC)</option>
                                <option value='optimism'>Optimism (OP)</option>
                                <option value='bsc'>BSC (BNB)</option>
                                <option value='usdc'>USDCoin (USDC)</option>
                                <option value='usdt'>Tether (USDT)</option>
                            </select>
                        </div>
                    </div>
                   <div className='mt-4 md:mt-6'>
                           <label htmlFor='nftName' className='bundle-text'>
                                   Swap to
                           </label>
                           <select
                               id='networkSelect'
                               name='networkSelect'
                               className='mt-2 md:mt-2 block w-full h-12 p-2 bg-white rounded-md border-[#80BAA8] border-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                           >
                               <option value=''>
                                   Please select an asset
                               </option>
                               <option value='ethereum'>Ethereum (ETH)</option>
                               <option value='arbitrum'>Arbitrum (ARB)</option>
                               <option value='polygon'>Polygon (MATIC)</option>
                               <option value='optimism'>Optimism (OP)</option>
                               <option value='bsc'>BSC (BNB)</option>
                               <option value='usdc'>USDCoin (USDC)</option>
                               <option value='usdt'>Tether (USDT)</option>
                           </select>
                       </div>
                </div>
            </div>
            {/* gas cost */}
            <div className='mb-8 mt-6'>
                            <div>
                                <h3 className='mb-3 bundle-text'>Gas cost:</h3>
                                <div>
                                    <input
                                        type='radio'
                                        id='fast'
                                        name='gas'
                                        value='fast'
                                        className='mb-3'
                                    />
                                    <label htmlFor='fast'>High ($0.78)</label>
                                </div>
                                <div>
                                    <input
                                        type='radio'
                                        id='middle'
                                        name='gas'
                                        value='middle'
                                        className='mb-3'
                                    />
                                    <label htmlFor='middle'>
                                        Average ($0.58)
                                    </label>
                                </div>
                                <div>
                                    <input
                                        type='radio'
                                        id='low'
                                        name='gas'
                                    />
                                    <label htmlFor='low'>Low ($0.58)</label>
                                </div>
                            </div>
                        </div>

        </div>

        {/* Submit button */}
        <button
            type='submit'
            className='mt-4 mb-12 px-4 py-2 bg-[#80BAA8] text-white rounded-md hover:bg-[#4c7f6f]'
        >
            Complete swap
        </button>
    </form>
    </div>
    );
};

export default UniswapSwap;


