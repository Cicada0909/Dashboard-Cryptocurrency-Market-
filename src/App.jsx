import { RouterProvider } from 'react-router-dom'
import router from './constants/router'
import { Web3Provider } from './providers/Web3Provider'

function App() {
    return (
        <>
            <Web3Provider>
                <RouterProvider router={router} />
            </Web3Provider>
        </>
    )
}

export default App
