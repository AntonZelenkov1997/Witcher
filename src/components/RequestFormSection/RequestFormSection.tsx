import { observer } from "mobx-react-lite";
import { FC, FormEventHandler, useState } from "react";
import { CSSTransition } from "react-transition-group";

import useStore from "../../hooks/useStore/useStore";
import FormContainer from "../FormContainer/FormContainer";
import ThanksgivingBlock from "../ThanksgivingBlock/ThanksgivingBlock";
import styles from "./RequestFormSection.scss";
import "./RequestFormSection.global.scss";

type submitFormType = FormEventHandler<HTMLFormElement>;

const RequestFormSection: FC = () => {
  const { validationForm, thanksgivingBlock } = useStore();

  const [showFormContainer, setShowFormContainer] = useState(true);
  const [showThanksgivingBlock, setShowThanksgivingBlock] = useState(false);

  const submitForm: submitFormType = (e) => {
    e.preventDefault();
    validationForm.CHECK_FORM_ERRORS();

    if (validationForm.GET_FORM_IS_PASSED) {
      setShowFormContainer(false);

      setTimeout(() => {
        setShowThanksgivingBlock(false);
      }, 7000);
    }
  };

  return (
    <section className={styles.requestFormSection}>
      <form className={styles.requestForm} onSubmit={submitForm}>
        <CSSTransition
          in={showFormContainer}
          timeout={300}
          classNames="formContainer"
          unmountOnExit
          onEnter={() => setShowThanksgivingBlock(false)}
          onExited={() => setShowThanksgivingBlock(true)}
        >
          <h1 className={styles.heading}>Оставьте заявку</h1>
        </CSSTransition>

        <div className={styles.wrapperBlockContainer}>
          <div className={styles.leftBlockContainer}>
            <CSSTransition
              in={showFormContainer}
              timeout={300}
              classNames="formContainer"
              unmountOnExit
              onEnter={() => setShowThanksgivingBlock(false)}
              onExited={() => setShowThanksgivingBlock(true)}
            >
              <FormContainer />
            </CSSTransition>

            <CSSTransition
              in={showThanksgivingBlock}
              timeout={300}
              classNames="thanksgivingBlock"
              unmountOnExit
              onEnter={() => setShowFormContainer(false)}
              onExited={() => setShowFormContainer(true)}
            >
              <ThanksgivingBlock />
            </CSSTransition>
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
              <p className={styles.bottomText}>Пн-Пт с 10:00 до 22:00</p>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
};

export default observer(RequestFormSection);
