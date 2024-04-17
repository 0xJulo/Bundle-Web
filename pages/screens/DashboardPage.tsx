'use client';
import React, { useState } from 'react';
import ExampleBundles, { Bundle } from '../utils/ExampleDataStore';

// Component imports
import BundleDetail from '../components/BundleDetail';
import SearchBar from '../components/SearchBar';
import DashboardTabs from '../components/DashboardTabs';
import CreateBundleButton from '../components/CreateBundleButton';

interface DashboardPageProps {
    handleCreateNewBundle: () => void;
}
const DashboardPage: React.FC<DashboardPageProps> = ({
    handleCreateNewBundle,
}) => {
    // const bundles: Bundle[] = ExampleBundles;

    return (
        <section className='h-[100vh] mx-4 mt-24 md:mx-10 md:mt-24'>
            <SearchBar />
            <DashboardTabs />
            <CreateBundleButton handleCreateNewBundle={handleCreateNewBundle} />
        </section>
    );
};

export default DashboardPage;
