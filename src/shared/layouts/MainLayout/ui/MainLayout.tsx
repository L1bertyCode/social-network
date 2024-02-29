import { variables } from "@/app/styles/variables";
import { ReactNode } from "react";
import styled from "styled-components";

interface MainLayoutProps {
 header?: ReactNode;
 content: ReactNode;
 sidebar: ReactNode;
 footer?: ReactNode;
}

export const MainLayout = ({
 header,
 content,
 sidebar,
 footer,
}: MainLayoutProps) => {
 return (
  <StyledMainLayout>
   <header>{header}</header>
   <main>
    <div className="sidebar">{sidebar}</div>
    <div className="content">{content}</div>
   </main>
   {footer ? <footer>{footer}</footer> : null}
  </StyledMainLayout>
 );
};
const StyledMainLayout = styled.div`
 max-width: 1600px;
 margin: 0 auto;
 display: grid;
 grid-template-columns: ${({ theme }) =>
   theme.widths["sidebar-width"]} 1fr;
 gap: 20px;
 grid-template-areas:
  "header header"
  "sidebar content"
  "sidebar content"
  "footer footer";
 header {
  grid-area: header;
  width: 100%;
  height: ${variables.heights.headerHeight};
  background-color: ${({ theme }) =>
   theme.colors["light-bg-color"]};
  border-radius: 20px;
  padding: 12px 20px;
 }
 .content {
  grid-area: content;
 }
 .sidebar {
  grid-area: sidebar;
 }
 footer {
  grid-area: footer;
 }
`;
