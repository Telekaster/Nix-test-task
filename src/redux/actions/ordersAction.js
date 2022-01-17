import { createAsyncThunk } from "@reduxjs/toolkit";
import { gql } from "../../services/api";

export const getOrdersAction = createAsyncThunk("order/getAll", async () => {
  const response = await gql(
    `query orders {OrderFind(query:"[{}]"){_id total orderGoods {price count total good{name}}}}`
  );
  return response;
});

export const orderAction = createAsyncThunk(
  "order/make",
  async (orderGoods) => {
    const response = await gql(
      `mutation newOrder($order:OrderInput){OrderUpsert(order:$order){ _id total  }}`,
      { order: { orderGoods } }
    );
    return response;
  }
);
