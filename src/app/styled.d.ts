import "styled-components";
import { ITheme } from "./styles/theme/model/theme";

declare module "styled-components" {
 export interface DefaultTheme extends ITheme {}
}
