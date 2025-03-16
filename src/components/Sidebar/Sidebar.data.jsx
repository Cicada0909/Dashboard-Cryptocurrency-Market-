import { PageRoutes } from '../../constants/PageRoutes'
import { Briefcase, ChartPie, Home, Settings } from 'lucide-react'
import styles from './Sidebar.module.css'

export const sidebarData = [
    {
        label: 'Home',
        path: PageRoutes.COMMON.MAIN,
        icon: <Home className={styles.icon} />,
        activeRoutes: [PageRoutes.COMMON.MAIN],
    },
    {
        label: 'Graph',
        path: PageRoutes.COMMON.MAIN,
        icon: <ChartPie className={styles.icon} />,
        activeRoutes: [PageRoutes.COMMON.MAIN],
    },
    {
        label: 'Bag',
        path: PageRoutes.COMMON.MAIN,
        icon: <Briefcase className={styles.icon} />,
        activeRoutes: [PageRoutes.COMMON.MAIN],
    },
    {
        label: 'Setting',
        path: PageRoutes.COMMON.MAIN,
        icon: <Settings className={styles.icon} />,
        activeRoutes: [PageRoutes.COMMON.MAIN],
    },
]
