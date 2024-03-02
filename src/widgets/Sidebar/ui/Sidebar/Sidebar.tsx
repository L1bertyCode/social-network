import { variables } from "@/app/styles/variables";
import styled from "styled-components";
import { SidebarItem } from "../SidebarItem/SidebarItem";
import { Button } from "@/shared/ui/Button/Button";

interface SidebarProps {}

export const Sidebar = (props: SidebarProps) => {
 return (
  <StyledSidebar>
   <SidebarItem to="/">MainPage</SidebarItem>
   <SidebarItem to="/about">AboutPage</SidebarItem>{" "}
   <SidebarItem to="/profile">ProfilePage</SidebarItem>
   <Button onClick={() => {}}>change theme</Button>
  </StyledSidebar>
 );
};
const StyledSidebar = styled.nav`
 width: 100%;
 height: calc(100vh - ${variables.heights.headerHeight});

 display: flex;
 flex-direction: column;
 align-items: center;
 padding: 12px;
`;
