import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";
import { parseEther } from "viem";

const _initialOwner = "0xBC3F74CECF1fA8270A6FAE935e974a5a9570D054";

const BundleModule = buildModule("Bundle", (m: any) => {
  const initialOwner = m.getParameter("initialOwner", _initialOwner);

  const bundle = m.contract("Bundle", [initialOwner]);

  return { bundle };
});

export default BundleModule;
