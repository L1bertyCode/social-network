import styled from "styled-components";

interface HeaderProps {}

export const Header = (props: HeaderProps) => {
 return <StyledHeader>Header</StyledHeader>;
};
const StyledHeader = styled.header`
 width: 100%;
 background-color: red;
`;
