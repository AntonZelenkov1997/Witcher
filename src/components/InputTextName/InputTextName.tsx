import { ChangeEventHandler, FC } from "react";

import useStore from "../../hooks/useStore/useStore";
import WarningInputBlock from "../WarningInputBlock/WarningInputBlock";
import { observer } from "mobx-react-lite";
import styles from "./InputTextName.scss";


const InputTextName: FC = () => {

  const { validationForm } = useStore();

  const dangerStyle = validationForm.GET_PROPERTY_ERROR('name') ? "" : "inputForm_danger"

  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => validationForm.SET_VALIDATION("name", e.target.value)

  return (
    <>
      <div className={styles.inputTextName}>
        <input onChange={onChange} placeholder="Имя" type="text" className={`inputForm ${dangerStyle}`} />
      </div>

      <WarningInputBlock title="Поле не заполненно" disabled={validationForm.GET_PROPERTY_ERROR('name')} />
    </>
  );
};

export default observer(InputTextName);
