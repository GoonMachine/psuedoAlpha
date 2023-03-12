import { useCallback, useEffect, useState } from 'react'
import { ethos } from 'ethos-connect'
import { SuccessMessage } from '.';

const Mint = ({ version, reset }: { version: number, reset: () => void }) => {
    const { wallet } = ethos.useWallet();
    const [nftObjectId, setNftObjectId] = useState(null);

    const mint = useCallback(async () => {
        if (!wallet) return;
    
        try {
          const signableTransaction = {
            kind: "moveCall" as const,
            data: {
              packageObjectId: "0xde824d55ec7b4db5ac3278bdc9f9985d6c4e1719",
              module: "onchain_identity",
              function: "create_profile",
              typeArguments: [],
              arguments: [
                "testooor",
                "https://ethoswallet.xyz/assets/images/ethos-email-logo.png",
              ],
              gasBudget: 1000,
            },
          };
    
          const response = await wallet.signAndExecuteTransaction(signableTransaction);
          console.log(response)

          if (response?.effects?.events) {
            const moveEventEvent = response.effects.events.find(
              (e) => ('moveObject' in e)
            );
            if (!moveEventEvent || !('moveObject' in moveEventEvent)) return;

            const { moveObject } = moveEventEvent;
            setNftObjectId(moveObject)
            console.log(setNftObjectId)
          }  
        } catch (error) {
          console.log(error);
        }
    }, [wallet]);

    useEffect(() => {
        setNftObjectId(null)
    }, [version])

    return (
        <div className='flex flex-col gap-6'>
            {nftObjectId && (
                <SuccessMessage reset={reset}>
                    <a 
                        href={`https://explorer.sui.io/objects/${nftObjectId}`}
                        target="_blank" 
                        rel="noreferrer"
                        className='underline font-blue-600' 
                    >
                        View Your NFT on the DevNet Explorer 
                    </a>
                </SuccessMessage>
            )}
            <button
                className="mx-auto px-5 py-3 btn btn-active btn-accent w-full"
                onClick={mint}
            >
                Create a Profile!
            </button>
        </div>
    )
}

export default Mint;