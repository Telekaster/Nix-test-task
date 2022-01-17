import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getOrdersAction } from "../../redux/actions/ordersAction";
import styles from "./Orders.module.scss";
import { useNavigate } from "react-router-dom";

export default function Orders() {
  const navigate = useNavigate();
  const orders = useSelector((store) => {
    return store.getOrdersReducer;
  });
  const language = useSelector((store) => {
    return store.languageReducer;
  });

  const dispatch = useDispatch();

  let counter = 0;

  useEffect(() => {
    dispatch(getOrdersAction());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <button className={styles.button_back} onClick={() => navigate(-1)}>
        {language === "rus" && "Назад к профилю"}
        {language === "ukr" && "Назад до профілю"}
      </button>
      <h2 className={styles.title}>
        {language === "rus" && "Мои заказы"}
        {language === "ukr" && "Мої замовлення"}
      </h2>
      <div className={styles.block}>
        {orders.length === 0 ? (
          <p className={styles.info}>
            {language === "rus" && "У Вас пока нет заказов"}
            {language === "ukr" && "У Вашому кошику поки що порожньо"}
          </p>
        ) : (
          <ul>
            {orders.map((order) => {
              counter += 1;

              const name = order.orderGoods[0]?.good.name;
              const _id = order._id;
              const count = order.orderGoods[0]?.count;
              const price = order.orderGoods[0]?.total;

              return (
                <li className={styles.item} key={_id}>
                  <div className={styles.text_block}>
                    <p to={`/good/${_id}`} className={styles.text}>
                      {counter}. {name} <span>{count} шт.</span>{" "}
                      <span> Стоимость заказа {price} грн.</span>
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
}
