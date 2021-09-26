import { FC } from "react";
import MainSection from "../../components/MainSection/MainSection";
import ModalPoliticsAndPrivacy from "../../components/ModalPoliticsAndPrivacy/ModalPoliticsAndPrivacy";
import WitcherSection from "../../components/WitcherSection/WitcherSection";
import "./MainPage.scss";

const MainPage: FC = () => {
  return (
    <main>
      <MainSection />
      <WitcherSection />
      <ModalPoliticsAndPrivacy />
    </main>
  );
};

export default MainPage;
