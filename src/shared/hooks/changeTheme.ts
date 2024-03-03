import {
 ETheme,
 LOCAL_STORAGE_THEME_KEY,
 ThemeContext,
} from "@/app/providers/ThemeProvider";
import { useContext } from "react";

interface ChangeTheme {
 theme: ETheme;
 setTheme: (theme: ETheme) => void;
}

export const chnageTheme = (): ChangeTheme => {
 const { theme, setTheme } = useContext(ThemeContext);
 const toggleTheme = (theme: ETheme) => {
  let newTheme;
  switch (theme) {
   case ETheme.DARK:
    newTheme = ETheme.LIGHT;
    break;
   case ETheme.LIGHT:
    newTheme = ETheme.DARK;
    break;
   default:
    newTheme = ETheme.DARK;
    break;
  }
  localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  setTheme?.(newTheme);
 };

 return {
  theme: theme || ETheme.DARK,
  setTheme: toggleTheme,
 };
};
