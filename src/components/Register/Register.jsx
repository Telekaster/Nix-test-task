import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { gql } from "../../services/api";
import styles from "./Register.module.scss";
import logo from "../Header/img/logo.png";
import visible from "../Login/img/visible.png";
import hide from "../Login/img/hide.png";
import Notiflix from "notiflix";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [visibility, setVisibility] = useState(false);
  const navigate = useNavigate();
  const language = useSelector((store) => {
    return store.languageReducer;
  });

  const visibilityHandler = () => {
    setVisibility((visibility) => !visibility);
  };

  async function registerAction(login, password) {
    const response = await gql(
      `mutation reg($login:String, $password:String) {UserUpsert(user: {login:$login,password: $password,nick:$login}) {_id login nick}}`,
      { login, password }
    );
    if (response) {
      language === "rus" &&
        Notiflix.Notify.success(
          `Регистрация успешна, введите ваш логин и пароль для входа`
        );
      language === "ukr" &&
        Notiflix.Notify.success(
          `Реєстрація успішна, введіть ваш логін та пароль для входу`
        );
      navigate("/login");
    } else {
      language === "rus" && Notiflix.Notify.warning("Ошибка регистрации");
      language === "ukr" && Notiflix.Notify.warning("Помилка реєстрації");
    }
  }

  const verification = (email, password) => {
    if (email.length <= 1) {
      language === "rus" &&
        Notiflix.Notify.warning(
          "Логин должен быть длиной более одного символа"
        );
      language === "ukr" &&
        Notiflix.Notify.warning(
          "Логін має бути довжиною більше одного символу"
        );
    } else if (password.length <= 1) {
      language === "rus" &&
        Notiflix.Notify.warning(
          "Пароль должен быть длиной более одного символа"
        );
      language === "ukr" &&
        Notiflix.Notify.warning(
          "Пароль має бути довжиною більше одного символу"
        );
    } else if (passwordConfirm !== password) {
      language === "rus" && Notiflix.Notify.warning("Пароли не совпадают");
      language === "ukr" && Notiflix.Notify.warning("Паролі не співпадають");
    } else {
      registerAction(email, password);
    }
  };

  const inputHandler = (e) => {
    switch (e.target.name) {
      case "email":
        setEmail(e.target.value);
        break;
      case "password":
        setPassword(e.target.value);
        break;
      case "passwordConfirm":
        setPasswordConfirm(e.target.value);
        break;
      case "submit":
        verification(email, password, passwordConfirm);
        break;

      default:
        break;
    }
  };

  useEffect(() => {
    if (localStorage.getItem("auth")) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <div className={styles.container}>
      <div className={styles.block}>
        <h2 className={styles.text}>
          {language === "rus" && "Регистрация нового пользователя"}{" "}
          {language === "ukr" && "Реєстрація нового користувача"}
        </h2>

        <img className={styles.logo} src={logo} alt="логотип" />

        <form className={styles.form} autoComplete="on">
          <input
            name="email"
            className={styles.input}
            type="text"
            placeholder="E-Mail"
            onChange={inputHandler}
            value={email}
          />
          <input
            name="password"
            className={styles.input}
            type={!visibility ? "password" : "text"}
            placeholder="Password"
            onChange={inputHandler}
            value={password}
          />

          {!visibility ? (
            <button
              className={styles.button_visible}
              type="button"
              onClick={visibilityHandler}
            >
              <img
                className={styles.button_image}
                src={visible}
                alt="сделать пароль видимый"
              />
            </button>
          ) : (
            <button
              className={styles.button_visible}
              type="button"
              onClick={visibilityHandler}
            >
              <img
                className={styles.button_image}
                src={hide}
                alt="сделать пароль невидимый"
              />
            </button>
          )}
          {visibility ? (
            <p className={styles.warning_text}>
              {language === "rus" && "Для продолжения пароль должен быть скрыт"}
              {language === "ukr" &&
                "Для продовження пароль має бути прихований"}
            </p>
          ) : (
            <input
              name="passwordConfirm"
              className={styles.input}
              type="password"
              placeholder="Password confirmation"
              onChange={inputHandler}
              value={passwordConfirm}
            />
          )}

          <button
            name="submit"
            className={styles.login_button}
            type="button"
            onClick={inputHandler}
            disabled={email === "" || (password === "" && "disabled")}
          >
            {language === "rus" && "Зарегистрироваться"}{" "}
            {language === "ukr" && "Зареєструватись"}
          </button>
        </form>
      </div>
    </div>
  );
}
