import React from "react";
import Image from "next/image";

const NFTMinted: React.FC = () => {
  return (
    <div>
      <h3 className="bundle-text mb-8">Your NFT has been minted!</h3>
      <div className="mb-4">
        <Image
          src="/Bundle-ETHGlobal.png"
          alt="Your NFT"
          width={500}
          height={500}
        />
      </div>

      <div className="mb-8">
        <a
          href="https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC721/ERC721.sol"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-700 underline"
        >
          View transaction (opens in new tab)
        </a>
      </div>
    </div>
  );
};

export default NFTMinted;
