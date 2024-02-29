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
   <header className="header">{header}</header>
   <div className="sidebar">{sidebar}</div>
   <main className="content">{content}</main>
   {footer ? (
    <footer className="footer">{footer}</footer>
   ) : null}
  </StyledMainLayout>
 );
};
const StyledMainLayout = styled.div`
 display: grid;
 grid-template-areas:
  "header header header"
  "sidebar content content"
  "sidebar content content"
  "footer footer footer";
 .header {
  grid-area: header;
  width: 100%;
  height: ${variables.heights.headerHeight};
  background-color: ${({ theme }) =>
   theme.colors["inverted-bg-color"]};
  color: ${({ theme }) =>
   theme.colors["inverted-text-color"]};
 }
 .content {
  grid-area: content;
 }
 .sidebar {
  grid-area: sidebar;
 }
 .footer {
  grid-area: footer;
 }
`;
