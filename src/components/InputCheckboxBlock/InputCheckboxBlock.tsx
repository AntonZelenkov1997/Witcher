import { observer } from "mobx-react-lite";
import { ChangeEventHandler, FC } from "react";
import cs from "../../helpers/composeStyles";
import useStore from "../../hooks/useStore/useStore";
import WarningInputBlock from "../WarningInputBlock/WarningInputBlock";
import styles from "./InputCheckboxBlock.scss";

type inputAttachFile = {
  containerClassName: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
};

const InputCheckboxBlock: FC<inputAttachFile> = ({
  containerClassName,
  onChange,
}) => {
  const { validationForm } = useStore();

  const dangerStyle: string = validationForm.GET_PROPERTY_ERROR(
    "checkboxPrivacy"
  )
    ? ""
    : styles.dangerStyle;

  return (
    <>
      <div className={containerClassName}>
        <div className={styles.wrapperForCheckboxBlock}>
          <label className={styles.containerCheckbox}>
            <input
              onChange={onChange}
              type="checkbox"
              className={styles.checkbox}
              id="checkboxPrivacy"
            />
            <span className={cs(styles.checkmark, dangerStyle)}></span>
          </label>

          <label className={styles.labelCheckbox} htmlFor="checkboxPrivacy">
            Даю согласие на обработку своих персональных данных
          </label>
        </div>
      </div>

      <WarningInputBlock
        title="Поле не заполненно"
        disabled={validationForm.GET_PROPERTY_ERROR("checkboxPrivacy")}
      />
    </>
  );
};

export default observer(InputCheckboxBlock);
