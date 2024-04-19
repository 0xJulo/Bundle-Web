import {
  SignProtocolClient,
  SpMode,
  EvmChains,
  OffChainSignType,
} from "@ethsign/sp-sdk";
import { Address } from "viem";
const { privateKeyToAccount } = require("viem/accounts");

const privateKey = `0x${process.env.NEXT_PUBLIC_PRIVATE_KEY}`;

if (!privateKey) {
  throw new Error("PRIVATE_KEY is not set in the environment variables.");
}

// if (!privateKey.startsWith("0x")) {
//   throw new Error("Private key must start with '0x'");
// }

export const sendAattestation = async (
  bundleId: string,
  address: Address,
  outcome: boolean
) => {
  const client = new SignProtocolClient(SpMode.OnChain, {
    chain: EvmChains.sepolia,
    account: privateKeyToAccount(privateKey),
  });

  try {
    const tx = await client.createAttestation({
      schemaId: "0x40", //schemaInfo.schemaId or other schemaId
      data: {
        bundleId: bundleId,
        verifier: address,
        expectedOutcome: outcome,
      },
      indexingValue: `${bundleId}`,
    });

    console.log("tx", tx);
    return tx;
  } catch (error) {
    console.error("Error Creating Attestation:", error as Error);
  }
};
