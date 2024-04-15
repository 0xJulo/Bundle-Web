import ExampleBundles, { Bundle } from './utils/ExampleDataStore';

const App = async () => {
  const bundles: Bundle[] = ExampleBundles;
    return (
        <div>
            <h1>Example Bundles</h1>
            <ul>
                {bundles.map((bundle) => (
                  <>
                    <li key={bundle.id}>{bundle.name}</li>
                    <p>{bundle.description}</p>
                  </>
                ))}
            </ul>
        </div>
    );
};

export default App;
