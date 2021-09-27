import { FC } from "react";
import HeaderOneLogo from "../../components/HeaderOneLogo/HeaderOneLogo";
import RequestFormSection from "../../components/RequestFormSection/RequestFormSection";
import styles from "./RequestPage.scss";

const RequestPage: FC = () => {
  return (
    <>
      <HeaderOneLogo />
      <main className={styles.requestPage}>
        <RequestFormSection />
      </main>
    </>
  );
};

export default RequestPage;
