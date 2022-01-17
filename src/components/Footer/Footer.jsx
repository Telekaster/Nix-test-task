import { Link } from "react-router-dom";
import styles from "./Footer.module.scss";
import InformationFooter from "./InformationFooter";
import Subscribe from "./Subscribe";
import logoFooter from "./img/logoFooter.png";

export default function Footer() {
  return (
    <div className={styles.back}>
      <div className={styles.container}>
        <div className={styles.block}>
          <InformationFooter />
          <Subscribe />
        </div>
        <div className={styles.author_block}>
          <Link to="/">
            <img src={logoFooter} alt="логотип" className={styles.logo} />
          </Link>
          <p className={styles.author}> &copy; made by OLEG BONDARENKO, 2022</p>
        </div>
      </div>
    </div>
  );
}
