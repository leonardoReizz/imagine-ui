import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import { useEffect } from "react";

type ThemeState = {
  theme: "light" | "dark";
};

type InitialState = {
  value: ThemeState;
};

const initialState = {
  value: {
    theme: JSON.parse(Cookies.get("theme") || "{}")?.theme || "light",
  } as ThemeState,
} as InitialState;

export const theme = createSlice({
  name: "theme",
  initialState,
  reducers: {
    changeTheme: (state, action: PayloadAction<"light" | "dark">) => {
      return {
        value: {
          theme: action.payload,
        },
      };
    },
  },
});

export const { changeTheme } = theme.actions;
export default theme.reducer;
