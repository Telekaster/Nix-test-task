import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import styles from "./CartMenu.module.scss";

export default function CartMenu() {
  const language = useSelector((store) => {
    return store.languageReducer;
  });
  return (
    <div className={styles.container}>
      <div className={styles.link_block}>
        <div className={styles.cart_link_block}>
          <NavLink
            to="/cart"
            className={({ isActive }) =>
              isActive ? styles.nav_link_active : styles.nav_link
            }
          >
            Корзина
          </NavLink>
        </div>
        {/* <div className={styles.cart_link_block}>
            <NavLink
              to="/orders"
              className={({ isActive }) =>
                isActive ? styles.nav_link_active : styles.nav_link
              }
            >
              {language === "rus" && "Мои заказы"}
              {language === "ukr" && "Мої замовлення"}
            </NavLink>
          </div> */}
      </div>
    </div>
  );
}
