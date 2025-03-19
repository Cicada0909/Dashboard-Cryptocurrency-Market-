import { useQuery } from '@tanstack/react-query'
import React from 'react'
import GetTradesApi from '../../features/Trades/api/GetTrades/GetTrades'
import { Line } from 'react-chartjs-2'
import { CategoryScale } from 'chart.js'
import Chart from 'chart.js/auto'
import ChartItem from '../Chart/ChartItem'

import styles from './TradesChart.module.css'

Chart.register(CategoryScale)

const TradesChart = ({ symbol, size, lastPrice, priceChange, isSlider }) => {
    const { data: tradesData, isLoading: isTradesDataLoading } = useQuery({
        queryKey: ['Trades', symbol],
        queryFn: () => GetTradesApi(symbol),
        refetchInterval: 10000,
    })

    if (isTradesDataLoading) {
        return 'Loading...'
    }

    const prices =
        tradesData?.map((item) => Number(item.price).toFixed(2)) || []
    const timestamps =
        tradesData?.map((item) => new Date(item.time).toLocaleTimeString()) ||
        []

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
                    display: isSlider ? false : true,
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
        <ChartItem
            data={chartData}
            options={chartOptions}
            size={size}
            lastPrice={lastPrice}
            priceChange={priceChange}
            isSlider={isSlider}
            symbol={symbol}
        />
    )
}

export default TradesChart
