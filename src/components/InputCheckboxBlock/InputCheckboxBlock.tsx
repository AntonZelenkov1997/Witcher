import {observer} from "mobx-react-lite";
import {ChangeEventHandler, FC} from "react";
import cs from "../../utils/composeStyles";
import useStore from "../../hooks/useStore/useStore";
import WarningInputBlock from "../WarningInputBlock/WarningInputBlock";
import styles from "./InputCheckboxBlock.scss";

const InputCheckboxBlock: FC = () => {
    const {validationForm} = useStore();

    const dangerStyle: string = validationForm.GET_PROPERTY_ERROR(
        "checkboxPrivacy"
    )
        ? ""
        : styles.dangerStyle;

    const onChange: ChangeEventHandler<HTMLInputElement> = (e) => validationForm.SET_VALIDATION("checkboxPrivacy", e.target.checked)

    return (
        <>
            <div className={styles.inputCheckboxBlock}>
                <div className={styles.wrapperForCheckboxBlock}>
                    <label className={styles.containerCheckbox}>
                        <input
                            onChange={onChange}
                            type="checkbox"
                            className={styles.checkbox}
                            id="checkboxPrivacy"
                        />
                        <span className={cs(styles.checkmark, dangerStyle)} />
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
