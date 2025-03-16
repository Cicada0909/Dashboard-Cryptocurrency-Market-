import { createBrowserRouter } from 'react-router-dom'
import PageLayout from '../layouts/PageLayout'

const router = createBrowserRouter([
    {
        path: '/',
        element: <PageLayout />,
        children: [],
    },
])

export default router
