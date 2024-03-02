import { createGlobalStyle } from "styled-components";
export default createGlobalStyle`
  *,html,body{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html,body,#root{
    width: 100%;
    background: ${({ theme }) =>
     theme.colors["bg-color-dark"]};
    color: ${({ theme }) => theme.colors["text-color"]};
  }
  input,
button,
textarea,
select,
a {
  margin: 0;
  padding: 0;
  font: inherit;
  color: inherit;
  font-weight: inherit;
  font-size: inherit;
  font-style: inherit;
  text-decoration: none;
}
li {
  list-style-type: none;
}
`;
