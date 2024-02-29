import { ReactNode, useState } from "react";

import { blueTheme } from "@/app/styles/theme/blueTheme";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "@/app/styles/theme/lightTheme";
import { variables } from "@/app/styles/variables";
import { darkTheme } from "@/app/styles/theme/darkTheme";

interface StyledThemeProviderProps {
 children: ReactNode;
}
export enum ETheme {
 LIGHT = "lightTheme",
 BLUE = "blueTheme",
 DARk = "darkTheme",
}
export const StyledThemeProvider = ({
 children,
}: StyledThemeProviderProps) => {
 const [theme, setTheme] = useState(darkTheme);
 
 const styles = { ...theme, ...variables };
 return (
  <ThemeProvider theme={styles}>{children}</ThemeProvider>
 );
};
