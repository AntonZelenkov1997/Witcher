import { FC } from "react";
import WarningInputBlock from "../WarningInputBlock/WarningInputBlock";
import styles from "./InputTextArea.scss";

type inputTextAreaProps = {
  containerClassName: string;
};

const InputTextArea: FC<inputTextAreaProps> = ({ containerClassName }) => {
  return (
    <>
      <div className={containerClassName}>
        <textarea
          className={`inputForm ${styles.text}`}
          placeholder="Оставьте пометку к заказу"
        />
      </div>
      <WarningInputBlock title="Поле не заполненно" disabled={true} />
    </>
  );
};

export default InputTextArea;
