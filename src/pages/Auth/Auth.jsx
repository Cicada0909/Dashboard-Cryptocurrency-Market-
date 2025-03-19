import React from 'react'
import styles from './Auth.module.css'

const Auth = () => {
    ///useWeb
    return (
        <div className={styles.modal}>
            <div className={styles.modalContent}>
                <h4 className={styles.modalHeading}>
                    Please connect your wallet!
                </h4>
                <div className={styles.btns}>
                    <button className={styles.btn}>MetaMask</button>
                    <button className={styles.btn}>Phantom</button>
                    <button className={styles.btn}>OKX/</button>
                </div>
            </div>
        </div>
    )
}

export default Auth
