import { useAppDispatch } from "@/app/providers/StoreProvider/config/store";
import {
 LoginModal,
 authByUsernameActions,
 getAuthData,
} from "@/feature/authByUsername";
import { Button } from "@/shared/ui/Button/Button";
import { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

interface NavbarProps {}

export const Navbar = (props: NavbarProps) => {
 const dispatch = useAppDispatch();
 const authData = useSelector(getAuthData);
 console.log("authData", authData);

 const [isAuthModal, setIsAuthModal] =
  useState<boolean>(false);
 const [isFirstname, setIsFirstname] = useState(
  authData.firstname
 );
 const [isSirname, setIsSirname] = useState(
  authData.sirname
 );
 const onChangeFirtsname = (value: string) =>
  setIsFirstname(value);

 const onChangeSirname = (value: string) =>
  setIsSirname(value);
 const login = () => {
  dispatch(
   authByUsernameActions.setProfile({
    firstname: isFirstname,
    sirname: isSirname,
   })
  );
 };
 return (
  <StyledNavbar>
   <div>NavbarLogo</div>
   {authData.firstname && authData.sirname ? (
    <Button onClick={() => setIsAuthModal(true)}>
     Logout
    </Button>
   ) : (
    <Button onClick={() => setIsAuthModal(true)}>
     Login
    </Button>
   )}

   {isAuthModal && (
    <LoginModal
     firstname={isFirstname}
     sirname={isSirname}
     onChangeFirtsname={onChangeFirtsname}
     onChangeSirname={onChangeSirname}
     isOpen={isAuthModal}
     onClose={() => setIsAuthModal(false)}
     login={login}
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
