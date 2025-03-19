import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/autoplay'
import { Autoplay, FreeMode } from 'swiper/modules'
import TradesChart from '../TradesChart/TradesChart'
import styles from './SliderChart.module.css'
import { useQuery } from '@tanstack/react-query'
import { ChangePrice } from '../../features/Trades/api/ChangePrice/ChangePrice'

const SliderChart = () => {
    const { data, isLoading } = useQuery({
        queryKey: ['changePrices'],
        queryFn: ChangePrice,
        refetchInterval: 10000,
    })

    if (isLoading) {
        return 'Loading'
    }

    return (
        <Swiper
            slidesPerView="auto"
            spaceBetween={20}
            freeMode={true}
            loop={true}
            autoplay={{ delay: 0, disableOnInteraction: false }}
            speed={5000}
            modules={[Autoplay, FreeMode]}
            className={styles.wrapper}
        >
            {data.map((coin) => (
                <SwiperSlide key={coin.symbol} className={styles.slide}>
                    <TradesChart
                        className={styles.item}
                        symbol={coin.symbol}
                        size="large"
                        lastPrice={coin.lastPrice}
                        priceChange={coin.priceChange}
                        isSlider={true}
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    )
}

export default SliderChart
