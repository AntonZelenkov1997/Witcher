import { FC } from "react";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { observer } from "mobx-react-lite";

import useStore from "../../hooks/useStore/useStore";
import sliderActors from "../../mock/sliderActors";
import ActorCardSlide from "../ActorCardSlide/ActorCardSlide";
import styles from "./SwiperSlider.scss";

const SwiperSlider: FC = () => {
  const { sliderProgressBar } = useStore();

  const onProgress = (swiper: { progress: number }) =>
    sliderProgressBar.SET_SLIDER_PROGRESS_BAR(swiper.progress);

  return (
    <div className={styles.sliderContainer}>
      <Swiper
        breakpoints={{
          768: {
            spaceBetween: 24,
          },
        }}
        watchSlidesProgress={true}
        modules={[Navigation]}
        spaceBetween={16}
        slidesPerView="auto"
        onProgress={onProgress}
        navigation={{
          nextEl: ".navigationBarRight",
          prevEl: ".navigationBarLeft",
        }}
      >
        {sliderActors.map((actorCard) => (
          <SwiperSlide key={actorCard.id}>
            <ActorCardSlide actorCard={actorCard} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default observer(SwiperSlider);
