import { FC } from "react";
import AppButton from "../AppButton/AppButton";
import styles from './Header.scss';
import logo from '../../assets/images/logo.png';

const Header: FC = () => {

    return (
        <header className={styles.Header}>
            <div className={styles.logoContainer}>
                <img className={styles.logo} src={logo} alt="not found" />
            </div>
            <AppButton type='secondary' title="Подключить подписку" />
        </header>
    )
}

export default Header;