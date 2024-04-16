import React from "react";

// Icon imports
import Wallet from "@mui/icons-material/Wallet";
import { ConnectButton } from "@rainbow-me/rainbowkit";

const LoginButton: React.FC = () => {
  return (
    <div className="">
       <ConnectButton.Custom>
      {({
        account,
        chain,
        openConnectModal,
        mounted,
      }) => {
        // Ensure the button is only shown when mounted to avoid SSR issues
        if (!mounted) {
          return null;
        }

        return (
          <button
            onClick={openConnectModal}
            type="button"
            style={{
              backgroundColor: '#80BAA8', // Change this color to your preference
              color: 'white',
              padding: '10px 20px',
              borderRadius: '20px',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            Connect Wallet
          </button>
        );
      }}
    </ConnectButton.Custom>
    </div>
  );
};

export default LoginButton;
