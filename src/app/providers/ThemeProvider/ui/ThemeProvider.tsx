import { ReactNode, useState } from "react";

import { blueTheme } from "@/app/styles/theme/blueTheme";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "@/app/styles/theme/lightTheme";
import { variables } from "@/app/styles/variables";

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
 const [theme, setTheme] = useState(blueTheme);
 const styles = { ...theme, ...variables };
 return (
  <ThemeProvider theme={styles}>{children}</ThemeProvider>
 );
};
