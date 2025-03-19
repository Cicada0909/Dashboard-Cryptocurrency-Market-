import React from 'react'
import TradesChart from '../../components/TradesChart/TradesChart'
import TableList from '../../components/Table/TableList/TableList'
import styles from './Home.module.css'
import main from '../../assets/images/main.png'
import SliderChart from '../../components/SliderChart/SliderChart'

const Home = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <img src={main} alt="" />
                <TradesChart symbol="BTCUSDT" size="medium" />
            </div>
            <SliderChart />
            <TableList />
        </div>
    )
}

export default Home
