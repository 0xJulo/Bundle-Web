import React from "react";
import { useRouter } from "next/router";
import { useBundles } from "../utils/ExampleDataStore";

import UniswapCompare from "../components/Uniswap/UniswapCompare";
import UniswapSwap from "../components/Uniswap/UniswapSwap";
import SingleERC721 from "../components/NFTs/SingleERC721";
import UniswapComparisonStatus from "../components/Uniswap/UniswapComparisonStatus";

import { sendAattestation } from "../utils/attestations";

import { useReadContract, useAccount } from "wagmi";
import abi from "../utils/aggregatorV3InterfaceABI.abi.json";
import bundleAbi from "../utils/Bundle.abi.json";

import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import { ForkRight, Share } from "@mui/icons-material";

// Bundle data shape

interface conditionObject {
  name: string | undefined;
  token: string | undefined;
  conditionSign: string | undefined;
  referencePoint: number | undefined;
}

type RoundData = [number, number, number, number, number];

export interface Bundle {
  id: number;
  name: string;
  type: string;
  createdBy: string;
  description: string;
  tags?: string[];
  conditions: conditionObject;
  actions: Array<{
    id: number;
    title: string;
    type: string;
    source: string;
  }>;
  route?: string;
}

const RunBundlePage: React.FC = () => {
  const router = useRouter();
  const { address } = useAccount();
  const [account, setAccount] = React.useState<`0x${string}`>("0x");
  const [isAttestationInProgress, setIsAttestationInProgress] =
    React.useState<boolean>(false);
  const [attestationReceipt, setAttestationReceipt] = React.useState<any>();
  const { bundleId } = router.query;
  const formattedBundleId = Number(bundleId);
  const { bundles } = useBundles();
  const [bundle, setBundle] = React.useState<any>(null);
  const [like, setLike] = React.useState<boolean>(false);
  const [dislike, setDislike] = React.useState<boolean>(false);
  const goBack = () => router.back();

  // const handleLike = () => {
  //   if (like) {
  //     setLike(!like);
  //     setDislike(false);
  //   }
  // };

  // const handleDislike = () => {
  //   if (dislike) {
  //     setDislike(!dislike);
  //     setLike(true); // Assuming you want to toggle like when dislike is toggled off, otherwise adjust logic as needed
  //   }
  // };

  function formatNumber(bigNumber: any) {
    // Ensure the divisor is also a BigInt
    console.log(bigNumber);
    bigNumber = BigInt(bigNumber);
    const divisor = BigInt(100000000); // Same scale factor, but as BigInt

    // Use BigInt division, then convert the result to a Number for formatting
    const scaledNumber = Number(bigNumber / divisor);

    // Format number with two decimal places
    return scaledNumber
      .toLocaleString("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })
      .replace(",", "."); // Adjust locale formatting as needed
  }

  const { data, error } = useReadContract({
    abi,
    functionName: "latestAnswer",
    // ETH/USD
    address: "0x694AA1769357215DE4FAC081bf1f309aDC325306",
  });

  React.useEffect(() => {
    if (error) {
      console.error("Error fetching contract data:", error);
    }
  }, [error]);

  const { data: ipfsUrl } = useReadContract({
    abi: bundleAbi,
    functionName: "tokenURI",
    address: "0xb7403174d3325C3aD6B4576E10F85c2b63e68cF8",
    args: [formattedBundleId],
  });

  React.useEffect(() => {
    if (Number(bundleId) > 5) {
      callIpfs();
    } else {
      const foundBundle = bundles.find((bundle) => bundle.id === bundleId);
      setBundle(foundBundle ?? null);
    }
  }, [ipfsUrl]);

  React.useEffect(() => {
    if (address) {
      setAccount(address);
    }
  }, [address]);

  const callIpfs = async () => {
    if (!ipfsUrl) {
      console.error("IPFS URL is undefined or not valid:", ipfsUrl);
      return;
    }
    try {
      const response = await fetch(`${ipfsUrl}`);
      const json = await response.json();
      console.log(json);
      setBundle(json);
      // console.log(json);
    } catch (error) {
      console.error(error);
    }
  };

  if (!bundle) {
    return (
      <>
        {" "}
        <div>Loading Bundle</div>
        {/* <div>Check Price ETH</div>
        {data ? <div>{formatNumber(data)} USDC</div> : <div>"Loading..."</div>} */}
        {/* <button>Execute swap with USDC</button> */}
      </>
    );
  }
  return (
    <section className="h-[100vh] mx-4 mt-24 md:mx-10 md:mt-24">
      <button onClick={goBack}>close</button>
      <div className="mb-4 md:mb-8 mt-3 md:mt-6">
        <h2 className="bundle-h2 mb-2">{bundle.name}</h2>
        <p className="text-sm">Created by: {bundle.createdBy}</p>
        <p>{bundle.description}</p>
      </div>

      <div id="attestation" className="flex justify-between">
        <div className="flex space-x-4">
          <div className="flex items-center">
            {like ? (
              <>
                <button
                  className="rounded-full bg-[#80BAA8] border-[1px] border-[#80BAA8] p-2 w-11 h-11 mr-2"
                  type="button"
                  onClick={async () => {
                    try {
                      setIsAttestationInProgress(true);
                      const tx = await sendAattestation(
                        bundleId as string,
                        account,
                        true
                      );
                      setIsAttestationInProgress(false);
                      setAttestationReceipt(tx);
                    } catch (error) {
                      setIsAttestationInProgress(false);
                    }
                  }}
                >
                  <ThumbUpAltIcon className="text-white" />
                </button>
              </>
            ) : (
              <button
                className="rounded-full bg-white border-[1px] border-[#80BAA8] p-2 w-11 h-11 mr-2"
                type="button"
                onClick={async () => {
                  try {
                    setIsAttestationInProgress(true);
                    const tx = await sendAattestation(
                      bundleId as string,
                      account,
                      true
                    );
                    setIsAttestationInProgress(false);
                    setAttestationReceipt(tx);
                  } catch (error) {
                    setIsAttestationInProgress(false);
                  }
                }}
              >
                <ThumbUpAltIcon className="text-[#80BAA8]" />
              </button>
            )}
            <p className="text-[#80BAA8] font-bold">204</p>
          </div>

          <div className="flex items-center">
            {dislike ? (
              <button
                className="rounded-full bg-[#80BAA8] border-[1px] border-[#80BAA8] p-2 w-11 h-11 mr-2"
                type="button"
                onClick={async () => {
                  try {
                    setIsAttestationInProgress(true);
                    const tx = await sendAattestation(
                      bundleId as string,
                      account,
                      false
                    );
                    setIsAttestationInProgress(false);
                    setAttestationReceipt(tx);
                  } catch (error) {
                    setIsAttestationInProgress(false);
                  }
                }}
              >
                <ThumbDownAltIcon className="text-white" />
              </button>
            ) : (
              <button
                className="rounded-full bg-white border-[1px] border-[#80BAA8] p-2 w-11 h-11 mr-2"
                type="button"
                onClick={async () => {
                  try {
                    setIsAttestationInProgress(true);
                    const tx = await sendAattestation(
                      bundleId as string,
                      account,
                      false
                    );
                    setIsAttestationInProgress(false);
                    setAttestationReceipt(tx);
                  } catch (error) {
                    setIsAttestationInProgress(false);
                  }
                }}
              >
                <ThumbDownAltIcon className="text-[#80BAA8]" />
              </button>
            )}
            <p className="text-[#80BAA8] font-bold">3</p>
          </div>
        </div>
        <div className="text-right">
          <p>
            <a
              href=""
              target="_blank"
              className="text-gray-400"
              aria-disabled="true"
            >
              Fork this bundle
            </a>
          </p>
          <p>
            <a href="#" target="_blank" className="text-blue-500">
              Share this bundle
            </a>
          </p>
        </div>
      </div>
      <div>
        {" "}
        {isAttestationInProgress ? "Sending..." : <></>}
        {attestationReceipt ? (
          <div>
            <a
              href={`https://sepolia.etherscan.io/tx/${attestationReceipt.txHash}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700"
            >
              Attestation sent! Check tx hash
            </a>
          </div>
        ) : (
          <></>
        )}
      </div>

      {bundle.conditions?.title === "uniswapSwap" ? (
        <div className="mt-12">
          <div>Check Price ETH</div>
          {data ? (
            <div>{formatNumber(data)} USDC</div>
          ) : (
            <div>"Loading..."</div>
          )}
          {formatNumber(data) > bundle.conditions?.referencePoint ? (
            <>
              <UniswapComparisonStatus status="completed" bundle={bundle} />

              <hr className="mt-4 mb-6 md:my-8 w-1/2" />
              <UniswapSwap />
            </>
          ) : (
            <UniswapComparisonStatus status="pending" bundle={bundle} />
          )}
        </div>
      ) : (
        <></>
      )}
      {bundle.actions.title === "createNFT" ? (
        <div className="mt-12">
          <p className="italic">If bundle is create NFT</p>
          <SingleERC721 bundle={bundle} />
        </div>
      ) : (
        <></>
      )}
    </section>
  );
};

export default RunBundlePage;
