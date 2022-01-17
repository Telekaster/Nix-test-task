import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginAction } from "../../redux/actions/loginActions";
import styles from "./Login.module.scss";
import logo from "../Header/img/logo.png";
import visible from "./img/visible.png";
import hide from "./img/hide.png";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visibility, setVisibility] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const language = useSelector((store) => {
    return store.languageReducer;
  });
  const token = useSelector((store) => store.loginReducer);

  const visibilityHandler = () => {
    setVisibility((visibility) => !visibility);
  };

  const inputHandler = (e) => {
    switch (e.target.name) {
      case "email":
        setEmail(e.target.value);
        break;
      case "password":
        setPassword(e.target.value);
        break;
      case "submit":
        dispatch(loginAction({ email, password }));

        break;

      default:
        break;
    }
  };

  useEffect(() => {
    if (token.token) {
      navigate("/");
    }
  }, [navigate, token.token]);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      dispatch(loginAction({ email, password }));
    }
  });

  return (
    <div className={styles.container}>
      <div className={styles.block}>
        <h2 className={styles.text}>
          {language === "rus" &&
            "Чтобы совершать покупки, пожалуйста, войдите в Вашу учётную запись"}
          {language === "ukr" &&
            "Щоб робити покупки, будь ласка, увійдіть до Вашого облікового запису"}
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

          <button
            name="submit"
            className={styles.login_button}
            type="button"
            onClick={inputHandler}
            disabled={email === "" || (password === "" && "disabled")}
          >
            {language === "rus" && "Войти"} {language === "ukr" && "Увiйти"}
          </button>
        </form>

        <span className={styles.register_text}>
          {language === "rus" && "У вас нет аккаунта? "}
          {language === "ukr" && "У вас немає облікового запису?"}
        </span>

        <Link to="/register" className={styles.register_bold}>
          {language === "rus" && "Зарегистрироваться"}
          {language === "ukr" && "Зареєструватись"}
        </Link>
      </div>
    </div>
  );
}
