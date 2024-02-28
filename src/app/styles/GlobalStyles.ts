import { createGlobalStyle } from "styled-components";
export default createGlobalStyle`
  *,html,body{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    width: 100%;
  
  }
  html,body{
    background: ${({ theme }) => theme.colors["bg-color"]};
    color: ${({ theme }) => theme.colors["text-color"]};
  }
`;
