import { FC } from "react";
import InputMask from "react-input-mask";
import WarningInputBlock from "../WarningInputBlock/WarningInputBlock";

type InputTelProps = {
  containerClassName?: string;
};

const InputTel: FC<InputTelProps> = ({ containerClassName }) => {
  return (
    <>
      <div className={containerClassName}>
        <InputMask
          className="inputForm"
          mask="+7 (999) 999-99-99"
          defaultValue=""
          placeholder="+7 (___) ___-__-__"
        ></InputMask>
      </div>

      <WarningInputBlock title="Поле не заполненно" disabled={true} />
    </>
  );
};

export default InputTel;
