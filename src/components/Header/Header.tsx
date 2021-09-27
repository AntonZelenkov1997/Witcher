import { FC } from "react";
import AppButton from "../AppButton/AppButton";
import styles from "./Header.scss";
import logo from "../../assets/images/logo.png";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

const Header: FC = () => {
  const history = useHistory();

  const goToRequestPage = () => history.push("/request");

  return (
    <header className={styles.Header}>
      <Link to="/">
        <div className={styles.logoContainer}>
          <img className={styles.logo} src={logo} alt="not found" />
        </div>
      </Link>
      <AppButton
        type="secondary"
        title="Подключить подписку"
        onClick={goToRequestPage}
      />
    </header>
  );
};

export default Header;
