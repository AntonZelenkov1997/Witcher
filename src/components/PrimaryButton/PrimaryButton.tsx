import { FC } from "react"
import styles from "./PrimaryButton.scss"

type PrimaryButtonProps = {
    title: string
}

const PrimaryButton: FC<PrimaryButtonProps> = ({ title }) => {
    return (
        <button className={styles.buttonContainer}>
            {title}
        </button>
    )
}

export default PrimaryButton;