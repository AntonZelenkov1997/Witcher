import { FC } from "react";
import InputMask from "react-input-mask";

type InputTelProps = {
    containerClassName?: string
}

const InputTel: FC<InputTelProps> = ({containerClassName}) => {
  return (
    <div className={containerClassName}>
      <InputMask
        className="inputForm"
        mask="+7 (999) 999-99-99"
        defaultValue=""
        placeholder="+7 (___) ___-__-__"
      ></InputMask>
    </div>
  );
};

export default InputTel;
