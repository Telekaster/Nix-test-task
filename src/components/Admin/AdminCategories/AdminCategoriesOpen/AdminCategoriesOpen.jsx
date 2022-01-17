import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import styles from "./AdminCategoriesOpen.module.scss";

export default function AdminCategoriesOpen() {
  const language = useSelector((store) => store.languageReducer);
  const categories = useSelector((store) => {
    return store.categoriesReducer;
  });
  return (
    <div className={styles.main_block}>
      <h3 className={styles.title_text}>
        {language === "rus" && "Добавить категорию"}
        {language === "ukr" && "Додати категорію"}
      </h3>
      <div className={styles.input_block}>
        <input type="text" className={styles.input} />
        <button type="button" className={styles.input_button}>
          {language === "rus" && "Добавить"}
          {language === "ukr" && "Додати"}
        </button>
      </div>
      <div className={styles.categories_block}>
        <div className={styles.view}>
          <div className={styles.list_block}>
            <h3 className={styles.title_text}>
              {language === "rus" && "Все категории:"}
              {language === "ukr" && "Всі категорії:"}
            </h3>
            <ul className={styles.list}>
              {categories.map((category) => {
                return (
                  <li className={styles.item} key={category._id}>
                    <NavLink
                      className={({ isActive }) =>
                        isActive
                          ? styles.profile_menu__link_active
                          : styles.profile_menu__link
                      }
                      to={`/management/categories/${category._id}`}
                      name={category.name}
                      id={category._id}
                      //   onClick={categoryHandler}
                    >
                      {category.name}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className={styles.settings__main_block}>
            <h3 className={styles.settings__title}>
              {language === "rus" && "Редактировать категорию"}
              {language === "ukr" && "Редагувати категорію"}
            </h3>
            <input
              className={styles.setting__input}
              type="text"
              placeholder={
                (language === "rus" && "Новое имя категории") ||
                (language === "ukr" && "Нове ім'я категорії")
              }
            />
            <button type="button" className={styles.settings__accept_button}>
              {language === "rus" && "Применить"}
              {language === "ukr" && "Застосувати"}
            </button>
            <div className={styles.delete__area}>
              <button type="button" className={styles.settings__delete_button}>
                {language === "rus" && "Удалить категорию"}
                {language === "ukr" && "Видалити категорію"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
