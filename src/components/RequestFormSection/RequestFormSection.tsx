import { FC } from "react";
import AppButton from "../AppButton/AppButton";

import InputAttachFile from "../InputAttachFile/InputAttachFile";
import InputCheckboxBlock from "../InputCheckboxBlock/InputCheckboxBlock";
import InputSelect from "../InputSelect/InputSelect";
import InputTel from "../InputTel/InputTel";
import InputTextArea from "../InputTextArea/InputTextArea";
import InputTextEmail from "../InputTextEmail/InputTextEmail";
import InputTextName from "../InputTextName/InputTextName";

import styles from "./RequestFormSection.scss";

const RequestFormSection: FC = () => {
  return (
    <section className={styles.requestFormSection}>
      <form className={styles.requestForm}>
        <h1 className={styles.heading}>Оставьте заявку</h1>

        <div className={styles.wrapperBlockContainer}>
          <div className={styles.leftBlockContainer}>

            <InputSelect />

            <InputTextName
              containerClassName={styles.inputTextName}
              placeholder="Имя"
            />

            <div className={styles.wrapperFroEmailAndTel}>
              <InputTextEmail
                containerClassName={styles.inputTextEmail}
                placeholder="Email"
              />

              <InputTel containerClassName={styles.inputTel} />
            </div>

            <InputTextArea containerClassName={styles.inputTextArea} />

            <InputAttachFile containerClassName={styles.inputAttachFile} />

            <InputCheckboxBlock
              containerClassName={styles.inputCheckboxBlock}
            />

            <div className={styles.appButtonWrapper}>
              <AppButton
                type="primary"
                title="Оставить заявку"
                onClick={undefined}
              />
            </div>
          </div>

          <div className={styles.rightBlockContainer}>
            <div className={styles.infoBlock}>
              <p className={styles.topText}>Наша горячая линия</p>
              <p className={styles.bottomTextPhone}>8 800 38 23 112</p>
            </div>

            <div className={styles.infoBlock}>
              <p className={styles.topText}>Главный офис</p>
              <p className={styles.bottomText}>
                г. Москва, Садовническая ул., 80
              </p>
            </div>

            <div className={styles.infoBlock}>
              <p className={styles.topText}>Часы работы</p>
              <p className={styles.bottomText}>Пн-Пт с 10:00 до 22:002</p>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
};

export default RequestFormSection;
