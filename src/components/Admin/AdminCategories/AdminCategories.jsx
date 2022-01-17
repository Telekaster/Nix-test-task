import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import styles from "./AdminCategories.module.scss";

export default function AdminCategories() {
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
        <div>
          <h3 className={styles.title_text}>
            {language === "rus" && "Все категории:"}
            {language === "ukr" && "Всі категорії:"}
          </h3>
          <div className={styles.list_block}>
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
        </div>
      </div>
    </div>
  );
}
