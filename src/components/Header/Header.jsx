import { Link } from 'react-router-dom'
import styles from './Header.module.css'
import { ChevronLeft, Bell, User, Search } from 'lucide-react'

const Header = ({ heading, proccessBack }) => {
    return (
        <header className={styles.header}>
            <div className={styles.left}>
                <Link to={proccessBack} className={styles.back}>
                    <ChevronLeft className={styles.backIcon} />
                </Link>
                <h4 className={styles.heading}>{heading}</h4>
            </div>
            <div className={styles.right}>
                <div className={styles.wrapper__input}>
                    <input
                        type="text"
                        placeholder="Search"
                        className={styles.input}
                    />
                    <Search width={20} />
                </div>

                <div className={styles.headerBtns}>
                    <button className={styles.notification}>
                        <Bell
                            className={styles.notificationIcon}
                            width={16}
                            height={16}
                        />
                    </button>
                    <button className={styles.profile}>
                        <User
                            className={styles.profileIcon}
                            width={16}
                            height={16}
                        />
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header
