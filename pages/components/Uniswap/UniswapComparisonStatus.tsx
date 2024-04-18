import React from 'react'

interface UniswapComparisonStatusProps {
    status: string
}

const UniswapComparisonStatus: React.FC<UniswapComparisonStatusProps> = ({ status}) => {
  return (
    <div className="mt-4 bg-gray-200 rounded-lg p-6 pr-8 w-1/2">
        <h3 className='bundle-text mb-4'>Your condition</h3>
        <p className='bundle-text-smaller mb-4'>If 1 ETH is greater than 4000 USDC</p>
        {status === "pending" && (
            <>
                <p className='mb-4'>Status: <span className='text-red-500 font-bold'>{status}</span></p>
                <p>Your condition has currently not been met, you will not be able to run the rest of this bundle yet.</p>
            </>
        )}
        {status === "completed" && (
            <>
                <p className='mb-4'>Status: <span className='text-[#497869] font-bold'>{status}</span></p>
                <p>Your condition has been met! You may now run the rest of this bundle.</p>
            </>
        )}
    </div>
  )
}

export default UniswapComparisonStatus

