import React from 'react'
import { Line } from 'react-chartjs-2'
import styles from './ChartItem.module.css'
import { ArrowLeftRight, CircleArrowUp } from 'lucide-react'
import cn from 'classnames'

const ChartItem = ({
    data,
    options,
    size,
    lastPrice,
    priceChange,
    isSlider,
    symbol,
}) => {
    const sizeMap = {
        small: { width: '19%' },
        medium: { width: '50%' },
        large: { width: '100%' },
    }

    return (
        <div style={sizeMap[size]} className={styles.wrapper}>
            <Line data={data} options={options} className={styles.chart} />
            {isSlider && (
                <div className={styles.header}>
                    <div className={styles.itemsChange}>
                        <div className={styles.symbols}>
                            <div className={styles.symbols__item}>
                                {symbol.slice(0, -4)}
                            </div>
                            <ArrowLeftRight className={styles.exchange} />
                            <div className={styles.symbols__item}>
                                {symbol.slice(-4)}
                            </div>
                        </div>
                        <div className={styles.change}>
                            <CircleArrowUp
                                className={cn(
                                    styles.changeIcon,
                                    Number(priceChange) > 0
                                        ? styles.up
                                        : styles.down
                                )}
                            />
                            <span className={styles.changePercent}>
                                {((priceChange / lastPrice) * 100).toFixed(1)}
                            </span>
                        </div>
                    </div>
                    <span className={styles.price}>
                        {Number(lastPrice).toFixed(2)}
                    </span>
                </div>
            )}
        </div>
    )
}

export default ChartItem
