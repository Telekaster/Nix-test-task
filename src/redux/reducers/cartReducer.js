import { createReducer } from "@reduxjs/toolkit";

import {
  addToCartAction,
  removeOneFromCartAction,
  removeGoodAction,
  totalGoodsAction,
  addToTotalPriceAction,
  removeFromTotalPriceAction,
  cleanCartAction,
} from "../actions/cartActions";

export const cartReducer = createReducer(
  {},
  {
    [addToCartAction]: (state, { payload }, count = 1) => {
      const { _id } = payload;
      return {
        ...state,
        [payload._id]: {
          good: payload,
          count: count + (state[_id]?.count || 0),
        },
      };
    },
    [removeOneFromCartAction]: (state, { payload }, count) => {
      const { _id } = payload;
      return {
        ...state,
        [payload._id]: {
          good: payload,
          count: state[_id]?.count - 1,
        },
      };
    },
    [removeGoodAction]: (state, { payload }) => {
      const { _id } = payload;

      if (Object.keys(state).includes(_id)) {
        const newState = { ...state };
        delete newState[_id];

        return { ...newState };
      }
    },
    [cleanCartAction]: (state, { payload }) => {
      console.log(payload);
      return (state = payload);
    },
  }
);

export const countReducer = createReducer(0, {
  [totalGoodsAction]: (state, { payload }) => {
    return (state = payload);
  },
});

export const priceReducer = createReducer(0, {
  [addToTotalPriceAction]: (state, { payload }) => {
    return state + payload;
  },
  [removeFromTotalPriceAction]: (state, { payload }) => {
    return state - payload;
  },
});
