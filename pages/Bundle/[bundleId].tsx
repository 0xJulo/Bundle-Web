import React from 'react';
import { useRouter } from 'next/router';
import { useBundles } from '../utils/ExampleDataStore';

import UniswapCompare from '../components/UniswapCompare';
import UniswapSwap from '../components/UniswapSwap';

// Bundle data shape
export interface Bundle {
  id: number;
  name: string;
  type: string;
  createdBy: string;
  description: string;
  tags?: string[];
  conditions: Array<{
      id: number;
      title: string;
      status: boolean;
  }>;
  actions: Array<{
      id: number;
      title: string;
      type: string;
      source: string;
  }>;
  route?: string;
}


const RunBundlePage: React.FC = () => {
    const router = useRouter();
    const { bundleId } = router.query;
    const { bundles } = useBundles();
    const [bundle, setBundle] = React.useState<Bundle | null>(null);

    const goBack = () => router.back();

    React.useEffect(() => {
      // Convert bundleId to a number
      const idNum = Number(bundleId);
      const foundBundle = bundles.find(bundle => bundle.id === idNum);
      setBundle(foundBundle ?? null);
    }, [bundleId, bundles]);

    if (!bundle) {
        return <div>Bundle not found</div>;
    }
    return (
        <section className='h-[100vh] mx-4 mt-24 md:mx-10 md:mt-24'>
            <button onClick={goBack}>close</button>
            <div>{bundle.name}</div>
            <div>{bundle.description}</div>
            {bundle.conditions.map((condition) => {
              if (condition.title === 'uniswapCompare') {
                return <UniswapCompare />;
              }
              return null;
            })}
            {bundle.actions.map((action) => {
              if (action.title === 'uniswapSwap') {
                return <UniswapSwap />;
              }
              return null;
            })}
        </section>
    );
};

export default RunBundlePage;


