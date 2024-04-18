import React from "react";
import { useRouter } from "next/router";
import { useBundles } from "../utils/ExampleDataStore";

import UniswapCompare from "../components/Uniswap/UniswapCompare";
import UniswapSwap from "../components/Uniswap/UniswapSwap";

import { useReadContract } from "wagmi";
import abi from "../utils/aggregatorV3InterfaceABI.abi.json";

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
  const { bundleId } = router.query;
  const { bundles } = useBundles();
  const [bundle, setBundle] = React.useState<any>(null);
  const [price, setPrice] = React.useState<any>(0);

  const goBack = () => router.back();

  function formatNumber(bigNumber: any) {
    // Ensure the divisor is also a BigInt
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

  React.useEffect(() => {
    // Convert bundleId to a number
    const idNum = Number(bundleId);
    const foundBundle = bundles.find((bundle) => bundle.id === idNum);
    setBundle(foundBundle ?? null);
  }, [bundleId, bundles]);

  //https://docs.chain.link/data-feeds/price-feeds/addresses?network=arbitrum&page=1
  const { data } = useReadContract({
    abi,
    functionName: "latestAnswer",
    // ETH/USD
    address: "0xd30e2101a97dcbAeBCBC04F14C3f624E67A35165",
  });

  if (!bundle) {
    return (
      <>
        {" "}
        <div>Bundle not found</div>
        <div>Check Price ETH</div>
        {data ? <div>{formatNumber(data)} USDC</div> : <div>"Loading..."</div>}
        <button>Execute swap with USDC</button>
      </>
    );
  }
  return (
    <section className="h-[100vh] mx-4 mt-24 md:mx-10 md:mt-24">
      <button onClick={goBack}>close</button>
      <div>{bundle.name}</div>
      <div>{bundle.description}</div>
      {bundle.condition.name === "uniswapCompare" ? <UniswapCompare /> : <></>}
      {bundle.condition.name === "uniswapSwap" ? <UniswapSwap /> : <></>}
      <div>Check Price</div>
      <div>{price}</div>
      <button>Execute swap with USDC</button>
    </section>
  );
};

export default RunBundlePage;
