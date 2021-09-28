import { FC } from "react";
import cs from "../../helpers/composeStyles";
import styles from './WarningInputBlock.scss'

type warningInputBlockProps = {
    title: string,
    disabled?: boolean
}

const WarningInputBlock: FC<warningInputBlockProps> = ({title, disabled = false}) => {
    return (
        <div className={cs(styles.warningInputBlock, disabled ? styles.disableWarningInputBlock : "")}>
            <span className={styles.warningInputBlockText}>{title}</span>
        </div>
    )
}

export default WarningInputBlock;