import React from 'react'
import styles from './TableListItem.module.css'
import { StepBackIcon } from 'lucide-react'
import cn from 'classnames'

const TableListItem = ({ symbol, lastPrice, priceChange }) => {
    return (
        <div className={styles.container}>
            <div className={styles.tokenName}>
                <span className={styles.symbol}>{symbol.slice(0, -4)}</span>
                <span className={styles.fullName}>{symbol.slice(-4)}</span>
            </div>
            <div className={styles.price}>$ {Number(lastPrice).toFixed(1)}</div>
            <div className={styles.change}>
                <span className={styles.changeValue}>
                    {' '}
                    {Number(priceChange).toFixed(3)}
                </span>
            </div>
            <StepBackIcon
                className={cn(
                    styles.changeIcon,
                    Number(priceChange) > 0 ? styles.up : styles.down
                )}
            />
        </div>
    )
}

export default TableListItem
