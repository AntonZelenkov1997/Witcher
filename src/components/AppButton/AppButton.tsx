import { FC } from "react";
import styles from './AppButton.scss'

type AppButtonProps = {
    type: "primary" | "secondary"
}

const AppButton: FC<AppButtonProps> = ({type}) => {
    return (
        <button className={styles.buttonContainer}>
            Подключить подписку
        </button>
    )
}

export default AppButton;