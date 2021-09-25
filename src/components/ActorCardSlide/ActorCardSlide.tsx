import { FC } from "react";
import styles from './ActorCardSlide.scss';

type ActorCardSlideProps = {
    actorCard: sliderActorsType
}

const ActorCardSlide: FC<ActorCardSlideProps> = ({actorCard}) => {

    const { actorName, heroDesc, heroName, image } = actorCard;
    
    return (
        <article className={styles.actorCard}>
            <img src={image} alt="Not Found" className={styles.actorImage} />
            <div className={styles.actorInfo}>
                <div className={styles.topBlock}>
                    <h1 className={styles.heroName}>{heroName}</h1>
                    <h2 className={styles.actorName}>{actorName}</h2>
                </div>

                <div className={styles.bottomBlock}>
                    <h3 className={styles.heroDesc}>{heroDesc}</h3>
                </div>
            </div>
        </article>
    )
}

export default ActorCardSlide;