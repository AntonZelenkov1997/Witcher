import { FC } from "react"
import styles from "./PrimaryButton.scss"

const PrimaryButton: FC<ButtonProps> = ({ title, onClick, typeButton }) => {
    return (
        <button className={styles.buttonContainer} onClick={onClick} type={typeButton}>
            {title}
        </button>
    )
}

export default PrimaryButton;