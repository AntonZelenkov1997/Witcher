import { FC } from "react";
import Header from "../../components/Header/Header";
import MainSection from "../../components/MainSection/MainSection";
import WitcherSection from "../../components/WitcherSection/WitcherSection";
import "./MainPage.scss";

const MainPage: FC = () => {
  return (
    <>
    <Header />
    <main>
      <MainSection />
      <WitcherSection />
    </main>
    </>
  );
};

export default MainPage;
