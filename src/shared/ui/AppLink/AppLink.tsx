import { ReactNode } from "react";
import { NavLink, NavLinkProps } from "react-router-dom";
import styled from "styled-components";

interface AppLinkProps extends NavLinkProps {
 children?: ReactNode;
}

export const AppLink = ({ to, children }: AppLinkProps) => {
 return <SyledAppLink to={to}>{children}</SyledAppLink>;
};
const SyledAppLink = styled(NavLink)`
 &:hover {
  opacity: ${({ theme }) => theme.opacity.opacity70};
 }
`;
