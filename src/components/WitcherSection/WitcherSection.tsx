import { FC } from "react";
import ActorsSection from "../ActorsSection/ActorsSection";
import ShotsFromFilmingSection from "../ShotsFromFilmingSection/ShotsFromFilmingSection";
import WitcherShopsMapSection from "../WitcherShopsMapSection/WitcherShopsMapSection";
import styles from './WitcherSection.scss';

const WitcherSection: FC = () => {
    return (
        <section className={styles.witcherSection}>
            <ActorsSection />
            <ShotsFromFilmingSection />
            <WitcherShopsMapSection />
        </section>
    )
}

export default WitcherSection;