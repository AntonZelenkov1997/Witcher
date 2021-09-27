import { FC } from "react";

import styles from "./HeaderOneLogo.scss";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";

const HeaderOneLogo: FC = () => {
  return (
    <header className={styles.headerOneLogo}>
      <Link to="/">
        <div className={styles.wrapperLogo}>
          <img src={logo} alt="Not Found" className={styles.logo} />
        </div>
      </Link>
    </header>
  );
};

export default HeaderOneLogo;
