import React from 'react'
import TradesChart from '../../../../components/TradesChart/TradesChart'
import coinsList from './ListPriceDay.data'

const TradesList = () => {
    return (
        <div>
            {coinsList.map((coin) => (
                <TradesChart key={coin} symbol={coin} size="small" />
            ))}
        </div>
    )
}

export default TradesList
