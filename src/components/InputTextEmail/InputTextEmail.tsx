import { FC } from "react";
import WarningInputBlock from "../WarningInputBlock/WarningInputBlock";

type InputTextEmailProps = {
  containerClassName?: string;
  placeholder: string;
};

const InputTextEmail: FC<InputTextEmailProps> = ({
  containerClassName,
  placeholder,
}) => {
  return (
    <>
      <div className={containerClassName}>
        <input placeholder={placeholder} type="text" className="inputForm" />
      </div>

      <WarningInputBlock title="Поле не заполненно" disabled={true} />
    </>
  );
};

export default InputTextEmail;
