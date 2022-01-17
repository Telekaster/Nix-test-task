import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styles from "./Header.module.scss";
import InformationRU from "./Information/InformationRU";
import InformationUA from "./Information/InformationUA";
import Language from "./Language";
import Burger from "./Burger";
import logo from "./img/logo.png";
import Search from "./Search";
import AdminButtons from "./AdminButtons";

export default function Header({ handler, open }) {
  const language = useSelector((store) => {
    return store.languageReducer;
  });

  const url = document.location.pathname;

  return (
    <div className={styles.container}>
      <div className={styles.topBlock}>
        {language === "rus" && <InformationRU />}
        {language === "ukr" && <InformationUA />}
        <Language />
      </div>

      <div className={styles.middleBlock}>
        {/* BURGER */}
        {url !== "/login" && url !== " /register " && (
          <Burger handler={handler} open={open} />
        )}

        <Link to="/">
          <img className={styles.logo} src={logo} alt="логотип" />
        </Link>
        <Search language={language} />
        <AdminButtons language={language} />
      </div>
    </div>
  );
}
