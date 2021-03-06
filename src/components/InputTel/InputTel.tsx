import {observer} from "mobx-react-lite";
import {ChangeEventHandler, FC} from "react";
import InputMask from "react-input-mask";

import useStore from "../../hooks/useStore/useStore";
import WarningInputBlock from "../WarningInputBlock/WarningInputBlock";
import parsePhoneNumber from "../../utils/parsePhoneNumber";
import styles from "./InputTel.scss";


const InputTel: FC = () => {
    const {validationForm} = useStore();

    const dangerStyle = validationForm.GET_PROPERTY_ERROR("phone")
        ? ""
        : "inputForm_danger";

    const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        validationForm.SET_VALIDATION(
            "phone",
            parsePhoneNumber(e.target.value)
        );
    }

    return (
        <div>
            <div className={styles.inputTel}>
                <InputMask
                    onChange={onChange}
                    className={`inputForm ${dangerStyle}`}
                    mask="+7 (999) 999-99-99"
                    defaultValue=""
                    placeholder="+7 (___) ___-__-__"
                />
            </div>

            <WarningInputBlock title="Поле не заполненно" disabled={validationForm.GET_PROPERTY_ERROR("phone")}/>
        </div>
    );
};

export default observer(InputTel);
