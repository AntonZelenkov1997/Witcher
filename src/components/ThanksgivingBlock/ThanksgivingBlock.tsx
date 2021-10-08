import { FC } from "react";
import { useHistory } from "react-router";
import cs from "../../utils/composeStyles";
import AppButton from "../AppButton/AppButton";

import styles from "./ThanksgivingBlock.scss";



const ThanksgivingBlock: FC = () => {
  const history = useHistory();

  const goToMainPage = () => history.push('/')

  return (
    <div className={cs(styles.thanksgivingContainer)}>
      <h3 className={styles.thanksgivingHead}>Заявка отправлена!</h3>
      <p className={styles.thanksgivingDescription}>
        Мы получили вашу заявку. Наши специалисты свяжутся с вами в ближайшее
        время, чтобы уточнить все детали заказа.
      </p>
      <div className={styles.thanksgivingButton}>
        <AppButton
          type="primary"
          title="Вернуться на главную"
          typeButton="button"
          onClick={goToMainPage}
        />
      </div>
    </div>
  );
};

export default ThanksgivingBlock;
