import { FC } from "react"
import styles from "./PrimaryButton.scss"

type PrimaryButtonProps = {
    title: string,
    onClick: undefined | (() => void)
}

const PrimaryButton: FC<PrimaryButtonProps> = ({ title, onClick }) => {
    return (
        <button className={styles.buttonContainer} onClick={onClick}>
            {title}
        </button>
    )
}

export default PrimaryButton;