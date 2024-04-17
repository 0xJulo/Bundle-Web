import '@rainbow-me/rainbowkit/styles.css';
import type { AppProps } from 'next/app';
import ExampleBundles, { BundlesContext } from './utils/ExampleDataStore';
import './globals.css';
import SideMenu from './components/SideMenu';
import Header from './components/Header';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WagmiProvider } from 'wagmi';
import { arbitrumSepolia, sepolia } from 'wagmi/chains';
import { getDefaultConfig, RainbowKitProvider } from '@rainbow-me/rainbowkit';

const config = getDefaultConfig({
    appName: 'RainbowKit App',
    projectId: process.env.NEXT_PUBLIC_WALLET_CONNECT_ID ?? '',
    chains: [arbitrumSepolia, sepolia],
    ssr: true,
});

const client = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <WagmiProvider config={config}>
            <QueryClientProvider client={client}>
                <RainbowKitProvider>
                    <BundlesContext.Provider value={ExampleBundles}>
                        <Header />
                        <div className='flex'>
                            <SideMenu />
                            <div className='flex-1'>
                                <Component {...pageProps} />
                            </div>
                        </div>
                    </BundlesContext.Provider>
                </RainbowKitProvider>
            </QueryClientProvider>
        </WagmiProvider>
    );
}

export default MyApp;
