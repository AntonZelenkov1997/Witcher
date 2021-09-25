import { FC } from "react";
import MainSection from "../../components/MainSection/MainSection";
import WitcherSection from "../../components/WitcherSection/WitcherSection";
import './MainPage.scss';

const MainPage: FC = () => {
    return (
        <>
            <MainSection />
            <WitcherSection />
        </>
    )
}

export default MainPage