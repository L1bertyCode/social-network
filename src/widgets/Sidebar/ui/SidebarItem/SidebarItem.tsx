import { ReactNode } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

interface SidebarItemProps {
 children?: ReactNode;
 to?: string;
}

export const SidebarItem = ({
 children = "SidebarItem",
 to = "/",
}: SidebarItemProps) => {
 return (
  <SyledSidebarItem to={to}>{children}</SyledSidebarItem>
 );
};
const SyledSidebarItem = styled(Link)`
 width: fit-content;
`;
