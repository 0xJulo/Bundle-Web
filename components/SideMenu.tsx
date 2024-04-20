import React from 'react';
import { ExpandMore, ExpandLess } from '@mui/icons-material';

const SideMenu: React.FC = () => {
    const [isEthereumOpen, setIsEthereumOpen] = React.useState(false);
    const [isArbitrumOpen, setIsArbitrumOpen] = React.useState(false);
    const [isGnosisOpen, setIsGnosisOpen] = React.useState(false);
    return (
        <aside className='bg-gray-200 w-1/5 h-screen fixed hidden md:flex flex-col items-start justify-between px-4'>
            <div>
                <div className='mb-8 flex flex-col items-start mt-24'>
                    <h3 className='text-2xl font-bold mb-2'>My Assets</h3>
                    <div className='flex flex-col items-start mb-1'>
                        <button onClick={() => setIsEthereumOpen(!isEthereumOpen)} className="text-blue-500 underline flex items-center">
                            Ethereum
                            {isEthereumOpen ? <ExpandLess /> : <ExpandMore />}
                        </button>
                        {isEthereumOpen && (
                            <div className='mt-1 mb-2'>
                                <ul>
                                    <li>1.08 ETH</li>
                                    <li>1223 USDC</li>
                                    <li>381 USDT</li>
                                    <li>1.2 WBTC</li>
                                </ul>
                            </div>
                        )}
                    </div>
                    <div className='flex flex-col items-start mb-1'>
                        <button onClick={() => setIsArbitrumOpen(!isArbitrumOpen)} className="text-blue-500 underline flex items-center">
                            Arbitrum
                            {isArbitrumOpen ? <ExpandLess /> : <ExpandMore />}
                        </button>
                        {isArbitrumOpen && (
                            <div className='mt-1 mb-2'>
                                <ul>
                                    <li>419 ARB</li>
                                    <li>191 USDC</li>
                                    <li>0.1 WBTC</li>
                                    <li>21 LDO</li>
                                </ul>
                            </div>
                        )}
                    </div>
                    <div className='flex flex-col items-start mb-1'>
                        <button onClick={() => setIsGnosisOpen(!isGnosisOpen)} className="text-blue-500 underline flex items-center">
                            Gnosis Chain
                            {isGnosisOpen ? <ExpandLess /> : <ExpandMore />}
                        </button>
                        {isGnosisOpen && (
                            <div className='mt-1'>
                                <ul>
                                    <li>818 xDAI</li>
                                    <li>3.4 GNO</li>
                                    <li>414 LINK</li>
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
                <div>
                    <h3 className='text-2xl font-bold '>Data Watch</h3>
                    <button className="text-blue-500 flex items-center mb-2">Edit data stream</button>
                    <p>ETH: $3,621</p>
                    <p>ARB: $1.13</p>
                    <p>GNO: $3,621</p>
                    <p>NFT A Project Floor: 0.87 ETH</p>
                    <p>NFT B Project Floor: 21.01 ETH</p>
                </div>
            </div>
            <div></div>
        </aside>
    );
};

export default SideMenu;
