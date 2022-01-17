import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { gql } from "../../services/api";

export const languageAction = createAction("language", (language) => {
  return {
    payload: language,
  };
});

export const getAllCategories = createAsyncThunk(
  "categories/getCategories",
  async () => {
    const response = await gql(
      `query subCats {CategoryFind(query: "[{}]") {_id name subCategories {_id name subCategories {_id name}}}}`
    );
    return response;
  }
);

export const getCategoryById = createAsyncThunk(
  "categories/categoryById",
  async (_id) => {
    const response = await gql(
      `query catById($q: String){CategoryFindOne(query: $q){_id name goods {_id name price images {url}} subCategories {_id name}}}`,
      { q: JSON.stringify([{ _id }]) }
    );
    return response;
  }
);

export const getGoodById = createAsyncThunk("goods/goodById", async (_id) => {
  const response = await gql(
    `query findGood ($query:String) {GoodFindOne (query:$query) {_id name price description categories {name _id} images {url text}}}`,
    { query: JSON.stringify([{ _id }]) }
  );
  return response;
});
