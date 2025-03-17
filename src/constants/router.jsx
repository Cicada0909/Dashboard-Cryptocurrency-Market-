import { createBrowserRouter } from 'react-router-dom'
import PageLayout from '../layouts/PageLayout'
import Home from '../pages/Home/Home'
import { PageRoutes } from './PageRoutes'

const Router = createBrowserRouter([
    {
        path: '/',
        element: <PageLayout />,
        children: [
            {
                path: PageRoutes.COMMON.MAIN,
                element: <Home />,
            },
        ],
    },
])

export default Router
