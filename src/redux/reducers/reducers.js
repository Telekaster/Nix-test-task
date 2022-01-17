import { combineReducers } from "redux";
import { categoriesReducer, categoryByIdReducer } from "./categoriesReducer";
import { cartReducer, countReducer, priceReducer } from "./cartReducer";
import { getOrdersReducer, makeOrderReducer } from "./ordersReducer";
import { goodByIdReducer } from "./goodReducer";

import {
  languageReducer,
  loadingReducer,
  loginReducer,
  uploadImageReducer,
  modalReducer,
} from "./servicesReducer";

export const reducers = combineReducers({
  categoriesReducer,
  categoryByIdReducer,
  cartReducer,
  countReducer,
  priceReducer,
  getOrdersReducer,
  makeOrderReducer,
  goodByIdReducer,
  languageReducer,
  loadingReducer,
  loginReducer,
  uploadImageReducer,
  modalReducer,
});
