import { createReducer } from "@reduxjs/toolkit";
import { getOrdersAction, orderAction } from "../actions/ordersAction";

export const getOrdersReducer = createReducer("", {
  [getOrdersAction.fulfilled]: (state, { payload }) => {
    return (state = payload);
  },
});

export const makeOrderReducer = createReducer(
  {},
  {
    [orderAction]: (state, { payload }) => {
      return (state = payload);
    },
  }
);
