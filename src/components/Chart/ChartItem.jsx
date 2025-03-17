import React from 'react'
import { Line } from 'react-chartjs-2'
import styles from './ChartItem.module.css'

const ChartItem = ({ data, options, size }) => {
    const sizeMap = {
        small: { width: '25%' },
        medium: { width: '50%' },
        large: { width: '100%' },
    }

    return (
        <div style={sizeMap[size]} className={styles.wrapper}>
            <Line data={data} options={options} className={styles.chart} />
        </div>
    )
}

export default ChartItem
