import { LoginModal } from "@/feature/authByUsername";
import { Button } from "@/shared/ui/Button/Button";
import { useState } from "react";
import styled from "styled-components";

interface NavbarProps {}

export const Navbar = (props: NavbarProps) => {
 const [isAuthModal, setIsAuthModal] =
  useState<boolean>(false);
 return (
  <StyledNavbar>
   <div>NavbarLogo</div>
   <Button onClick={() => setIsAuthModal(true)}>
    Login
   </Button>
   {isAuthModal && (
    <LoginModal
     isOpen={isAuthModal}
     onClose={() => setIsAuthModal(false)}
    />
   )}
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
