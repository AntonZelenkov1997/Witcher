import styles from "./FormContainer.scss";
import AppButton from "../AppButton/AppButton";
import InputAttachFile from "../InputAttachFile/InputAttachFile";
import InputCheckboxBlock from "../InputCheckboxBlock/InputCheckboxBlock";
import InputSelect from "../InputSelect/InputSelect";
import InputTel from "../InputTel/InputTel";
import InputTextArea from "../InputTextArea/InputTextArea";
import InputTextEmail from "../InputTextEmail/InputTextEmail";
import InputTextName from "../InputTextName/InputTextName";
import useStore from "../../hooks/useStore/useStore";
import parsePhoneNumber from "../../helpers/parsePhoneNumber";

const FormContainer = () => {
  const { validationForm } = useStore();

  return (
    <div className={styles.formContainer}>
      <InputSelect
        onChange={(selectedValue) =>
          validationForm.SET_VALIDATION("city", selectedValue.label)
        }
      />

      <InputTextName
        onChange={(e) => validationForm.SET_VALIDATION("name", e.target.value)}
        containerClassName={styles.inputTextName}
        placeholder="Имя"
      />

      <div className={styles.wrapperForEmailAndTel}>
        <InputTextEmail
          onChange={(e) =>
            validationForm.SET_VALIDATION("email", e.target.value)
          }
          containerClassName={styles.inputTextEmail}
          placeholder="Email"
        />

        <InputTel
          onChange={(e) => {
            validationForm.SET_VALIDATION(
              "phone",
              parsePhoneNumber(e.target.value)
            );
          }}
          containerClassName={styles.inputTel}
        />
      </div>

      <InputTextArea
        onChange={(e) =>
          validationForm.SET_VALIDATION("textArea", e.target.value)
        }
        containerClassName={styles.inputTextArea}
      />

      <InputAttachFile
        onGetFile={(file) => validationForm.SET_VALIDATION("attachFile", file)}
        containerClassName={styles.inputAttachFile}
      />

      <InputCheckboxBlock
        onChange={(e) =>
          validationForm.SET_VALIDATION("checkboxPrivacy", e.target.checked)
        }
        containerClassName={styles.inputCheckboxBlock}
      />

      <div className={styles.appButtonWrapper}>
        <AppButton typeButton="submit" type="primary" title="Оставить заявку" />
      </div>
    </div>
  );
};

export default FormContainer;
