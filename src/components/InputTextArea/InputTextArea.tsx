import {observer} from "mobx-react-lite";
import {ChangeEventHandler, FC} from "react";
import useStore from "../../hooks/useStore/useStore";
import WarningInputBlock from "../WarningInputBlock/WarningInputBlock";
import styles from "./InputTextArea.scss";

const InputTextArea: FC = () => {

    const {validationForm} = useStore();

    const dangerStyle = validationForm.GET_PROPERTY_ERROR("textArea")
        ? ""
        : "inputForm_danger";

    const onChange: ChangeEventHandler<HTMLTextAreaElement> = (e) =>
        validationForm.SET_VALIDATION("textArea", e.target.value)

    return (
        <>
            <div className={styles.inputTextArea}>
                <textarea
                    onChange={onChange}
                    className={`inputForm ${styles.text} ${dangerStyle}`}
                    placeholder="Оставьте пометку к заказу"
                />
            </div>
            <WarningInputBlock title="Поле не заполненно" disabled={validationForm.GET_PROPERTY_ERROR("textArea")}/>
        </>
    );
};

export default observer(InputTextArea);
