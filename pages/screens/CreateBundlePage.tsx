import React from 'react';
import { useRouter } from 'next/router';
import {
    useWriteContract,
    useWaitForTransactionReceipt,
    type BaseError,
} from 'wagmi';
import abi from '../utils/Bundle.abi.json';

import ConditionTabs from '../components/ConditionsTabs';
import ActionTabs from '../components/ActionTabs';

interface CreateBundleScreenProps {
    handleCreateNewBundle: () => void;
}

const CreateBundleScreen: React.FC<CreateBundleScreenProps> = ({
    handleCreateNewBundle,
}) => {
    const router = useRouter();
    const [evidence, setEvidence] = React.useState<any>('');
    const [ipfsLoading, setIpfsLoading] = React.useState<boolean>(false);
    const [isCondition, setIsCondition] = React.useState<boolean>(false);
    const conditionRef = React.useRef(null);

    const { data: hash, error, isPending, writeContract } = useWriteContract();

    const { isLoading: isConfirming, isSuccess: isConfirmed } =
        useWaitForTransactionReceipt({
            hash,
        });

    const pinBundle = async () => {
        setIpfsLoading(true);
        const data = {
            bundleId: '02',
            description: 'this is a new bundle',
            condition: 'price-monitoring',
            action: 'swap-token',
        };

        try {
            const response = await fetch('/api/pinToPinata', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const result = await response.json();
            setEvidence(
                `https://sapphire-living-peafowl-558.mypinata.cloud/ipfs/${result.IpfsHash}`
            );
            console.log('Pinned data:', result.IpfsHash);
            setIpfsLoading(false);
        } catch (error) {
            console.error('Error pinning data to Pinata:', error);
            setIpfsLoading(false);
        }
    };

    const createBundle = () => {
        writeContract({
            address: '0xb7403174d3325C3aD6B4576E10F85c2b63e68cF8',
            abi,
            functionName: 'safeMint',
            args: [evidence],
        });
    };

    const uncheckCondition = () => {
        if (conditionRef.current) {
            (conditionRef.current as HTMLInputElement).checked = false;
            setIsCondition(false);
        }
    };

    const goBack = () => {
        router.back();
    };
    return (
        <section className='h-[100vh] mx-4 mt-24 md:mx-10 md:mt-24'>
            {/* Heading of the screen */}
            <button onClick={goBack}>close</button>
            <div className='mb-4 md:mb-8 mt-3 md:mt-6'>
                <h2 className='bundle-h2 mb-2'>Create a new bundle</h2>
            </div>
            <hr className='mt-4 mb-6 md:my-8' />

            {/* New code updates */}
            <div className='mb-8 md:w-1/2'>
                {/* start of details */}
                <div id='details'>
                    <div className='mt-4'>
                        <h3 className='mb-3 bundle-text'>Bundle Details</h3>
                        <p>Please provide some details about your Bundle.</p>
                        {/* Bundle name */}
                        <div className='mb-4 md:mb-6 mt-4'>
                            <label
                                htmlFor='bundleName'
                                className='bundle-text-smaller'
                            >
                                Bundle name
                            </label>
                            <input
                                type='text'
                                name='bundleName'
                                id='bundleName'
                                className='mt-2 md:mt-4 block w-full h-12 p-2 rounded-md border-[#80BAA8] border-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                                placeholder='Enter your bundle name'
                            />
                        </div>
                        {/* Bundle description */}
                        <div className='mb-8'>
                            <label
                                htmlFor='bundleDescription'
                                className='bundle-text-smaller'
                            >
                                Enter Bundle description
                            </label>
                            <textarea
                                id='bundleDescription'
                                name='bundleDescription'
                                rows={4}
                                className='mt-2 md:mt-4 block w-full p-2 rounded-md border-[#80BAA8] border-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                                placeholder='Describe your bundle'
                            ></textarea>
                        </div>
                    </div>
                </div>
                {/* end of details */}
                <hr className='my-8' />
                {/* start of condition */}
                <div id='condition'>
                    <div className='mt-4'>
                        <input
                            type='radio'
                            id='condition'
                            name='condition'
                            value='condition'
                            className='mb-3 mr-2 h-5 w-5'
                            ref={conditionRef}
                            onChange={() => setIsCondition(true)}
                        />
                        <label htmlFor='condition' className='bundle-text'>
                            I want to use a condition in my Bundle
                        </label>
                        {isCondition && (
                            <a
                                href='#'
                                onClick={uncheckCondition}
                                className='block text-blue-500 hover:text-blue-700 mb-3 mt-2'
                            >
                                Cancel condition
                            </a>
                        )}
                        <p className='mb-3'>
                            This option will allow you to check a wallet for
                            assets or simply send a transaction. You may use
                            your own wallet or base your actions on someone
                            elses
                        </p>
                        <p className='font-bold'>
                            Conditions must be fufilled before the action can be
                            executed
                        </p>
                        {isCondition && (
                            <>
                                <div>
                                    <ConditionTabs />
                                </div>
                                <div className='flex space-x-4 mt-4'>
                                    <button
                                        disabled
                                        className='bg-gray-200 text-gray-400 font-bold py-2 px-4 rounded'
                                    >
                                        Create another &apos;and&apos; condition
                                    </button>
                                    <button
                                        disabled
                                        className='bg-gray-200 text-gray-400 font-bold py-2 px-4 rounded'
                                    >
                                        Create another &apos;or&apos; condition
                                    </button>
                                </div>
                            </>
                        )}
                    </div>
                </div>
                {/* end of condition */}
                <hr className='my-8' />
                {/* start of action */}
                <div id='action'>
                    <h3 className='mb-3 bundle-text'>Action</h3>
                    <p>A trigger is how you will start your bundle</p>
                    <ActionTabs />
                    <button
                        disabled
                        className='bg-gray-200 text-gray-400 font-bold py-2 px-4 rounded'
                    >
                        Create another action
                    </button>
                </div>
                {/* end of action */}
                <hr className='my-8' />
            </div>
            {/* Create bundle button */}
            <button
                type='button'
                onClick={() => {
                    pinBundle()
                        .then(() => {
                            createBundle();
                        })
                        .catch((error) => {
                            console.error('Error in pinBundle:', error);
                        });
                }}
                disabled={isPending}
                className='mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
            >
                {ipfsLoading || isPending ? 'Creating...' : 'Create Bundle'}
            </button>
            {/* Web3 shit */}
            {hash && <div>Transaction Hash: {hash}</div>}
            {isConfirming && <div>Waiting for confirmation...</div>}
            {isConfirmed && <div>Transaction confirmed.</div>}
            {error && (
                <div>
                    Error: {(error as BaseError).shortMessage || error.message}
                </div>
            )}
        </section>
    );
};

export default CreateBundleScreen;
