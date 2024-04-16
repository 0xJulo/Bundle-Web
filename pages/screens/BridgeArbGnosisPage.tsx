import React, { useState } from 'react';
import { useRouter } from 'next/router';
import ExampleBundles from '../utils/ExampleDataStore';
import { createNFT } from '../utils/CreateNFT';


// You'll remove this eventually and create a go back
interface CreateNFTScreenProps {
    handleCreateNFT: () => void;
}

const CreateUniswapSwapPage: React.FC<CreateNFTScreenProps> = ({ handleCreateNFT }) => {
    const [network, setNetwork] = useState<string>('');
    const [name, setName] = useState<string>('');
    const [prompt, setPrompt] = useState<string>('');
    const examplePrice = "0.78ETH";

    const router = useRouter();

    const goBack = () => {
        router.back();
    }

    // Function to get the bundle name for Creating an NFT
    // This will return the same heading and description etc.
    const createNFTBundle = ExampleBundles.find(
        (bundle) =>
            bundle.name ===
            'Bridge to Gnosis Pay from other network'
    );

    // Function for creating the NFT
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const nftData = {
            // const for gettig the data from the form
            network: (formData.get('networkSelect') as string) || '',
            name: (formData.get('nftName') as string) || '',
            description: (formData.get('nftDescription') as string) || '',
            image: (formData.get('nftImageUpload') as string) || '',
        };
        createNFT(nftData);
    };

    return (
        <section className='h-[100vh] mx-4 mt-24 md:mx-10 md:mt-24'>
            <button onClick={goBack}>close</button>
            {createNFTBundle && (
                <>
                    <div className='mb-6 mt-6'>
                        <h2 className='bundle-h2 mb-2'>
                            {createNFTBundle.name}
                        </h2>
                        <p>{createNFTBundle.description}</p>
                    </div>
                    <div className='mb-8'>
                        <a 
                            href="https://etherscan.io/address/0xe592427a0aece92de3edee1f18e0157c05861564" 
                            target="_blank" rel="noopener noreferrer" 
                            className='text-blue-500 hover:text-blue-700 underline'>
                            View Uniswap V3: Router Contract (opens in new tab)
                        </a>
                    </div>

                    <hr className='my-8'/>
                    
                    <div>
                        <h2 className='mb-4 bundle-text'>Trigger</h2>
                    </div>

                    {/* Form for creating the NFT */}
                    <form onSubmit={handleSubmit} className='md:w-1/2'>
                        {/* Network select */}
                        <div className='mb-8'>
                            <label
                                htmlFor='networkSelect'
                                className='bundle-text-smaller'
                            >
                                Select network
                            </label>
                            <p>Different chains have different paths for bridging.</p>
                            <p>Bundle will use the most optmised route for bridging which may involve multiple transactions involved an EOA wallet.</p>
                            <select
                                id='networkSelect'
                                name='networkSelect'
                                className='mt-2 md:mt-4 block w-full h-12 p-2 bg-white rounded-md border-[#80BAA8] border-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                                onChange={(e) => setNetwork(e.target.value)}
                            >
                                <option value=''>
                                    Please select a network
                                </option>
                                <option value='ethereum'>Ethereum</option>
                                <option value='arbitrum'>Arbitrum</option>
                                <option value='polygon'>Polygon</option>
                                <option value='optimism'>Optimism</option>
                                <option value='bsc'>BSC</option>
                            </select>
                        </div>

                        {/* When */}
                        

                        

                        

                        <hr className='my-8'/>

                        {/* Action */}
                        <div className='mb-8'>
                            <div>
                                <h3 className='mb-3 bundle-text'>Action</h3>
                                <p>You will be promted to provide the following asset to run the bundle</p>
                                <p>Asset may be limited depending on what can be bridged to Gnosis Chain</p>
                                <div>
                                    <div className='mb-2 mt-2 flex flex-wrap md:flex-nowrap items-end'>
                                    <div className='w-1/2'>
                                        <label htmlFor='nftName' className='bundle-text-smaller'>
                                            Amount
                                        </label>
                                        <input
                                            type='number'
                                            name='nftName'
                                            id='nftName'
                                            className='mt-2 md:mt-2 block w-full h-12 p-2 rounded-md border-[#80BAA8] border-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                                            placeholder='Enter amount'
                                            onChange={(e) => setName(e.target.value)}
                                        />
                                    </div>
                                    <div className='w-1/2 mt-4 md:mt-0 md:ml-4'>
                                        <label htmlFor='nftName' className='bundle-text-smaller'>
                                                Asset
                                        </label>
                                        <select
                                            id='networkSelect'
                                            name='networkSelect'
                                            className='mt-2 md:mt-2 block w-full h-12 p-2 bg-white rounded-md border-[#80BAA8] border-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                                            onChange={(e) => setNetwork(e.target.value)}
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
                                   <div className='mb-5 flex flex-wrap md:flex-nowrap items-end'>
                            <div className='w-full'>
                                <label htmlFor='nftName' className='bundle-text-smaller'>
                                    Enter Gnosis Safe Address
                                </label>
                                <input
                                    type='number'
                                    name='nftName'
                                    id='nftName'
                                    className='mt-2 md:mt-4 block w-full h-12 p-2 rounded-md border-[#80BAA8] border-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                                    placeholder='Enter amount'
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                        </div>

                                </div>
                            </div>
                        </div>

                        {/* Submit button */}
                        <button
                            type='submit'
                            className='mt-4 mb-12 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700'
                        >
                            Create Bundle
                        </button>
                    </form>
                </>
            )}
        </section>
    );
};

export default CreateUniswapSwapPage;
