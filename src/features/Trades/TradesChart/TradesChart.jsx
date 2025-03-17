import { useQuery } from '@tanstack/react-query'
import React from 'react'
import GetTradesApi from '../api/GetTrades/GetTrades'
import { Line } from 'react-chartjs-2'
import { CategoryScale } from 'chart.js'
import Chart from 'chart.js/auto'
import ChartItem from '../../../components/Chart/ChartItem'
import main from '../../../assets/images/main.png'

import styles from './TradesChart.module.css'

Chart.register(CategoryScale)

const TradesChart = () => {
    const { data: tradesData, isLoading: isTradesDataLoading } = useQuery({
        queryKey: ['Trades'],
        queryFn: GetTradesApi,
        refetchInterval: 10000,
    })

    if (isTradesDataLoading) {
        return 'Loading...'
    }

    const prices = tradesData.map((item) => Number(item.price).toFixed(2))
    const timestamps = tradesData.map((item) =>
        new Date(item.time).toLocaleTimeString()
    )

    const chartOptions = {
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
        },
        scales: {
            x: {
                display: false,
            },
            y: {
                ticks: {
                    display: true,
                },
                grid: {
                    color: 'transparent',
                },
                border: {
                    display: false,
                },
            },
        },
    }

    const chartData = {
        labels: timestamps,
        datasets: [
            {
                label: 'BTC trades',
                data: prices,
                pointRadius: 0,
                tension: 0.1,
                borderWidth: 3,
                borderColor: '#E323FF',
            },
        ],
    }

    return (
        <div>
            <div className={styles.header}>
                <img src={main} alt="main" className={styles.main} />
                <ChartItem
                    data={chartData}
                    options={chartOptions}
                    size="medium"
                />
            </div>
        </div>
    )
}

export default TradesChart
