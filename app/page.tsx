import React from 'react';
import ExampleBundles, { Bundle } from './utils/ExampleDataStore';

// Component imports
import BundleWidget from './components/BundleWidget';
import BundleDetail from './components/BundleDetail';

const App: React.FC = () => {
  const bundles: Bundle[] = ExampleBundles;
    return (
        <div>
            <h1>Example Bundles</h1>
            <ul>
                {bundles.map((bundle) => (
                  <React.Fragment key={bundle.id}>
                    <li>{bundle.name}</li>
                    <p>{bundle.description}</p>
                  </React.Fragment>
                ))}
            </ul>
            <BundleWidget />
            <BundleDetail />
        </div>
    );
};

export default App;
