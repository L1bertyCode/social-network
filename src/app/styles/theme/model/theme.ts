import { variables } from "../../variables";

export interface ITheme extends IVariables {
 colors: {
  "bg-color": string;
  "inverted-bg-color": string;
  "dark-bg-color": string;
  "light-bg-color": string;
  "text-color": string;
  "inverted-text-color": string;
  "hint-color": string;
  "cancel-color": string;
  "save-color": string;
  "icon-color": string;
  "accent-color": string;
 };
}
export interface IVariables {
 heights: {
  headerHeight: string;
 };
 widths: {
  "sidebar-width": string;
  "sidebar-width-collapsed": string;
 };
 opacity: {
  opacity70: number;
 };
}
