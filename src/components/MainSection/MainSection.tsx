import styles from "./MainSection.scss";
import banner from "../../assets/images/witcherBanner.png";
import bannerLarge from '../../assets/images/witherBannerLarge.png';
import AppButton from "../AppButton/AppButton";

const MainSection = () => {
  return (
    <section className={styles.mainSection}>
      <div className={styles.bannerContainer}>
        <picture>
          <source srcSet={bannerLarge} media="(min-width: 1025px)" className={styles.banner} />
          <img src={bannerLarge} alt="Not found" className={styles.banner} />
        </picture>
        <div className={styles.headingBlock}>
          <h1 className={styles.headingBlockTitle}>Сериал Ведьмак</h1>
          <h2 className={styles.headingBlockDesc}>
            Геральт из&nbsp;Ривии, наемный охотник за&nbsp;чудовищами,
            перенесший мутации, идет навстречу своей судьбе в&nbsp;неспокойном
            мире, где люди часто оказываются куда коварнее чудовищ.
          </h2>
          <div className={styles.buttonContainer}>
            <AppButton title="Смотреть сериал" type="primary" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainSection;
