import { observer } from "mobx-react-lite";
import { ChangeEventHandler, FC } from "react";

import styles from "./InputTextEmail.scss";
import useStore from "../../hooks/useStore/useStore";
import WarningInputBlock from "../WarningInputBlock/WarningInputBlock";

type InputTextEmailProps = {
  containerClassName?: string;
  placeholder: string;
  onChange: ChangeEventHandler<HTMLInputElement> | undefined;
};

const InputTextEmail: FC<InputTextEmailProps> = ({
  containerClassName,
  placeholder,
  onChange,
}) => {
  const { validationForm } = useStore();

  const dangerStyle = validationForm.GET_PROPERTY_ERROR("email")
    ? ""
    : "inputForm_danger";

  return (
    <div>
      <div className={containerClassName}>
        <input
          onChange={onChange}
          placeholder={placeholder}
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
