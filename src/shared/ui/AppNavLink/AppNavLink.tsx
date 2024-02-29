import { ReactNode } from "react";
import { NavLink, NavLinkProps } from "react-router-dom";
import styled from "styled-components";

interface AppNavLinkProps extends NavLinkProps {
 children?: ReactNode;
}

export const AppNavLink = ({
 to,
 children,
 ...otherProps
}: AppNavLinkProps) => {
 console.log(" ...otherProps", { ...otherProps });

 return (
  <SyledAppNavLink {...otherProps} to={to}>
   {children}
  </SyledAppNavLink>
 );
};
const SyledAppNavLink = styled(NavLink)<AppNavLinkProps>`
 &:hover {
  opacity: ${({ theme }) => theme.opacity.opacity70};
 }
 &.active {
  color: ${({ theme }) => theme.colors["accent-color"]};
 }
`;
