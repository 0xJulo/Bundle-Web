import React from 'react';
import ExampleBundles, { Bundle } from './utils/ExampleDataStore';

// Component imports
import BundleWidget from './components/BundleWidget';
import BundleDetail from './components/BundleDetail';
import Button from './components/Button';
import SearchBar from './components/SearchBar';
import Tabs from './components/Tabs';
import CreateBundleButton from './components/CreateBundleButton';

const App: React.FC = () => {
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
            <CreateBundleButton />
        </div>
    );
};

export default App;
