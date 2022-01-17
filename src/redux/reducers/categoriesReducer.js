import { createReducer } from "@reduxjs/toolkit";
import { getAllCategories, getCategoryById } from "../actions/goodsActions";

export const categoriesReducer = createReducer([], {
  [getAllCategories.fulfilled]: (state, { payload }) => {
    return [...payload];
  },
});

export const categoryByIdReducer = createReducer(
  {},
  {
    [getCategoryById.fulfilled]: (state, { payload }) => {
      return payload;
    },
  }
);
