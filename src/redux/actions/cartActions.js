import { createAction } from "@reduxjs/toolkit";

export const addToCartAction = createAction("cart/add", (good) => {
  console.log(good);
  if (localStorage.getItem("cart")) {
    const arr = JSON.parse(localStorage.getItem("cart"));
    arr.push(good);
    localStorage.setItem("cart", JSON.stringify(arr));
  }
  return { payload: good };
});

export const removeOneFromCartAction = createAction(
  "cart/removeOne",
  (good) => {
    return { payload: good };
  }
);

export const removeGoodAction = createAction("cart/remove", (good) => {
  return { payload: good };
});

export const totalGoodsAction = createAction("cart/totalGoods", (count) => {
  return { payload: count };
});

export const addToTotalPriceAction = createAction(
  "cart/totalPriceIncrement",
  (price) => {
    return { payload: price };
  }
);

export const removeFromTotalPriceAction = createAction(
  "cart/totalPriceDecrement",
  (price) => {
    return { payload: price };
  }
);

export const cleanCartAction = createAction("cart/clean", () => {
  return { payload: {} };
});
