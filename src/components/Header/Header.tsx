import { FC } from "react";
import styles from './Header.scss';
import logo from './logo.png'


const Header: FC = () => {
    return (
        <header className={styles.Header}>
            <div className={styles.logoContainer}>
                <img className={styles.logo} src={logo} alt="not found" />
            </div>
        </header>
    )
}

export default Header;