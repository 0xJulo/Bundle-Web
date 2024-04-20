import React from "react";
import Image from "next/image";

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
          openAccountModal,
          openChainModal,
          openConnectModal,
          authenticationStatus,
          mounted,
        }) => {
          // Note: If your app doesn't use authentication, you
          // can remove all 'authenticationStatus' checks
          const ready = mounted && authenticationStatus !== "loading";
          const connected =
            ready &&
            account &&
            chain &&
            (!authenticationStatus || authenticationStatus === "authenticated");

          return (
            <div
              {...(!ready && {
                "aria-hidden": true,
                style: {
                  opacity: 0,
                  pointerEvents: "none",
                  userSelect: "none",
                },
              })}
            >
              {(() => {
                if (!connected) {
                  return (
                    <button
                      onClick={openConnectModal}
                      type="button"
                      style={{
                        backgroundColor: "#80BAA8", // Change this color to your preference
                        color: "white",
                        padding: "10px 20px",
                        borderRadius: "20px",
                        border: "none",
                        cursor: "pointer",
                      }}
                    >
                      Connect Wallet
                    </button>
                  );
                }

                if (chain.unsupported) {
                  return (
                    <button
                      onClick={openChainModal}
                      type="button"
                      style={{
                        backgroundColor: "#80BAA8", // Change this color to your preference
                        color: "white",
                        padding: "10px 20px",
                        borderRadius: "20px",
                        border: "none",
                        cursor: "pointer",
                      }}
                    >
                      Wrong network
                    </button>
                  );
                }

                return (
                  <div style={{ display: "flex", gap: 12 }}>
                    <button
                      onClick={openChainModal}
                      style={{
                        backgroundColor: "#80BAA8", // Change this color to your preference
                        color: "white",
                        padding: "10px 20px",
                        borderRadius: "20px",
                        border: "none",
                        cursor: "pointer",
                      }}
                      type="button"
                    >
                      {chain.hasIcon && (
                        <div
                          style={{
                            background: chain.iconBackground,
                            width: 12,
                            height: 12,
                            borderRadius: 999,
                            overflow: "hidden",
                            marginRight: 4,
                          }}
                        >
                          {chain.iconUrl && (
                            <Image
                              alt={chain.name ?? "Chain icon"}
                              src={chain.iconUrl}
                              style={{ width: 12, height: 12 }}
                            />
                          )}
                        </div>
                      )}
                      {chain.name}
                    </button>

                    <button
                      onClick={openAccountModal}
                      type="button"
                      style={{
                        backgroundColor: "#80BAA8", // Change this color to your preference
                        color: "white",
                        padding: "10px 20px",
                        borderRadius: "20px",
                        border: "none",
                        cursor: "pointer",
                      }}
                    >
                      {account.displayName}
                      {account.displayBalance
                        ? ` (${account.displayBalance})`
                        : ""}
                    </button>
                  </div>
                );
              })()}
            </div>
          );
        }}
      </ConnectButton.Custom>
    </div>
  );
};

export default LoginButton;
