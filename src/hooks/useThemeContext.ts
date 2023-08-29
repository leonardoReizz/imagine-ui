import { ThemeContext } from "@/context/ThemeContext";
import { useContext } from "react";

export function useThemeContext() {
  const theme = useContext(ThemeContext);
  return { ...theme };
}
