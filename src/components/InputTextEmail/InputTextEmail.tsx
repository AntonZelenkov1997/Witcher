import { FC } from "react";

type InputTextEmailProps = {
  containerClassName?: string;
  placeholder: string
};

const InputTextEmail: FC<InputTextEmailProps> = ({ containerClassName, placeholder }) => {
  return (
    <div className={containerClassName}>
      <input placeholder={placeholder} type="text" className="inputForm" />
    </div>
  );
};

export default InputTextEmail;
