import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const _initialOwner = "0xBC3F74CECF1fA8270A6FAE935e974a5a9570D054";

const CreateNFTModuleUpdated = buildModule("CreateNFT", (m: any) => {
  const initialOwner = m.getParameter("initialOwner", _initialOwner);

  const createNFT = m.contract("CreateNFT", [initialOwner]);

  return { createNFT };
});

export default CreateNFTModuleUpdated;
