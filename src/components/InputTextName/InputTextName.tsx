import { FC } from "react";
import WarningInputBlock from "../WarningInputBlock/WarningInputBlock";

type InputTextNameProps = {
  containerClassName?: string;
  placeholder: string;
};

const InputTextName: FC<InputTextNameProps> = ({
  containerClassName,
  placeholder,
}) => {
  return (
    <>
      <div className={containerClassName}>
        <input placeholder={placeholder} type="email" className="inputForm" />
      </div>

      <WarningInputBlock title="Поле не заполненно" disabled={true} />
    </>
  );
};

export default InputTextName;
