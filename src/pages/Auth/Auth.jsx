import React, { useEffect } from 'react'
import styles from './Auth.module.css'
import { useWeb3 } from '../../hooks/useWeb3/useWeb3'
import { useNavigate } from 'react-router-dom'
import { PageRoutes } from '../../constants/PageRoutes'

const Auth = () => {
    const { address, connectMetaMask, connectOKX, connectPhantom } = useWeb3()
    const navigate = useNavigate()

    useEffect(() => {
        if (address) {
            navigate(PageRoutes.COMMON.MAIN)
        }
    }, [address, navigate])
    ///useWeb

    return (
        <div className={styles.modal}>
            <div className={styles.modalContent}>
                <h4 className={styles.modalHeading}>
                    Please connect your wallet!
                </h4>
                <div className={styles.btns}>
                    <button className={styles.btn} onClick={connectMetaMask}>
                        MetaMask
                    </button>
                    <button className={styles.btn} onClick={connectPhantom}>
                        Phantom
                    </button>
                    <button className={styles.btn} onClick={connectOKX}>
                        OKX/
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Auth
