import { createReducer } from "@reduxjs/toolkit";
import { getGoodById } from "../actions/goodsActions";

export const goodByIdReducer = createReducer(
  {},
  {
    [getGoodById.fulfilled]: (state, { payload }) => {
      return payload;
    },
  }
);
