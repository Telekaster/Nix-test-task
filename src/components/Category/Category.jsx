import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getCategoryById } from "../../redux/actions/goodsActions";
import { backURL } from "../../services/api";
import styles from "./Category.module.scss";

export default function Category({ changeId, categoryHandler }) {
  const dispatch = useDispatch();

  const url = document.location.pathname;
  const id = url.split("/")[2];

  useEffect(() => {
    dispatch(getCategoryById(id));
  }, [dispatch, changeId, id]);

  const category = useSelector((store) => {
    return store.categoryByIdReducer;
  });

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{category.name}</h2>
      {category.subCategories && (
        <ul>
          {category.subCategories.map((subcategory) => {
            return (
              <li>
                <Link
                  to={`/category/${subcategory._id}`}
                  className={styles.link_subcat}
                  id={subcategory._id}
                  onClick={categoryHandler}
                >
                  {subcategory.name}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
      <ul className={styles.list}>
        {category.goods?.map((good) => {
          return (
            <li className={styles.item} key={good._id}>
              <Link
                to={`/good/${good._id}`}
                className={styles.link}
                id={good._id}
              >
                <img
                  className={styles.image}
                  src={`${backURL}/${good.images[0].url}`}
                  alt={good.name}
                ></img>
                <h3 className={styles.price}>{good.price} ₴</h3>
                <p className={styles.text}>{good.name}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
