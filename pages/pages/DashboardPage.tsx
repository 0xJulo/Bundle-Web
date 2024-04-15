'use client'
import React, { useState } from 'react';
import ExampleBundles, { Bundle } from '../utils/ExampleDataStore';

// Component imports
import BundleDetail from '../components/BundleDetail';
import SearchBar from '../components/SearchBar';
import Tabs from '../components/Tabs';
import CreateBundleButton from '../components/CreateBundleButton';

interface DashboardPageProps {
  handleCreateNewBundle: () => void;
}
const DashboardPage: React.FC<DashboardPageProps> = ({ handleCreateNewBundle }) => {
  const bundles: Bundle[] = ExampleBundles;
  
    return (
        <div>
            <SearchBar />
            <Tabs />
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2">
                <BundleDetail />
              </div>
              <div className="md:w-1/2">
                <BundleDetail />
              </div>
            </div>
            <h1>Example Bundles</h1>
            <p>Just pulling data in here to see if it's working</p>
            <ul>
                {bundles.map((bundle) => (
                  <React.Fragment key={bundle.id}>
                    <li>{bundle.name}</li>
                    <p>{bundle.description}</p>
                  </React.Fragment>
                ))}
            </ul>
            <CreateBundleButton handleCreateNewBundle={handleCreateNewBundle} />
        </div>
    );
};

export default DashboardPage;
