"use client";
import React, { useState } from "react";
import type { NextPage } from "next";

// Component imports
import CreateBundlePage from "./screens/CreateBundlePage";
import DashboardPage from "./screens/DashboardPage";
import CreateNFTPage from "./screens/CreateNFTPage";

const Home: NextPage = () => {
  const [newBundle, setNewBundle] = useState(false);
  const [createNFT, setCreateNFT] = useState(true);

  const handleCreateNewBundle = () => {
    console.log("Creating new bundle");
    setNewBundle(!newBundle);
  };

  const handleCreateNFT = () => {
    console.log("Creating new NFT");
    setCreateNFT(!createNFT);
  };
  return (
    <>
      {newBundle ? (
        <CreateBundlePage handleCreateNewBundle={handleCreateNewBundle} />
      ) : (
        <DashboardPage handleCreateNewBundle={handleCreateNewBundle} />
      )}
      {/* {createNFT ? (
                <CreateNFTPage
                    handleCreateNFT={handleCreateNFT}
                />
            ) : (
                <DashboardPage handleCreateNewBundle={handleCreateNewBundle} />
            )} */}
    </>
  );
};

export default Home;
