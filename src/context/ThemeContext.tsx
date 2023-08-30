"use client";
import { ThemeType } from "@imagine-ui/react";
import Cookies from "js-cookie";
import {
  ReactNode,
  createContext,
  useCallback,
  useEffect,
  useState,
} from "react";

interface ThemeContextType {
  theme: ThemeType;
  changeTheme: (newTheme: ThemeType) => void;
}

interface ThemeContextProviderProps {
  children: ReactNode;
}

export const ThemeContext = createContext({} as ThemeContextType);

export function ThemeContextProvider({ children }: ThemeContextProviderProps) {
  const [theme, setTheme] = useState<ThemeType>("light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  useEffect(() => {
    const cTheme = JSON.parse(Cookies.get("theme") || "{}")?.theme || "light";
    setTheme(cTheme);
  }, [theme]);

  const changeTheme = useCallback((newTheme: ThemeType) => {
    setTheme(newTheme);
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
