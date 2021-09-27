import { FC } from "react";
import styles from "./InputTextArea.scss";

type inputTextAreaProps = {
  containerClassName: string;
};

const InputTextArea: FC<inputTextAreaProps> = ({ containerClassName }) => {
  return (
    <div className={containerClassName}>
      <textarea
        className={`inputForm ${styles.text}`}
        placeholder="Оставьте пометку к заказу"
      />
    </div>
  );
};

export default InputTextArea;
