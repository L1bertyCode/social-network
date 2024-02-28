import { createGlobalStyle } from "styled-components";
import { theme } from "./theme/theme";
export default createGlobalStyle`
  *,html,body{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    width: 100%;
  
  }
  html,body{
    background: ${theme.colors["bg-color"]};
    color: ${theme.colors["text-color"]};
  }
`;
