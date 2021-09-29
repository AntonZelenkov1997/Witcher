import { FC } from "react"
import styles from "./SecondaryButton.scss"

const SecondaryButton: FC<ButtonProps> = ({ title, onClick, typeButton }) => {
    return (
        <button className={styles.buttonContainer} onClick={onClick} type={typeButton}>
            {title}
        </button>
    )
}

export default SecondaryButton;