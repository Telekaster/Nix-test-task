import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { backURL } from "../../../services/api";
import { modalControl } from "../../../redux/actions/uploadAction";
import styles from "./Profile.module.scss";
import avatar from "../../Header/AdminButtons/img/avatar.png";

export default function Profile() {
  // const name = useSelector((store) => store.loginReducer);
  // console.log(name);
  const language = useSelector((store) => {
    return store.languageReducer;
  });
  const newAvatar = useSelector((store) => {
    return store.uploadImageReducer;
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function logOut() {
    localStorage.removeItem("auth");
    navigate("/");
  }

  return (
    <div className={styles.main_block}>
      <h2 className={styles.name}>
        {language === "rus" && "Здравствуйте"}
        {/* {language === "ukr" && "Вітаю"}, {name} */}
      </h2>
      <div className={styles.avatar_block}>
        {newAvatar.url ? (
          <img
            src={`${backURL}/${newAvatar.url}`}
            alt="аватар"
            className={styles.avatar_img}
          />
        ) : (
          <img src={avatar} alt="аватар" />
        )}
      </div>
      <button
        className={styles.avatar__text}
        type="button"
        onClick={() => {
          dispatch(modalControl(true));
        }}
      >
        {language === "rus" && "Редактировать фото профиля"}
        {language === "ukr" && "Редагувати фото профілю"}
      </button>
      <ul className={styles.profile_menu__list}>
        <li className={styles.profile_menu__item}>
          <Link to="/orders" className={styles.profile_menu__link}>
            {language === "rus" && "Мои заказы"}
            {language === "ukr" && "Мої замовлення"}
          </Link>
          <button className={styles.profile_menu__link} onClick={logOut}>
            {language === "rus" && "Выйти из профиля"}
            {language === "ukr" && "Вийти з профілю"}
          </button>
        </li>
      </ul>
    </div>
  );
}
