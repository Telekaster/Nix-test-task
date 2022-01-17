import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { gql } from "../../services/api";

export const loginAction = createAsyncThunk("user/token", async (data) => {
  const { email, password } = data;
  const login = email;

  const response = await gql(
    `query login ($login:String, $password:String) {login (login:$login, password: $password) }`,
    { login, password }
  );
  localStorage.setItem("auth", response);
  const decodeToken = jwtDecode(response);

  // const resultToLocalStorage = {
  //   id: decodeToken.sub.id,
  //   login: decodeToken.sub.login,
  //   token: response,
  // };

  // localStorage.setItem("login", JSON.stringify(resultToLocalStorage));

  return {
    payload: {
      id: decodeToken.sub.id,
      login: decodeToken.sub.login,
      token: response,
    },
  };
});

export const loginFromLocalStorageAction = createAction(
  "user/localStorage",
  () => {
    console.log("action");
    const storage = localStorage.getItem("auth");

    const decodeToken = jwtDecode(storage);

    return {
      payload: {
        id: decodeToken.sub.id,
        login: decodeToken.sub.login,
        token: storage,
      },
    };
  }
);

export function jwtDecode(token) {
  //выкусить середочку
  //на любом этапе могут быть исключения
  try {
    const splittedToken = token.split(".")[1];
    //atob
    const atb = atob(splittedToken);
    //JSON.parse
    const parcedToken = JSON.parse(atb);
    return parcedToken;
  } catch (error) {
    console.log("jwtDecode не смог");
  }
}
