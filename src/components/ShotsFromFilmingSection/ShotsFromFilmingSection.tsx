import { FC } from "react"
import shotsFromFilm from "../../mock/shotsFromFilm";
import AppButton from "../AppButton/AppButton";
import PhotoBlock from "../PhotoBlock/PhotoBlock";
import styles from './ShotsFromFilmingSection.scss'


const ShotsFromFilmingSection: FC = () => {
    return (
        <section className={styles.shotsContainer}>
            <h3 className={styles.title}>Кадры со съемок</h3>
            <div className={styles.gridGallery}>
                {shotsFromFilm.map(({id, image}, index) => <PhotoBlock key={id} image={image} index={index} />)}
            </div>
            <div className={styles.appButtonContainer}>
                <AppButton title="Показать еще" type="secondary" />
            </div>
        </section>
    )
}

export default ShotsFromFilmingSection;