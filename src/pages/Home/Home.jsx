import React from 'react'
import TradesChart from '../../components/TradesChart/TradesChart'
import TableList from '../../components/Table/TableList/TableList'
import TradesList from '../../features/Trades/api/ChangePrice/TradesList'
import styles from './Home.module.css'
import main from '../../assets/images/main.png'

const Home = () => {
    return (
        <div>
            <div className={styles.header}>
                <img src={main} alt="" />
                <TradesChart symbol="BTCUSDT" size="medium" />
            </div>
            <TradesList />
            <TableList />
        </div>
    )
}

export default Home
