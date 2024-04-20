"use client";
import React, { useState } from "react"; // Import useState from React
import { useRouter } from "next/router";

// Component imports
import Button from "./Button";

// Data imports
import { Bundle } from "../utils/ExampleDataStore";

interface BundleDetailProps {
  bundle: Bundle;
}

const BundleDetail: React.FC<BundleDetailProps> = ({ bundle }) => {
  const [isOpened, setOpened] = useState<boolean>(false);
  // const bundle: Bundle = ExampleBundles[0];
  const router = useRouter();

  // Function to toggle the opened state
  //const toggleOpen = () => setOpened(!isOpened);

  const handleRunBundle = () => {
    // Check if bundle.route is defined and not an empty string
    if (bundle.route && bundle.route.trim() !== "") {
      // Use bundle.route for navigation
      router.push(bundle.route);
    }
    // If bundle.route is not defined or is an empty string, do nothing (don't navigate)
  };

  return (
    <div className="flex-row bg-[#EEECEC] my-4 rounded-[12px] border-[1px] border-[#D3D3D3]">
      <div className="bg-gray-100 flex p-2 pl-3 rounded-t-[10px] font-semibold">
        <p>{bundle.type}</p>
      </div>
      <div className="flex flex-col justify-between p-3">
        <div>
          <h2 className="text-2xl font-semibold">{bundle.name}</h2>
          <p className=" w-[95%]">{bundle.description}</p>
        </div>
        <div className="mt-4">
          <Button label="View Bundle" onClick={() => {}} bundleId={parseInt(bundle.id, 10)} />
        </div>
      </div>
    </div>
  );
};

export default BundleDetail;
