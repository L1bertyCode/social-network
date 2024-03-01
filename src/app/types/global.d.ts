import "styled-components";
import { ITheme } from "../styles/theme/model/theme";
import React from "react";

declare module "*.jpg";
declare module "*.jpeg";

declare module "*.svg" {
 const SVG: React.FunctionComponent<
  React.SVGProps<SVGElement>
 >;
 export default SVG;
}
declare module "styled-components" {
 export interface DefaultTheme extends ITheme {}
}
