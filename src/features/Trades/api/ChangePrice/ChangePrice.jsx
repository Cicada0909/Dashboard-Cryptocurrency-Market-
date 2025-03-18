import axios from 'axios'
import { BINANCE_URL } from '../../../../constants/api'
import coinsList from './ListPriceDay.data'

export const ChangePrice = async () => {
    const res = await axios.get(
        `${BINANCE_URL}/api/v3/ticker/24hr?symbols=${JSON.stringify(coinsList)}`
    )

    return res.data
}
