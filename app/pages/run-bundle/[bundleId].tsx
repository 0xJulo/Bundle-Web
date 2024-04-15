import React from 'react';
import { useRouter } from 'next/router';
import ExampleBundles, { Bundle } from '../../utils/ExampleDataStore';

import BundleDetail from '../../components/BundleDetail';


const RunBundlePage: React.FC = () => {
    const router = useRouter();
    const { bundleId } = router.query;

    const bundleIdNum = typeof bundleId === 'string' ? Number(bundleId) : -1;
    const bundle = ExampleBundles.find((bundle) => bundle.id === bundleIdNum);

    if (!bundle) {
        return <div>Bundle not found</div>;
      }
      return (
        <div>
            <div>{bundle.name}</div>
            <div>{bundle.description}</div>
            <BundleDetail />
        </div>
      );
}

export default RunBundlePage;

