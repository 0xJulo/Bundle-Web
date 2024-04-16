import React, { useState } from 'react';
import { useRouter } from 'next/router';
import ExampleBundles from '../utils/ExampleDataStore';
import { createNFT } from '../utils/CreateNFT';


// You'll remove this eventually and create a go back
interface CreateNFTScreenProps {
    handleCreateNFT: () => void;
}

const CreateNFTPage: React.FC<CreateNFTScreenProps> = ({ handleCreateNFT }) => {
    const [network, setNetwork] = useState<string>('');
    const [name, setName] = useState<string>('');
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
            'Create single NFT and deploy to chain of your choice'
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
                    <div className='mb-8 mt-6'>
                        <h2 className='bundle-h2 mb-2'>
                            {createNFTBundle.name}
                        </h2>
                        <p>{createNFTBundle.description}</p>
                    </div>
                    <div className='mb-8'>
                        <a 
                            href="https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC721/ERC721.sol" 
                            target="_blank" rel="noopener noreferrer" 
                            className='text-blue-500 hover:text-blue-700 underline'>
                            View OpenZeppelin ERC721 Contract (opens in new tab)
                        </a>
                    </div>

                    {/* Form for creating the NFT */}
                    <form onSubmit={handleSubmit} className='md:w-1/2'>
                        {/* Network select */}
                        <div className='mb-8'>
                            <label
                                htmlFor='networkSelect'
                                className='bundle-text'
                            >
                                Select network
                            </label>
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
                                <option value='gnosis'>Gnosis Chain</option>
                            </select>
                        </div>

                        {/* NFT name */}
                        <div className='mb-8'>
                            <label htmlFor='nftName' className='bundle-text'>
                                NFT name
                            </label>
                            <input
                                type='text'
                                name='nftName'
                                id='nftName'
                                className='mt-2 md:mt-4 block w-full h-12 p-2 rounded-md border-[#80BAA8] border-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                                placeholder='Enter your NFT name'
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>

                        {/* NFT description */}
                        <div className='mb-8'>
                            <label
                                htmlFor='nftDescription'
                                className='bundle-text'
                            >
                                Enter NFT description
                            </label>
                            <textarea
                                id='nftDescription'
                                name='nftDescription'
                                rows={4}
                                className='mt-2 md:mt-4 block w-full p-2 rounded-md border-[#80BAA8] border-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                                placeholder='Describe your NFT'
                            ></textarea>
                        </div>

                        {/* NFT image upload */}
                        <div className='mb-8'>
                            <label
                                htmlFor='nftImageUpload'
                                className='bundle-text'
                            >
                                Upload your image
                            </label>
                            <input
                                type='file'
                                name='nftImageUpload'
                                id='nftImageUpload'
                                className='mt-2 md:mt-4 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                                accept='image/*'
                            />
                        </div>

                        {/* gas cost */}
                        <div className='mb-8'>
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

                        {/* Submit button */}
                        <button
                            type='submit'
                            className='mt-4 mb-12 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700'
                        >
                            {network && name
                                ? `Mint ${name} to ${
                                      network.charAt(0).toUpperCase() +
                                      network.slice(1)
                                  } for ${examplePrice}`
                                : 'Mint'}
                        </button>
                    </form>
                </>
            )}
        </section>
    );
};

export default CreateNFTPage;
