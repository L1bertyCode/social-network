import { variables } from "@/app/styles/variables";
import styled from "styled-components";

interface SidebarProps {}

export const Sidebar = (props: SidebarProps) => {
 return (
  <StyledSidebar>
   <div>Sidebar</div>
  </StyledSidebar>
 );
};
const StyledSidebar = styled.div`
 height: calc(100vh - ${variables.heights.headerHeight});
 background-color: ${({ theme }) =>
  theme.colors["inverted-bg-color"]};
 color: ${({ theme }) =>
  theme.colors["inverted-text-color"]};
 /* width: ${variables.widths["sidebar-width"]}; */
`;
