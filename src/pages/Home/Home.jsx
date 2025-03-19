import React, { useEffect } from 'react'
import TradesChart from '../../components/TradesChart/TradesChart'
import TableList from '../../components/Table/TableList/TableList'
import styles from './Home.module.css'
import main from '../../assets/images/main.png'
import SliderChart from '../../components/SliderChart/SliderChart'
import { useWeb3 } from '../../hooks/useWeb3/useWeb3'
import { useNavigate } from 'react-router-dom'
import { PageRoutes } from '../../constants/PageRoutes'

const Home = () => {
    const { address } = useWeb3()

    const navigate = useNavigate()

    // useEffect(() => {
    //     if (!address) {
    //         navigate(PageRoutes.AUTH.LOGIN)
    //     }
    // }, [address, navigate])

    return (
        <div className={styles.wrapper}>
            {/* <button onClick={connectMetaMask}>conect</button>
            <button onClick={disconnect}>disconnect</button> */}
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
