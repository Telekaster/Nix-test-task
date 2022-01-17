import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getGoodById } from "../../redux/actions/goodsActions";
import {
  addToCartAction,
  totalGoodsAction,
  addToTotalPriceAction,
} from "../../redux/actions/cartActions";
import { useNavigate } from "react-router-dom";
import { backURL } from "../../services/api";
import Notiflix from "notiflix";
import styles from "./Good.module.scss";

export default function Good() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const url = document.location.pathname;
  const id = url.split("/")[2];

  useEffect(() => {
    dispatch(getGoodById(id));
  }, [dispatch, id]);

  const good = useSelector((store) => {
    return store.goodByIdReducer;
  });

  const count = useSelector((store) => {
    return store.countReducer;
  });

  const language = useSelector((store) => {
    return store.languageReducer;
  });

  const counter = () => {
    dispatch(totalGoodsAction(count + 1));
  };

  const addToCart = (good) => {
    if (localStorage.getItem("auth")) {
      dispatch(addToTotalPriceAction(good.price));
      dispatch(addToCartAction(good));
      counter();
      language === "rus" && Notiflix.Notify.success("Товар добален в корзину");
      language === "ukr" && Notiflix.Notify.success("Товар доданий до кошика");
    } else {
      language === "rus" &&
        Notiflix.Notify.warning("Войдите в Вашу учётную запись");
      language === "ukr" &&
        Notiflix.Notify.warning("Увійдіть до Вашого облікового запису");
      navigate("/login");
    }
  };

  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={() => navigate(-1)}>
        {language === "rus" &&
          good.categories &&
          `Назад в категорию ${good.categories[0].name}`}
        {language === "ukr" &&
          good.categories &&
          `Назад до категорії ${good.categories[0].name}`}
      </button>

      <h2 className={styles.title}>{good?.name}</h2>

      <span className={styles.title}>4.9</span>
      <span>
        <svg
          className={styles.icon_star}
          width="15"
          height="25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#a)">
            <path
              d="m12.893 4.77-3.44-.5-1.538-3.103a.756.756 0 0 0-1.352 0L5.025 4.27l-3.44.5a.75.75 0 0 0-.418 1.279l2.49 2.414-.589 3.41c-.106.617.546 1.078 1.093.79l3.078-1.61 3.078 1.61c.546.286 1.199-.173 1.093-.79l-.59-3.41 2.49-2.414a.75.75 0 0 0-.417-1.28Zm-3.285 3.3.558 3.243-2.927-1.53-2.928 1.53.559-3.244L2.5 5.772 5.774 5.3l1.465-2.953 1.465 2.953 3.273.473L9.608 8.07Z"
              fill="#000"
            />
            <path
              d="M7.227 2.892 5.943 5.475l-2.872.418 2.093 2.05-.52 2.828 2.583-1.327 2.584 1.327-.462-2.828 2.063-2.05-2.886-.418-1.299-2.583Z"
              fill="url(#b)"
            />
          </g>
          <defs>
            <linearGradient
              id="b"
              x1="-1.569"
              y1="-2.58"
              x2="12.971"
              y2="-.752"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#F64D4D" />
              <stop offset="1" stop-color="#4D5EF6" />
            </linearGradient>
            <clipPath id="a">
              <path
                fill="#fff"
                transform="translate(.456 .75)"
                d="M0 0h13.565v12H0z"
              />
            </clipPath>
          </defs>
        </svg>
      </span>

      <div className={styles.block}>
        <div>
          {good.images && (
            <img
              className={styles.image}
              src={`${backURL}/${good?.images[0].url}`}
              alt={good.name}
            ></img>
          )}
        </div>

        <div className={styles.text_block}>
          <p className={styles.price}>{`${good.price} грн.`}</p>
          <p className={styles.description}>{good.description}</p>

          <button
            className={styles.cart_button}
            onClick={() => addToCart(good)}
          >
            {language === "rus" && "В корзину"}
            {language === "ukr" && "В кошик"}
          </button>
        </div>
      </div>
    </div>
  );
}
