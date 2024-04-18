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
    const [searchTerm, setSearchTerm] = useState<string>("");

    const handleSearch = (searchTerm: string) => {
        setSearchTerm(searchTerm);
    }

    return (
        <section className='h-[100vh] mx-4 mt-24 md:mx-10 md:mt-24'>
            <SearchBar />
            <DashboardTabs searchTerm={searchTerm} />
            <CreateBundleButton handleCreateNewBundle={handleCreateNewBundle} />
        </section>
    );
};

export default DashboardPage;
