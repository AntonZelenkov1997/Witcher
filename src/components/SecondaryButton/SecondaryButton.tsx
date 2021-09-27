import { FC } from "react"
import styles from "./SecondaryButton.scss"

type SecondaryButtonProps = {
    title: string,
    onClick: undefined | (() => void)
}

const SecondaryButton: FC<SecondaryButtonProps> = ({ title, onClick }) => {
    return (
        <button className={styles.buttonContainer} onClick={onClick}>
            {title}
        </button>
    )
}

export default SecondaryButton;