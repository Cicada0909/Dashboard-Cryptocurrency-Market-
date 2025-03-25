import React, { useEffect, useState } from 'react'
import styles from './Transfer.module.css'
import { useWeb3 } from '../../hooks/useWeb3/useWeb3'
import { CirclePlus, CircleUserRound } from 'lucide-react'

const Transfer = () => {
    const { sendETH } = useWeb3()
    const [to, setTo] = useState('')
    const [amount, setAmount] = useState('')
    const [selectedFavorite, setSelectedFavorite] = useState('')
    const [favorites, setFavorites] = useState([])
    const [inputNewProfile, setInputNewProfile] = useState(false)

    useEffect(() => {
        const storedFavorites =
            JSON.parse(localStorage.getItem('favorites')) || []
        setFavorites(storedFavorites)
    }, [])

    const handleSelectFavorite = (address) => {
        setTo(address)
        setSelectedFavorite(address)
    }

    const handleTransfer = () => {
        if (!to || !amount) {
            alert('Error')
            return
        }

        sendETH(to, amount)

        if (!favorites.includes(to)) {
            const updatedFavorites = [...favorites, to]
            setFavorites(updatedFavorites)
            localStorage.setItem('favorites', JSON.stringify(updatedFavorites))
        }

        setTo('')
        setAmount('')
        setSelectedFavorite('')
        setInputNewProfile(false)
    }

    return (
        <div className={styles.wrapper}>
            <h4 className={styles.title}>Quick Transfer</h4>
            <div className={styles.favorite}>
                {favorites.map((address, index) => (
                    <CircleUserRound
                        key={index}
                        className={`${styles.favorite__icon} ${
                            selectedFavorite === address ? styles.selected : ''
                        }`}
                        onClick={() => handleSelectFavorite(address)}
                        size={50}
                    />
                ))}
                <CirclePlus
                    size={50}
                    onClick={() => setInputNewProfile(true)}
                    className={styles.iconAdd}
                />
            </div>
            {inputNewProfile && (
                <div className={styles.wrapper__input}>
                    <h4 className={styles.amount}>To:</h4>
                    <input
                        type="text"
                        className={styles.input}
                        value={to}
                        onChange={(e) => setTo(e.target.value)}
                        placeholder="0x..."
                    />
                </div>
            )}

            <div className={styles.wrapper__input}>
                <h4 className={styles.amount}>Amount:</h4>
                <input
                    type="text"
                    className={styles.input}
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="0.000"
                />
            </div>
            <button className={styles.btn__transfer} onClick={handleTransfer}>
                Transfer Now
            </button>
        </div>
    )
}

export default Transfer
