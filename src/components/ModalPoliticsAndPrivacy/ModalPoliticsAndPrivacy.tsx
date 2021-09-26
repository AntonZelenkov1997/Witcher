import { observer } from "mobx-react-lite";
import { FC, useCallback } from "react";
import useStore from "../../hooks/useStore/useStore";
import styles from "./ModalPoliticsAndPrivacy.scss";

const ModalPoliticsAndPrivacy: FC = () => {
  const { politicsAndPrivacyModal } = useStore();

  const cancelModal = useCallback(
    () => politicsAndPrivacyModal.SET_MODAL_INACTIVE(),
    []
  );

  return (
    <aside
      className={`
      ${styles.modalPoliticsAndPrivacy} 
      
      ${
        politicsAndPrivacyModal.GET_MODAL_IS_ACTIVE === null
          ? styles.modalPoliticsAndPrivacy_initial
          : ""
      }
      ${
        politicsAndPrivacyModal.GET_MODAL_IS_ACTIVE
          ? styles.modalPoliticsAndPrivacy_active
          : ""
      }
      ${
        politicsAndPrivacyModal.GET_MODAL_IS_ACTIVE === false
          ? styles.modalPoliticsAndPrivacy_inActive
          : ""
      }
      `}
    >
      <div className={styles.overlay} onClick={cancelModal} />
      <div className={styles.lightBox}>
        <h1 className={styles.headTitle}>Обработка данных</h1>
        <article className={styles.article}>
          <h2 className={styles.articleTitle}>
            1. Что регулирует настоящая политика конфиденциальности
          </h2>
          <p className={styles.articleParagraph}>
            Настоящая политика конфиденциальности (далее — Политика) действует в
            отношении всей информации, включая персональные данные в понимании
            применимого законодательства (далее — «Персональная информация»),
            которую ООО «Гросс маркет» и/или его аффилированные лица, в том
            числе входящие в одну группу с ООО «Гросс маркет» (далее — «Гросс
            маркет»), могут получитьо Вас в процессе использования Вами любых
            сайтов, программ, продуктов и/или сервисов Гросс маркет (далее
            вместе «Сервисы»), информацию о которых Гросс маркет может также
            получать Персональную информацию от своих партнеров (далее —
            «Партнеры»), сайты, программы, продукты или сервисы которых Вы
            используете (например, от рекламодателей Гросс маркет или службами
            такси). В таких случаях передача Персональной информации возможна
            только в случаях, установленных применимым законодательством, и
            осуществляется на основании специальных договоров между Гросс маркет
            и каждым из Партнеров. Пожалуйста, обратите внимание, что
            использование любого из Сайтов и/или Сервисов может регулироваться
            дополнительными условиями, которые могут вносить в настоящую
            Политику изменения и/или дополнения, и/или иметь специальные условия
            в отношении персональной информации, размещенные в соответствующих
            разделах документов для таких Сайтов /или Сервисов. */
          </p>
        </article>
        <article className={styles.article}>
          <h2 className={styles.articleTitle}>
            2. Кто обрабатывает информацию
          </h2>
          <p className={styles.articleParagraph}>
            Для обеспечения использования Вами Сайтов и Сервисов Ваша
            Персональная информация собирается и используется Яндексом, в том
            числе включая общество с ограниченной ответственностью «Гросс
            маркет», юридическое лицо, созданное по законодательству Российской
            Федерации и зарегистрированное по адресу: 123351, Россия, Москва,
            ул. Гроссова, д. 12 (ООО «Гросс маркет»), или его аффилированным
            лицом, предоставляющим соответствующий Сервис в иных юрисдикциях. С
            информацией о том, какое лицо предоставляет тот или иной Сервис, Вы
            можете ознакомиться в условиях использования соответствующего
            Сервиса.
          </p>
        </article>
        <article className={styles.article}>
          <h2 className={styles.articleTitle}>
            3. Какова цель данной Политики
          </h2>
          <p className={styles.articleParagraph}>
            Защита Вашей Персональной информации и Вашей конфиденциальности
            чрезвычайно важны для Гросс маркета. Поэтому при использовании Вами
            Сайтов и Сервисов Гросс маркет защищает и обрабатывает Вашу
            Персональную информацию в строгом соответствии с применимым
            законодательством.
          </p>
        </article>
        <div onClick={cancelModal} className={styles.cancelButtonContainer}>
          <svg
            className={styles.cancelButton}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21 3L3 21"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M21 21L3 3"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>
    </aside>
  );
};

export default observer(ModalPoliticsAndPrivacy);
