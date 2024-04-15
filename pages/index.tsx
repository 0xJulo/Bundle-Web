"use client";
import React, { useState } from "react";
import type { NextPage } from "next";

// Component imports
import CreateBundlePage from "./pages/CreateBundlePage";
import DashboardPage from "./pages/DashboardPage";
import { ConnectButton } from "@rainbow-me/rainbowkit";

const Home: NextPage = () => {
  const [newBundle, setNewBundle] = useState(false);

  const handleCreateNewBundle = () => {
    console.log("Creating new bundle");
    setNewBundle(!newBundle);
  };
  return (
    <>
      <ConnectButton />
      {newBundle ? (
        <CreateBundlePage handleCreateNewBundle={handleCreateNewBundle} />
      ) : (
        <DashboardPage handleCreateNewBundle={handleCreateNewBundle} />
      )}
    </>
  );
};

export default Home;
