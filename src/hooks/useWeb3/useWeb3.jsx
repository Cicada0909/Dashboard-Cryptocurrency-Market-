// import React from 'react'
// import { useAccount, useConnect, useDisconnect } from 'wagmi'
// import { metaMask } from 'wagmi/connectors'

// export const useWeb3 = () => {
//     const { address, isConnected, status } = useAccount()

//     const { connect } = useConnect()
//     const { disconnect } = useDisconnect()
//     return {
//         address,
//         isConnected,
//         status,
//         connectMetaMask: () => connect({ connect: metaMask() }),
//         disconnect,
//     }
// }

import { parseEther } from 'viem'
import {
    useAccount,
    useConnect,
    useDisconnect,
    useSendTransaction,
} from 'wagmi'
import { metaMask } from 'wagmi/connectors'
export const useWeb3 = () => {
    const { address, isConnected, status } = useAccount()
    const { connect } = useConnect()

    const { disconnect } = useDisconnect()

    const { sendTransaction } = useSendTransaction()

    const sendETH = (to, amount) => {
        if (!sendTransaction) return

        sendTransaction({ to, value: parseEther(amount) })
    }

    return {
        address,
        isConnected,
        status,
        connectMetaMask: () => connect({ connector: metaMask() }),
        disconnect,
        connectOKX: () => connect({ connector: okxWallet() }),
        connectPhantom: () => connect({ connector: phantom() }),
        sendETH,
    }
}
