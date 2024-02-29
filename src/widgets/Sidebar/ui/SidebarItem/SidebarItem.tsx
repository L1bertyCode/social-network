import { AppLink } from "@/shared/ui/AppLink/AppLink";
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
const SyledSidebarItem = styled(AppLink)``;
