import { FC } from "react"
import styles from "./SecondaryButton.scss"

type SecondaryButtonProps = {
    title: string
}

const SecondaryButton: FC<SecondaryButtonProps> = ({ title }) => {
    return (
        <button className={styles.buttonContainer}>
            {title}
        </button>
    )
}

export default SecondaryButton;