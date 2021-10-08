import {observer} from "mobx-react-lite";
import {ChangeEventHandler, FC} from "react";

import styles from "./InputTextEmail.scss";
import useStore from "../../hooks/useStore/useStore";
import WarningInputBlock from "../WarningInputBlock/WarningInputBlock";

const InputTextEmail: FC = () => {
    const {validationForm} = useStore();

    const dangerStyle = validationForm.GET_PROPERTY_ERROR("email")
        ? ""
        : "inputForm_danger";

    const onChange: ChangeEventHandler<HTMLInputElement> = (e) =>
        validationForm.SET_VALIDATION("email", e.target.value)


    return (
        <div>
            <div className={styles.inputTextEmail}>
                <input
                    onChange={onChange}
                    placeholder="Email"
                    type="email"
                    className={`inputForm ${dangerStyle}`}
                />
            </div>

            <WarningInputBlock
                title="Поле не заполненно"
                disabled={validationForm.GET_PROPERTY_ERROR("email")}
            />
        </div>
    );
};

export default observer(InputTextEmail);
