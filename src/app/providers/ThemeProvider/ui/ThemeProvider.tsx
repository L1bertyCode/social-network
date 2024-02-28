import { ReactNode, useState } from "react";

import { blueTheme } from "@/app/styles/theme/blueTheme";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "@/app/styles/theme/lightTheme";

interface StyledThemeProviderProps {
 children: ReactNode;
}
export enum ETheme {
 LIGHT = "lightTheme",
 BLUE = "blueTheme",
}
export const StyledThemeProvider = ({
 children,
}: StyledThemeProviderProps) => {
 const [theme, setTheme] = useState(lightTheme);
 return (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
 );
};
