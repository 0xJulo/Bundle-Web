'use client'
import React, { useState } from 'react';
import ExampleBundles, { Bundle } from './utils/ExampleDataStore';

// Page imports
import CreateBundlePage from './pages/CreateBundlePage';
import DashboardPage from './pages/DashboardPage';

const App: React.FC = () => {
  const [newBundle, setNewBundle] = useState(false);

  const handleCreateNewBundle = () => {
    console.log('Creating new bundle');
    setNewBundle(!newBundle);
  };

    return (
      <>
      {
        newBundle ? (
          <CreateBundlePage handleCreateNewBundle={handleCreateNewBundle} />
        ) : (
          <DashboardPage handleCreateNewBundle={handleCreateNewBundle} />
        )
      }
      </>
    );
};

export default App;
