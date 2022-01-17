import { createReducer } from "@reduxjs/toolkit";
import { languageAction, getAllCategories } from "../actions/goodsActions";
import {
  loginAction,
  loginFromLocalStorageAction,
} from "../actions/loginActions";
import {
  uploadImageAction,
  modalControl,
  localStorageAvatarAction,
} from "../actions/uploadAction";

export const languageReducer = createReducer("rus", {
  [languageAction]: (state, { payload }) => {
    return (state = payload);
  },
});

export const loadingReducer = createReducer(false, {
  [getAllCategories.pending]: (state) => {
    return (state = true);
  },
  [getAllCategories.fulfilled]: (state) => {
    return (state = false);
  },
  [getAllCategories.rejected]: (state) => {
    return (state = false);
  },
});

export const loginReducer = createReducer(
  {},
  {
    [loginAction.fulfilled]: (state, { payload }) => {
      return (state = payload.payload);
    },
    [loginFromLocalStorageAction]: (state, { payload }) => {
      return (state = payload);
    },
  }
);

export const modalReducer = createReducer(false, {
  [modalControl]: (state, { payload }) => {
    return (state = payload);
  },
});

export const uploadImageReducer = createReducer(
  {},
  {
    [uploadImageAction.fulfilled]: (state, { payload }) => {
      return (state = { ...payload });
    },
    [localStorageAvatarAction]: (state, { payload }) => {
      return (state = payload);
    },
  }
);
