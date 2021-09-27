import { FC } from "react";
import styles from "./InputCheckboxBlock.scss";

type inputAttachFile = {
  containerClassName: string;
};

const InputCheckboxBlock: FC<inputAttachFile> = ({ containerClassName }) => {
  return (
    <div className={containerClassName}>
      <div className={styles.wrapperForCheckboxBlock}>
        <label className={styles.containerCheckbox}>
          <input
            type="checkbox"
            className={styles.checkbox}
            id="checkboxPrivacy"
          />
          <span className={styles.checkmark}></span>
        </label>

        <label className={styles.labelCheckbox} htmlFor="checkboxPrivacy">
          Даю согласие на обработку своих персональных данных
        </label>
      </div>
    </div>
  );
};

export default InputCheckboxBlock;
