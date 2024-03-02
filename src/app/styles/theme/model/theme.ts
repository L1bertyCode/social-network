export interface ITheme extends IVariables {
 colors: {
  "bg-color": string;
  "inverted-bg-color": string;
  "bg-color-dark": string;
  "bg-color-light": string;
  "text-color": string;
  "text-color-inverted": string;
  "color-hint": string;
  "color-cancel": string;
  "color-save": string;
  "color-icon": string;
  "color-accent": string;
 };
}
export interface IVariables {
 heights: {
  headerHeight: string;
 };
 widths: {
  sidebarWidth: string;
  sidebarWidthCollapsed: string;
 };
 opacity: {
  opacity70: number;
 };
 borderRadius: {
  r8: string;
  r12: string;
  r16: string;
  r20: string;
  r24: string;
 };
 indents: {
  indent8: string;
  indent12: string;
  indent16: string;
  indent20: string;
  indent24: string;
 };
}
