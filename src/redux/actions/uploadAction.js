import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { backURL } from "../../services/api";

export const modalControl = createAction("modal/control", (payload) => {
  return { payload: payload };
});

export const uploadImageAction = createAsyncThunk(
  "file/upload",

  async (data) => {
    let fd = new FormData();
    fd.append("photo", data);

    const response = await fetch(`${backURL}/upload`, {
      method: "POST",
      headers: localStorage.auth
        ? { Authorization: "Bearer " + localStorage.auth }
        : {},
      body: fd,
    })
      .then((respose) => {
        return respose.json();
      })
      .then((data) => {
        return data;
      });

    localStorage.setItem("avatar", JSON.stringify(response));
    return response;
  }
);

export const localStorageAvatarAction = createAction(
  "file/localStorage",
  (file) => {
    return { payload: { ...file } };
  }
);
