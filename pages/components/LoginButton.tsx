import React from "react";

// Icon imports
import Wallet from "@mui/icons-material/Wallet";
import { ConnectButton } from "@rainbow-me/rainbowkit";

const Button: React.FC = () => {
  return (
    <div className="flex items-center gap-2 bg-[#80BAA8] rounded-[10px] p-2 pl-3">
      <ConnectButton />
    </div>
  );
};

export default Button;
