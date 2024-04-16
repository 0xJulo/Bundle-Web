import React from 'react';

const SideMenu: React.FC = () => {
    return (
        <aside className='bg-gray-200 w-1/5 h=[100vh] hidden md:flex flex-col items-center justify-center'>
            <h3>Data Watch</h3>
            <p>Price of ETH is $3,000</p>
            <p>Floor price of NFT is 2.1ETH</p>
            <p className='text-red-400 text-center'>
                We could do some interesting shit here
            </p>
        </aside>
    );
};

export default SideMenu;
