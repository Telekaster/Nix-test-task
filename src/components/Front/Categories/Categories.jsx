import styles from "./Categories.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { getAllCategories } from "../../../redux/actions/goodsActions";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";

export default function Categories({ open, categoryHandler }) {
  const dispatch = useDispatch();
  const language = useSelector((store) => {
    return store.languageReducer;
  });
  const loading = useSelector((store) => {
    return store.loadingReducer;
  });
  const categories = useSelector((store) => {
    return store.categoriesReducer;
  });

  useEffect(() => {
    dispatch(getAllCategories());
  }, [dispatch]);

  return (
    <div className={!open ? styles.block : styles.block_tablet}>
      <div className={styles.title_block}>
        <svg
          className={styles.title_icon}
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_111_18813)">
            <path
              d="M11.7678 0.73223C12.7441 1.70854 12.7441 3.29145 11.7678 4.26776C10.7915 5.24407 9.20857 5.24407 8.23226 4.26776C7.25595 3.29145 7.25595 1.70854 8.23226 0.73223C9.20853 -0.244077 10.7914 -0.244077 11.7678 0.73223Z"
              fill="white"
            />
            <path
              d="M11.7678 8.23223C12.7441 9.20854 12.7441 10.7915 11.7678 11.7678C10.7915 12.7441 9.20857 12.7441 8.23226 11.7678C7.25595 10.7915 7.25595 9.20854 8.23226 8.23223C9.20853 7.25592 10.7914 7.25592 11.7678 8.23223Z"
              fill="white"
            />
            <path
              d="M11.7678 15.7322C12.7441 16.7085 12.7441 18.2915 11.7678 19.2678C10.7915 20.2441 9.20857 20.2441 8.23226 19.2678C7.25595 18.2915 7.25595 16.7085 8.23226 15.7322C9.20853 14.7559 10.7914 14.7559 11.7678 15.7322Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_111_18813">
              <rect width="20" height="20" fill="white" />
            </clipPath>
          </defs>
        </svg>
        {language === "rus" && (
          <span className={styles.title_text}>Категории:</span>
        )}
        {language === "ukr" && (
          <span className={styles.title_text}>Категорії:</span>
        )}
      </div>
      <div className={styles.list_block}>
        {loading && <p>Loading...</p>}
        <ul className={styles.list}>
          {categories.map((category) => {
            return (
              <li className={styles.item} key={category._id}>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? styles.category_link_active
                      : styles.category_link
                  }
                  to={`/category/${category._id}`}
                  name={category.name}
                  id={category._id}
                  onClick={categoryHandler}
                >
                  {category.name}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
