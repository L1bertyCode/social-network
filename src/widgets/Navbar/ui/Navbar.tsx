import { Button } from "@/shared/ui/Button/Button";
import styled from "styled-components";

interface NavbarProps {}

export const Navbar = (props: NavbarProps) => {
 return (
  <StyledNavbar>
   <div>NavbarLogo</div>
   <Button>Login</Button>
  </StyledNavbar>
 );
};
const StyledNavbar = styled.div`
 max-width: 1600px;
 width: 100%;
 height: 100%;
 margin: 0 auto;
 padding: 12px;
 display: flex;
 justify-content: space-between;
 align-items: center;
 @media (max-width: 1600px) {
  max-width: 1400px;
 }
 @media (max-width: 1400px) {
  max-width: 1200px;
 }
`;
