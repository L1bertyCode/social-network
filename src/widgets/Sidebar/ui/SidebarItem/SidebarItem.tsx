import { AppNavLink } from "@/shared/ui/AppNavLink/AppNavLink";
import { ReactNode } from "react";

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
const SyledSidebarItem = styled(AppNavLink)``;
