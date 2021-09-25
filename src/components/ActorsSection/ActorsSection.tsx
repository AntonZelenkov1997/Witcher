import { FC } from "react";
import SwiperProgress from "../SwiperProgress/SwiperProgress";
import SwiperSlider from "../SwiperSlider/SwiperSlider";
import styles from "./ActorsSection.scss";

const ActorsSection: FC = () => {
  return (
    <section className={styles.actorsSection}>
      <div className={styles.titleWrapper}>
        <div className={styles.titleBlock}>
          <h3 className={styles.title}>Актерский состав</h3>
          <div className={styles.navigationBar}>
            <div className={`${styles.navigationBarLeft} navigationBarLeft`}>
              <svg
                className={styles.prev}
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7.724 15.1219L22.5249 0.361867C23.0099 -0.121444 23.795 -0.120631 24.2791 0.364367C24.7629 0.849302 24.7616 1.63486 24.2766 2.11855L10.3567 16L24.2771 29.8815C24.7621 30.3652 24.7633 31.1503 24.2796 31.6353C24.0369 31.8784 23.719 32 23.4011 32C23.0839 32 22.7672 31.8792 22.525 31.6378L7.724 16.8782C7.49043 16.6458 7.35937 16.3295 7.35937 16C7.35937 15.6706 7.49081 15.3547 7.724 15.1219Z" />
              </svg>
            </div>
            <div
              className={`${styles.navigationBarRight} navigationBarRight`}
            >
              <svg
                className={styles.next}
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M24.276 15.1219L9.47506 0.361867C8.99013 -0.121444 8.20501 -0.120631 7.72088 0.364367C7.23713 0.849302 7.23838 1.63486 7.72338 2.11855L21.6433 16L7.72288 29.8815C7.23795 30.3652 7.2367 31.1503 7.72038 31.6353C7.96307 31.8784 8.28101 32 8.59894 32C8.91607 32 9.23275 31.8792 9.475 31.6378L24.276 16.8782C24.5096 16.6458 24.6406 16.3295 24.6406 16C24.6406 15.6706 24.5092 15.3547 24.276 15.1219Z" />
              </svg>
            </div>
          </div>
        </div>
        <SwiperProgress />
      </div>
      <SwiperSlider />
    </section>
  );
};

export default ActorsSection;
