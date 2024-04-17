import React from 'react';
import { useRouter } from 'next/router';
import { useBundles } from '../utils/ExampleDataStore';

import BundleDetail from '../components/BundleDetail';

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
        <>
            <div>{bundle.name}</div>
            <div>{bundle.description}</div>
        </>
    );
};

export default RunBundlePage;

