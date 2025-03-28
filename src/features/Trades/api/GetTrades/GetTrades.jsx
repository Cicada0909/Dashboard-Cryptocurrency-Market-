import axios from 'axios'
import { BINANCE_URL } from '../../../../constants/api'

const GetTradesApi = async (symbol) => {
    try {
        const res = await axios.get(
            `${BINANCE_URL}/api/v3/trades?symbol=${symbol}&limit=100`
        )
        return res.data
    } catch (error) {
        console.log('Error', error)
    }
}

export default GetTradesApi
