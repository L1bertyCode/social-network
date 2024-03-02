import { ReactNode, useState } from "react";

import { blueTheme } from "@/app/styles/theme/blueTheme";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "@/app/styles/theme/lightTheme";
import { variables } from "@/app/styles/variables";
import { darkTheme } from "@/app/styles/theme/darkTheme";
import { ITheme } from "@/app/styles/theme/model/theme";

interface StyledThemeProviderProps {
 children: ReactNode;
}
export enum ETheme {
 LIGHT = "lightTheme",
 //  BLUE = "blueTheme",
 DARK = "darkTheme",
}
const changeTheme = (theme: ETheme) => {
 let newTheme;
 switch (theme) {
  case ETheme.DARK:
   newTheme = ETheme.LIGHT;
  case ETheme.LIGHT:
   newTheme = ETheme.DARK;
  default:
   newTheme = ETheme.DARK;
   break;
 }
};
export const StyledThemeProvider = ({
 children,
}: StyledThemeProviderProps) => {
 const [theme, setTheme] = useState<ETheme>(ETheme.DARK);

 const styles = { ...darkTheme, ...variables };
 return (
  <ThemeProvider theme={styles}>{children}</ThemeProvider>
 );
};
