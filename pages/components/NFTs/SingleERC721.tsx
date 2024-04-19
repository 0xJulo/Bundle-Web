import React from "react";
import { Bundle } from "../../utils/ExampleDataStore";
import abi from "../../utils/CreateNFT.abi.json";
import { useWriteContract, useAccount } from "wagmi";

interface SingleERC721Props {
  bundle: Bundle;
}

const SingleERC721: React.FC<SingleERC721Props> = ({ bundle }) => {
  const [name, setName] = React.useState<string>("");
  const [description, setDescription] = React.useState<string>("");
  const { address } = useAccount();
  const { data: hash, error, isPending, writeContract } = useWriteContract();

  const pinTokenURI = async (data: any): Promise<string> => {
    //setIpfsImageLoading(true);
    try {
      const response = await fetch("/api/pinToPinata", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();
      const tokenUrl = `https://sapphire-living-peafowl-558.mypinata.cloud/ipfs/${result.IpfsHash}`;

      console.log("Pinned data:", result.IpfsHash);
      console.log(tokenUrl);

      return tokenUrl; // Return the URL instead of setting state
    } catch (error) {
      console.error("Error pinning image to IPFS:", error);

      return Promise.reject(error);
    }
  };

  const mint = (tokenURI: string) => {
    console.log(tokenURI);
    writeContract({
      address: "0xb7403174d3325C3aD6B4576E10F85c2b63e68cF8",
      abi,
      functionName: "safeMint",
      args: [address, tokenURI],
    });
  };

  React.useEffect(() => {
    console.log(error);
  }, [error]);

  // Function for creating the NFT
  const handleSubmit = async () => {
    const nftData = {
      name: name,
      description: description,
      image: `https://sapphire-living-peafowl-558.mypinata.cloud/ipfs/QmPHwYuMndJGyroudH6AFH42PzgmWEsEYusw368a3c8gcJ`,
    };

    const tokenURI = await pinTokenURI(nftData);
    writeContract({
      address: "0x7c6F3e985497344cbA9BdFF98d23663f989d47a3",
      abi,
      functionName: "safeMint",
      args: [address, tokenURI],
    });
  };

  return (
    <section>
      <div className="mb-8">
        <a
          href="https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC721/ERC721.sol"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-700 underline"
        >
          View OpenZeppelin ERC721 Contract (opens in new tab)
        </a>
      </div>

      {/* Form for creating the NFT */}
      <div className="md:w-1/2">
        {/* NFT name */}
        <div className="mb-8">
          <label htmlFor="nftName" className="bundle-text">
            NFT name
          </label>
          <input
            type="text"
            name="nftName"
            id="nftName"
            className="mt-2 md:mt-4 block w-full h-12 p-2 rounded-md border-[#80BAA8] border-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="Enter your NFT name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        {/* NFT description */}
        <div className="mb-8">
          <label htmlFor="nftDescription" className="bundle-text">
            Enter NFT description
          </label>
          <textarea
            id="nftDescription"
            name="nftDescription"
            rows={4}
            className="mt-2 md:mt-4 block w-full p-2 rounded-md border-[#80BAA8] border-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="Describe your NFT"
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>

        {/* gas cost */}
        <div className="mb-8">
          <div>
            <h3 className="mb-3 bundle-text">Gas cost:</h3>
            <div>
              <input
                type="radio"
                id="fast"
                name="gas"
                value="fast"
                className="mb-3"
              />
              <label htmlFor="fast">High ($0.78)</label>
            </div>
            <div>
              <input
                type="radio"
                id="middle"
                name="gas"
                value="middle"
                className="mb-3"
              />
              <label htmlFor="middle">Average ($0.58)</label>
            </div>
            <div>
              <input type="radio" id="low" name="gas" />
              <label htmlFor="low">Low ($0.58)</label>
            </div>
          </div>
        </div>

        {/* Submit button */}
        <button
          type="button"
          onClick={() => {
            handleSubmit();
          }}
          className="mt-4 px-4 py-2 bg-[#80BAA8] text-white rounded-md hover:bg-[#4c7f6f]"
        >
          {isPending ? "Confirming..." : "Mint"}
        </button>
        {hash && <div>Transaction Hash: {hash}</div>}
      </div>
    </section>
  );
};

export default SingleERC721;
