import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Cookie from "js-cookie";

const initialState = {
  user: null,
};

export const authUserSlice = createSlice({
  name: "auth-user",
  initialState,
  reducers: {
    setAuthUser: (state, action) => {
      const { userData, token } = action.payload;

      localStorage.setItem("userData", JSON.stringify(userData));
      Cookie.set("token", token);
      axios.defaults.headers.common["Authorization"] = `Brear ${token}`;
      const newState = {
        ...state,
        user: userData,
      };
      return newState;
    },
    removeAuthUser: () => {
      Cookie.remove("token");
      localStorage.clear();
      const newState = {
        ...initialState,
      };
      return newState;
    },
  },
});

export const { setAuthUser, removeAuthUser } = authUserSlice.actions;

export default authUserSlice;
