import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
  value: ThemeState;
};

type ThemeState = {
  theme: "light" | "dark";
};

const initialState = {
  value: {
    theme: "light",
  } as ThemeState,
} as InitialState;

export const theme = createSlice({
  name: "theme",
  initialState,
  reducers: {
    changeTheme: (state, action: PayloadAction<"light" | "dark">) => {
      if (action.payload === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }

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
