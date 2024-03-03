import { variables } from "@/app/styles/variables";
import styled from "styled-components";
import { SidebarItem } from "../SidebarItem/SidebarItem";
import { Button } from "@/shared/ui/Button/Button";

import { chnageTheme } from "@/shared/hooks/changeTheme";

interface SidebarProps {}

export const Sidebar = (props: SidebarProps) => {
 const { theme, setTheme } = chnageTheme();
 return (
  <StyledSidebar>
   <StyledSidebarNav>
    <SidebarItem to="/">MainPage</SidebarItem>
    <SidebarItem to="/about">AboutPage</SidebarItem>{" "}
    <SidebarItem to="/profile">ProfilePage</SidebarItem>{" "}
    <SidebarItem to="/dialogs">DialogsPage</SidebarItem>
   </StyledSidebarNav>
   <Button
    variant="outlined"
    onClick={() => setTheme(theme)}
   >
    Change theme
   </Button>
  </StyledSidebar>
 );
};
const StyledSidebar = styled.nav`
 width: 100%;
 height: calc(100vh - ${variables.heights.headerHeight});
`;
const StyledSidebarNav = styled.nav`
 display: flex;
 flex-direction: column;
 align-items: center;
`;
