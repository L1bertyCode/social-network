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
 return (
  <SyledAppNavLink {...otherProps} to={to}>
   {children}
  </SyledAppNavLink>
 );
};
const SyledAppNavLink = styled(NavLink)<AppNavLinkProps>`
 border-radius: 12px;
 padding: 12px 16px;
 width: 100%;
 display: flex;
 &:hover {
  background: ${({ theme }) => theme.colors["bg-color"]};
 }
 &.active {
  color: ${({ theme }) => theme.colors["color-accent"]};
 }
`;
