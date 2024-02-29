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
 width: 100%;
 header {
  width: 100%;
  height: ${variables.heights.headerHeight};
  background: ${({ theme }) => theme.colors["bg-color"]};
 }
 main {
  max-width: 1600px;
  margin: 0 auto;
  display: flex;
 }
 .content {
  flex-grow: 1;
 }
 .sidebar {
  width: ${({ theme }) => theme.widths["sidebar-width"]};
 }
 footer {
 }
`;
