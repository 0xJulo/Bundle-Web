import React from "react";
import { useRouter } from "next/router";
import {
  useWriteContract,
  useWaitForTransactionReceipt,
  type BaseError,
} from "wagmi";
import abi from "../utils/Bundle.abi.json";

interface CreateBundleScreenProps {
  handleCreateNewBundle: () => void;
}

const CreateBundleScreen: React.FC<CreateBundleScreenProps> = ({
  handleCreateNewBundle,
}) => {
  const router = useRouter();

  const { data: hash, error, isPending, writeContract } = useWriteContract();

  const { isLoading: isConfirming, isSuccess: isConfirmed } =
    useWaitForTransactionReceipt({
      hash,
    });

  const createBundle = () => {
    writeContract({
      address: "0xb7403174d3325C3aD6B4576E10F85c2b63e68cF8",
      abi,
      functionName: "safeMint",
      args: ["this is a testing"],
    });
  };

  const goBack = () => {
    router.back();
  };
  return (
    <section className="h-[100vh] mx-4 mt-24 md:mx-10 md:mt-24">
      <button onClick={goBack}>close</button>
      <div className="mb-8 mt-6">
        <h2 className="bundle-h2 mb-2">Create a new bundle</h2>
      </div>
      <hr className="my-8" />

      {/* gas cost */}
      <div className="mb-8 md:w-1/2">
        {/* trigger */}
        <div>
          <h3 className="mb-3 bundle-text">Trigger</h3>
          <p>A trigger is how you will start your bundle</p>
          <div className="mt-4">
            <input
              type="radio"
              id="fast"
              name="gas"
              value="fast"
              className="mb-3 mr-2"
            />
            <label htmlFor="fast" className="text-lg">
              I want to use a wallet to start my bundle
            </label>
            <p>
              This option will allow you to check a wallet for assets or simply
              send a transaction. You may use your own wallet or base your
              actions on someone elses
            </p>
          </div>
          <div className="mt-4">
            <input
              type="radio"
              id="middle"
              name="gas"
              value="middle"
              className="mb-3 mr-2"
            />
            <label htmlFor="middle" className="text-lg">
              I want to check some data to start my bundle
            </label>
            <p>
              You may check price data or any other data to start your bundle
            </p>
          </div>
        </div>
        <hr className="my-8" />
        {/* Condition */}
        <div>
          <h3 className="mb-3 bundle-text">Condition</h3>
          <p>
            A condition is optional and may be used to check things like price,
            volume, or transactions.
          </p>
          <p>
            You may use "and / or" type behaviour in your conditions, but all
            conditions must pass in order for action to be taken.
          </p>
          <p className="font-bold">
            Dev Notes - this could be conditional depending on choices
            previously
          </p>
          <div className="mt-4">
            <input
              type="radio"
              id="fast"
              name="gas"
              value="fast"
              className="mb-3 mr-2"
            />
            <label htmlFor="fast" className="text-lg">
              I want to check a wallet for conditions
            </label>
            <p>
              This option can be used to check a inputted wallet for conditions
              such as the amount of assets held, transactions made, or the
              presence of an NFT
            </p>
          </div>
          <div className="mt-4">
            <input
              type="radio"
              id="middle"
              name="gas"
              value="middle"
              className="mb-3 mr-2"
            />
            <label htmlFor="middle" className="text-lg">
              I want to check the price of an asset, such as a token or NFT
            </label>
            <p>
              You may check the price of one asset against another, or the total
              volume of an NFT project for example
            </p>
          </div>
          <div>
            <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Add another condition
            </button>
          </div>
        </div>
        <hr className="my-8" />
        {/* Action */}
        <div>
          <h3 className="mb-3 bundle-text">Action</h3>
          <p>
            An action will be taken based off your trigger and any conditions
            you have set out. All conditions, if applicable, must be met for the
            action to be taken.
          </p>
          <p className="font-bold">
            Dev Notes - this could be conditional depending on choices
            previously
          </p>
          <div className="mt-4">
            <input
              type="radio"
              id="fast"
              name="gas"
              value="fast"
              className="mb-3 mr-2"
            />
            <label htmlFor="fast" className="text-lg">
              I want to send a transaction
            </label>
            <p>
              Send a transaction to another wallet, such as friend or co-worker
            </p>
          </div>
          <div className="mt-4">
            <input
              type="radio"
              id="middle"
              name="gas"
              value="middle"
              className="mb-3 mr-2"
            />
            <label htmlFor="middle" className="text-lg">
              I want to buy or sell an asset
            </label>
            <p>
              Buy or sell tokens or NFTs when previoud conditions have been met
            </p>
          </div>
          <div className="mt-4">
            <input
              type="radio"
              id="middle"
              name="gas"
              value="middle"
              className="mb-3 mr-2"
            />
            <label htmlFor="middle" className="text-lg">
              I want to bridge an asset to another chain
            </label>
            <p>Move your assets to another chain of your choice</p>
          </div>
          <div>
            <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Add another action
            </button>
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={createBundle}
        disabled={isPending}
        className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        {isPending ? "Creating..." : "Create Bundle"}
      </button>
      {hash && <div>Transaction Hash: {hash}</div>}
      {isConfirming && <div>Waiting for confirmation...</div>}
      {isConfirmed && <div>Transaction confirmed.</div>}
      {error && (
        <div>Error: {(error as BaseError).shortMessage || error.message}</div>
      )}
    </section>
  );
};

export default CreateBundleScreen;
