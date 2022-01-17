import { languageAction } from "../../../redux/actions/goodsActions";
import { useDispatch, useSelector } from "react-redux";
import flagR from "./img/FlagRu.jpg";
import flagU from "./img/FlagUa.jpg";
import styles from "./Language.module.scss";

export default function Language() {
  const dispatch = useDispatch();
  const language = useSelector((store) => {
    return store.languageReducer;
  });

  const languageHandler = (e) => {
    localStorage.setItem("lang", e.target.name);
    dispatch(languageAction(e.target.name));
  };

  return (
    <div className={styles.block}>
      <span className={language === "rus" ? styles.enabled : styles.disabled}>
        <img
          name="rus"
          src={flagR}
          onClick={languageHandler}
          alt="флаг россии"
        ></img>
      </span>
      <span className={language === "ukr" ? styles.enabled : styles.disabled}>
        <img
          name="ukr"
          src={flagU}
          onClick={languageHandler}
          alt="флаг Украины"
        ></img>
      </span>
    </div>
  );
}
