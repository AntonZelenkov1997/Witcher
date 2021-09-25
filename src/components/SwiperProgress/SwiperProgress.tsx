import { observer } from "mobx-react-lite";
import { FC, useState } from "react";
import useStore from "../../hooks/useStore/useStore";
import styles from "./SwiperProgress.scss";

const SwiperProgress: FC = () => {
  const { sliderProgressBar } = useStore();

  return (
    <progress
      className={styles.swiperProgress}
      max="1"
      value={sliderProgressBar.GET_PROGRESS}
    />
  );
};

export default observer(SwiperProgress);
