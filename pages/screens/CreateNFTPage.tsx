import React from 'react';
import ExampleBundles from '../utils/ExampleDataStore';
import { createNFT } from '../utils/CreateNFT';

// You'll remove this eventually and create a go back
interface CreateNFTScreenProps {
    handleCreateNFT: () => void;
}

const CreateNFTPage: React.FC<CreateNFTScreenProps> = ({ handleCreateNFT }) => {
    
  // Function to get the bundle name for Creating an NFT
  // This will return the same heading and description etc.
  const createNFTBundle = ExampleBundles.find(
        (bundle) =>
            bundle.name === 'Create NFT and deploy to chain of your choice'
    );

    // Function for creating the NFT
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const formData = new FormData(event.currentTarget);
      const nftData = { // const for gettig the data from the form
        network: formData.get('networkSelect') as string || '',
        name: formData.get('nftName') as string || '',
        description: formData.get('nftDescription') as string || '',
        image: formData.get('nftImageUpload') as string || '',
      };
      createNFT(nftData);
    };

    return (
        <section className='h-[100vh] mx-4 mt-24 md:mx-10 md:mt-24'>
            <button onClick={handleCreateNFT}>close</button>
            {createNFTBundle && (
              <>
                <div>
                    <h2 className='bundle-h2'>{createNFTBundle.name}</h2>
                    <p>{createNFTBundle.description}</p>
                </div> 

                {/* Form for creating the NFT */}
                <form onSubmit={handleSubmit}>

                  {/* Network select */}
                  <div>
                      <label htmlFor="networkSelect" className="block text-sm font-medium text-gray-700">
                          Select network
                      </label>
                      <select
                          id="networkSelect"
                          name="networkSelect"
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      >
                          <option value="">Please select a network</option>
                          <option value="ethereum">Ethereum</option>
                          <option value="polygon">Polygon</option>
                          <option value="solana">Solana</option>
                      </select>
                    </div>

                    {/* NFT name */}
                    <div>
                      <label htmlFor="nftName" className="block text-sm font-medium text-gray-700">
                          NFT name
                      </label>
                      <input
                          type="text"
                          name="nftName"
                          id="nftName"
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          placeholder="Enter your NFT name"
                      />
                    </div>

                    {/* NFT description */}
                    <div>
                      <label htmlFor="nftDescription" className="block text-sm font-medium text-gray-700">
                          Enter NFT description
                      </label>
                      <textarea
                          id="nftDescription"
                          name="nftDescription"
                          rows={4}
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          placeholder="Describe your NFT"
                      ></textarea>
                    </div>

                    {/* NFT image upload */}
                    <div>
                      <label htmlFor="nftImageUpload" className="block text-sm font-medium text-gray-700">
                          Upload your image
                      </label>
                      <input
                          type="file"
                          name="nftImageUpload"
                          id="nftImageUpload"
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          accept="image/*"
                      />
                    </div>

                    {/* Submit button */}
                    <button type="submit" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700">
                    Submit
                  </button>
                  
                </form>
              </>
            )}
        </section>
    );
};

export default CreateNFTPage;
