import styled from "styled-components";

interface NavbarProps {}

export const Navbar = (props: NavbarProps) => {
 return <StyledNavbar>Navbar</StyledNavbar>;
};
const StyledNavbar = styled.div`
 max-width: 1600px;
 width: 100%;
 height: calc(100% -24px);
 margin: 0 auto;
 padding: 12px;
 box-sizing: border-box;
`;
