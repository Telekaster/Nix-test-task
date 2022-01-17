import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import styles from "./AdminButtons.module.scss";
import avatar from "./img/avatar.png";
import { backURL } from "../../../services/api";

export default function AdminButtons({ language }) {
  const name = useSelector((store) => store.loginReducer.login);
  const counter = useSelector((store) => {
    return store.countReducer;
  });

  const avatarNew = useSelector((store) => {
    return store.uploadImageReducer;
  });

  return (
    <div className={styles.block}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <NavLink
            to="/cart"
            className={({ isActive }) =>
              isActive ? styles.link_active : styles.link
            }
          >
            {/* icon_desktop */}
            <svg
              className={styles.icon_desktop}
              width="28"
              height="26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.25 19.067c-.932 0-1.688-.776-1.688-1.734l18.685-1.669c.432-.038.791-.352.895-.784.57-2.385 2.358-9.91 2.358-10.547a.856.856 0 0 0-.844-.866H5.563v-2.6A.856.856 0 0 0 4.718 0H1.344A.856.856 0 0 0 .5.867c0 .478.378.866.844.866h2.531v15.6c0 1.915 1.511 3.467 3.375 3.467h15.255s-.64-.819-.146-.26l.146.26-1.755-1.56-13.5-.173ZM5.562 5.2h20.25l-2.157 8.864L5.562 15.6V5.2Z"
                fill="#000"
              />
              <path
                d="M24.04 22.62c0 1.867-1.473 3.38-3.29 3.38s-3.29-1.513-3.29-3.38 1.473-3.38 3.29-3.38 3.29 1.513 3.29 3.38Zm-4.899 0c0 .912.72 1.652 1.609 1.652.888 0 1.609-.74 1.609-1.652 0-.913-.72-1.652-1.609-1.652-.888 0-1.609.74-1.609 1.652ZM12.144 22.62c0 1.867-1.473 3.38-3.29 3.38-1.818 0-3.291-1.513-3.291-3.38s1.473-3.38 3.29-3.38c1.818 0 3.29 1.513 3.29 3.38Zm-4.9 0c0 .912.72 1.652 1.61 1.652.888 0 1.608-.74 1.608-1.652 0-.913-.72-1.652-1.609-1.652-.888 0-1.608.74-1.608 1.652Z"
                fill="#000"
              />
            </svg>

            {/* icon_tablet */}

            <svg
              className={styles.icon_tablet}
              width="27"
              height="27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.25 19.067c-.932 0-1.688-.776-1.688-1.734l18.685-1.669c.432-.038.791-.352.895-.784.57-2.385 2.358-9.91 2.358-10.547a.856.856 0 0 0-.844-.866H5.563v-2.6A.856.856 0 0 0 4.718 0H1.344A.856.856 0 0 0 .5.867c0 .478.378.866.844.866h2.531v15.6c0 1.915 1.511 3.467 3.375 3.467h15.255s-.64-.819-.146-.26l.146.26-1.755-1.56-13.5-.173ZM5.562 5.2h20.25l-2.157 8.864L5.562 15.6V5.2Z"
                fill="#000"
              />
              <path
                d="M24.04 22.62c0 1.867-1.473 3.38-3.29 3.38s-3.29-1.513-3.29-3.38 1.473-3.38 3.29-3.38 3.29 1.513 3.29 3.38Zm-4.899 0c0 .912.72 1.652 1.609 1.652.888 0 1.609-.74 1.609-1.652 0-.913-.72-1.652-1.609-1.652-.888 0-1.609.74-1.609 1.652ZM12.144 22.62c0 1.867-1.473 3.38-3.29 3.38-1.818 0-3.291-1.513-3.291-3.38s1.473-3.38 3.29-3.38c1.818 0 3.29 1.513 3.29 3.38Zm-4.9 0c0 .912.72 1.652 1.61 1.652.888 0 1.608-.74 1.608-1.652 0-.913-.72-1.652-1.609-1.652-.888 0-1.608.74-1.608 1.652Z"
                fill="#000"
              />
            </svg>

            <p className={styles.text}>
              {language === "rus" && <span>Корзина</span>}
              {language === "ukr" && <span>Кошик</span>}
            </p>
            {localStorage.getItem("auth") && (
              <div className={styles.counter}>
                <p className={styles.counter_text}>{counter}</p>
              </div>
            )}
          </NavLink>
        </li>

        <li className={styles.item}>
          <NavLink
            to={localStorage.getItem("auth") ? "/management/profile" : "/login"}
            className={({ isActive }) =>
              isActive ? styles.admin_active : styles.admin
            }
          >
            <svg
              className={styles.icon_desktop}
              width="22"
              height="26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.2 7.28a7.28 7.28 0 1 1-14.56 0 7.28 7.28 0 0 1 14.56 0Zm-12.813 0a5.533 5.533 0 1 0 11.066 0 5.533 5.533 0 0 0-11.066 0Z"
                fill="#000"
              />
              <path
                d="M21.84 26A10.922 10.922 0 0 0 6.741 15.911 10.92 10.92 0 0 0 0 26h1.744a9.176 9.176 0 0 1 18.352 0h1.744Z"
                fill="#000"
              />
            </svg>

            <svg
              className={styles.icon_tablet}
              width="23"
              height="27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.2 7.28a7.28 7.28 0 1 1-14.56 0 7.28 7.28 0 0 1 14.56 0Zm-12.813 0a5.533 5.533 0 1 0 11.066 0 5.533 5.533 0 0 0-11.066 0Z"
                fill="#000"
              />
              <path
                d="M21.84 26A10.922 10.922 0 0 0 6.741 15.911 10.92 10.92 0 0 0 0 26h1.744a9.176 9.176 0 0 1 18.352 0h1.744Z"
                fill="#000"
              />
            </svg>

            <p className={styles.text}>
              {localStorage.getItem("auth") ? (
                <span>
                  {language === "rus" && "Управление"}{" "}
                  {language === "ukr" && "Керування"}
                </span>
              ) : (
                "Вход"
              )}
            </p>
          </NavLink>
        </li>

        <li className={styles.item}>
          {localStorage.getItem("auth") && (
            <div className={styles.logout_button}>
              <div className={styles.avatar__area}>
                {avatarNew.url ? (
                  <img
                    className={styles.logout_img}
                    src={`${backURL}/${avatarNew.url}`}
                    alt="выйти"
                  />
                ) : (
                  <img className={styles.logout_img} src={avatar} alt="выйти" />
                )}

                <p className={styles.logout_text}> {name}</p>
              </div>
              {/* </button> */}
            </div>
          )}
        </li>
      </ul>
    </div>
  );
}
