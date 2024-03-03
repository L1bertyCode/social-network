import { ReactNode, createContext, useState } from "react";

import { blueTheme } from "@/app/styles/theme/blueTheme";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "@/app/styles/theme/lightTheme";
import { variables } from "@/app/styles/variables";
import { darkTheme } from "@/app/styles/theme/darkTheme";
import { ITheme } from "@/app/styles/theme/model/theme";

// Context
interface ThemeContextProps {
 theme?: ETheme;
 setTheme?: (theme: ETheme) => void;
}
export const ThemeContext =
 createContext<ThemeContextProps>({});

// Provider
interface ThemeProviderProps {
 children: ReactNode;
}
export enum ETheme {
 LIGHT = "lightTheme",
 DARK = "darkTheme",
 //  BLUE = "blueTheme",
}
const mapTheme = {
 lightTheme: lightTheme,
 darkTheme: darkTheme,
};
export const LOCAL_STORAGE_THEME_KEY = "theme";
const defaultTheme =
 (localStorage.getItem(
  LOCAL_STORAGE_THEME_KEY
 ) as ETheme) || ETheme.DARK;
console.log(
 "defaultTheme",
 localStorage.getItem(LOCAL_STORAGE_THEME_KEY)
);

export const StyledThemeProvider = ({
 children,
}: ThemeProviderProps) => {
 const [theme, setTheme] = useState(defaultTheme);

 const styles: ITheme = {
  ...mapTheme[theme],
  ...variables,
 };
 return (
  <ThemeProvider theme={styles}>
   <ThemeContext.Provider value={{ theme, setTheme }}>
    {children}
   </ThemeContext.Provider>
  </ThemeProvider>
 );
};
