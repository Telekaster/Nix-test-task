import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import styles from "./InformationFooter.module.scss";

export default function InformationFooter() {
  const language = useSelector((store) => {
    return store.languageReducer;
  });

  return (
    <div className={styles.lists}>
      {language === "rus" && (
        <>
          <div>
            <p className={styles.title}>Покупателям</p>
            <ul>
              <li className={styles.item}>
                <Link to="#" className={styles.link}>
                  Как это работает
                </Link>
              </li>
              <li className={styles.item}>
                <Link to="#" className={styles.link}>
                  Защита покупателя
                </Link>
              </li>
              <li className={styles.item}>
                <Link to="#" className={styles.link}>
                  Условия оплаты
                </Link>
              </li>
              <li className={styles.item}>
                <Link to="#" className={styles.link}>
                  Условия использования
                </Link>
              </li>
              <li className={styles.item}>
                <Link to="#" className={styles.link}>
                  Регистрация аккаунта
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className={styles.title}>О компании</p>
            <ul>
              <li className={styles.item}>
                <Link to="#" className={styles.link}>
                  О PlaceMik
                </Link>
              </li>
              <li className={styles.item}>
                <Link to="#" className={styles.link}>
                  Новости
                </Link>
              </li>
              <li className={styles.item}>
                <Link to="#" className={styles.link}>
                  Часто задаваемые вопросы
                </Link>
              </li>
              <li className={styles.item}>
                <Link to="#" className={styles.link}>
                  Служба поддержки
                </Link>
              </li>
              <li className={styles.item}>
                <Link to="#" className={styles.link}>
                  Сообщить о нарушении авторских прав
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className={styles.title}>Поставщикам</p>
            <ul>
              <li className={styles.item}>
                <Link to="#" className={styles.link}>
                  Как стать продавцом
                </Link>
              </li>
              <li className={styles.item}>
                <Link to="#" className={styles.link}>
                  Правила участия
                </Link>
              </li>
              <li className={styles.item}>
                <Link to="#" className={styles.link}>
                  Личный кабинет продавца
                </Link>
              </li>
            </ul>
          </div>
        </>
      )}

      {language === "ukr" && (
        <>
          <div>
            <p className={styles.title}>Покупцям</p>
            <ul>
              <li className={styles.item}>
                <Link to="#" className={styles.link}>
                  Як це працює
                </Link>
              </li>
              <li className={styles.item}>
                <Link to="#" className={styles.link}>
                  Захист покупця
                </Link>
              </li>
              <li className={styles.item}>
                <Link to="#" className={styles.link}>
                  Умови оплати
                </Link>
              </li>
              <li className={styles.item}>
                <Link to="#" className={styles.link}>
                  Умови використання
                </Link>
              </li>
              <li className={styles.item}>
                <Link to="#" className={styles.link}>
                  Реєстрація акаунту
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className={styles.title}>Про компанію</p>
            <ul>
              <li className={styles.item}>
                <Link to="#" className={styles.link}>
                  О PlaceMik
                </Link>
              </li>
              <li className={styles.item}>
                <Link to="#" className={styles.link}>
                  Новини
                </Link>
              </li>
              <li className={styles.item}>
                <Link to="#" className={styles.link}>
                  Часті запитання
                </Link>
              </li>
              <li className={styles.item}>
                <Link to="#" className={styles.link}>
                  Служба підтримки
                </Link>
              </li>
              <li className={styles.item}>
                <Link to="#" className={styles.link}>
                  Повідомити про порушення авторських прав
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className={styles.title}>Постачальникам</p>
            <ul>
              <li className={styles.item}>
                <Link to="#" className={styles.link}>
                  Як стати продавцем
                </Link>
              </li>
              <li className={styles.item}>
                <Link to="#" className={styles.link}>
                  Правила участі
                </Link>
              </li>
              <li className={styles.item}>
                <Link to="#" className={styles.link}>
                  Особистий кабінет продавця
                </Link>
              </li>
            </ul>
          </div>
        </>
      )}
    </div>
  );
}
