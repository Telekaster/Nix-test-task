import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import styles from "./AdminCategoryList.module.scss";
import categoryIcon from "./img/category_icon.png";
import goodsIcon from "./img/goods_icon.png";
import profileIcon from "./img/profile_icon.png";

export default function AdminCategoryList() {
  const language = useSelector((store) => {
    return store.languageReducer;
  });
  return (
    <aside className={styles.main_block}>
      <ul className={styles.list}>
        <li className={styles.item_1}>
          <div className={styles.button_aside}></div>
          <NavLink
            className={({ isActive }) =>
              isActive ? styles.button_1__active : styles.button_1
            }
            to="/management/profile"
          >
            <img src={profileIcon} className={styles.icon} />
            <div className={styles.border}></div>
            <span className={styles.text}>
              {language === "rus" && "Профиль"}
              {language === "ukr" && "Профіль"}
            </span>
          </NavLink>
        </li>

        <li className={styles.item_2}>
          <div className={styles.button_aside}></div>
          <NavLink
            className={({ isActive }) =>
              isActive ? styles.button_2__active : styles.button_2
            }
            to="/management/categories"
          >
            <img src={categoryIcon} className={styles.icon} />
            <div className={styles.border}></div>
            <span className={styles.text}>
              {language === "rus" && "Категории"}
              {language === "ukr" && "Категорії"}
            </span>
          </NavLink>
        </li>

        <li className={styles.item_3}>
          <div className={styles.button_aside}></div>
          <NavLink
            className={({ isActive }) =>
              isActive ? styles.button_3__active : styles.button_3
            }
            to="/management/goods"
          >
            <img src={goodsIcon} className={styles.icon} />
            <div className={styles.border}></div>
            <span className={styles.text}>
              {language === "rus" && "Товары"}
              {language === "ukr" && "Товари"}
            </span>
          </NavLink>
        </li>
      </ul>
    </aside>
  );
}
