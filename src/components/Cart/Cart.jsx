import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { backURL } from "../../services/api";
import { Link } from "react-router-dom";
import { orderAction } from "../../redux/actions/ordersAction";
import {
  addToCartAction,
  removeOneFromCartAction,
  removeGoodAction,
  totalGoodsAction,
  addToTotalPriceAction,
  removeFromTotalPriceAction,
  cleanCartAction,
} from "../../redux/actions/cartActions";
import styles from "./Cart.module.scss";
import minus from "./img/minus.png";
import plus from "./img/plus.png";
import Notiflix from "notiflix";

export default function Cart() {
  const goods = useSelector((store) => {
    return store.cartReducer;
  });
  const language = useSelector((store) => {
    return store.languageReducer;
  });

  const total = useSelector((store) => {
    return store.countReducer;
  });

  const totalPrice = useSelector((store) => {
    return store.priceReducer;
  });
  const dispatch = useDispatch();

  const allGoods = Object.entries(goods);

  const counterIncrement = (good) => {
    dispatch(addToCartAction(good));
    dispatch(addToTotalPriceAction(good.price));
  };

  const counterDecrement = (good) => {
    dispatch(removeOneFromCartAction(good));
    dispatch(removeFromTotalPriceAction(good.price));
  };

  const deleteGood = (good, count) => {
    dispatch(removeFromTotalPriceAction(good.price * count));
    dispatch(removeGoodAction(good));
  };

  async function makeOrder(goods) {
    const orderGoods = Object.entries(goods).map((item) => {
      console.log(item);
      const _id = item[1].good._id;
      const count = item[1].count;
      return { good: { _id }, count };
    });

    dispatch(orderAction(orderGoods));

    language === "rus" && Notiflix.Notify.success(`Спасибо за покупку`);
    language === "ukr" && Notiflix.Notify.success(`Дякую за покупку`);
    dispatch(cleanCartAction());
  }

  useEffect(() => {
    let totalGoods = 0;
    let totalPrice = 0;
    allGoods.map((good) => {
      totalGoods += good[1].count;
      const price = good[1].good.price * totalGoods;
      return (totalPrice += price);
    });
    dispatch(totalGoodsAction(totalGoods));
  }, [allGoods, dispatch]);

  return (
    <div className={styles.container}>
      <div className={styles.block}>
        <div className={styles.title_block}>
          {/* <h2 className={styles.title}>Корзина</h2> */}
        </div>
        {allGoods.length === 0 ? (
          <p className={styles.info}>
            {language === "rus" && "В Вашей корзине пока пусто"}{" "}
            {language === "ukr" && "У Вашому кошику поки що порожньо"}
          </p>
        ) : (
          <>
            <ul>
              {allGoods.map((good) => {
                const { count } = good[1];
                return (
                  <li className={styles.item} key={good[0]}>
                    <div className={styles.image_block}>
                      <img
                        className={styles.image}
                        src={`${backURL}/${good[1].good.images[0].url}`}
                        alt="товар"
                      />
                    </div>
                    <div className={styles.text_block}>
                      <Link
                        to={`/good/${good[1].good._id}`}
                        className={styles.text_link}
                      >
                        {good[1].good.name}
                      </Link>
                    </div>

                    <button
                      className={
                        count === 1
                          ? styles.counter_button_hidden
                          : styles.counter_button_minus
                      }
                      type="button"
                      disabled={count === 1 ? true : false}
                      onClick={() => {
                        counterDecrement(good[1].good);
                      }}
                    >
                      <img
                        className={styles.counter_image}
                        src={minus}
                        alt="минус"
                      />
                    </button>

                    <input className={styles.input} type="text" value={count} />

                    <button
                      className={styles.counter_button_plus}
                      type="button"
                      onClick={() => counterIncrement(good[1].good)}
                    >
                      <img
                        className={styles.counter_image}
                        src={plus}
                        alt="плюс"
                      />
                    </button>
                    <div className={styles.price_block}>
                      <p className={styles.price}>{`${
                        good[1].good.price * count
                      } грн`}</p>
                    </div>

                    <button
                      className={styles.delete_button}
                      type="button"
                      onClick={() => deleteGood(good[1].good, good[1].count)}
                    >
                      {language === "rus" && "Удалить"}
                      {language === "ukr" && "Видалити"}
                    </button>
                  </li>
                );
              })}
            </ul>
            <div className={styles.total_block}>
              <p className={styles.text}>
                {language === "rus" && "Всего"} {language === "ukr" && "Всього"}
                <span className={styles.total}>{total}</span>
                {language === "rus" && "товаров на сумму:"}
                {language === "ukr" && "товарiв на суму:"}
                <span className={styles.total_price}>{totalPrice}</span>
                грн.
              </p>
              <button
                type="button"
                className={styles.order_button}
                onClick={() => makeOrder(goods)}
              >
                {language === "rus" && "Оформить заказ"}
                {language === "ukr" && "Оформити замовлення"}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
