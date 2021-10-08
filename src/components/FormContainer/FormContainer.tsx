import styles from "./FormContainer.scss";

import AppButton from "../AppButton/AppButton";
import InputAttachFile from "../InputAttachFile/InputAttachFile";
import InputCheckboxBlock from "../InputCheckboxBlock/InputCheckboxBlock";
import InputSelect from "../InputSelect/InputSelect";
import InputTel from "../InputTel/InputTel";
import InputTextArea from "../InputTextArea/InputTextArea";
import InputTextEmail from "../InputTextEmail/InputTextEmail";
import InputTextName from "../InputTextName/InputTextName";

const FormContainer = () => {

  return (
    <div className={styles.formContainer}>
      <InputSelect />

      <InputTextName />

      <div className={styles.wrapperForEmailAndTel}>
        <InputTextEmail />

        <InputTel />
      </div>

      <InputTextArea />

      <InputAttachFile />

      <InputCheckboxBlock />

      <div className={styles.appButtonWrapper}>
        <AppButton typeButton="submit" type="primary" title="Оставить заявку" />
      </div>
    </div>
  );
};

export default FormContainer;
