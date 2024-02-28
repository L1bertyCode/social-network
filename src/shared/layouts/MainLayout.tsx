import { ReactNode } from "react";
import styled from "styled-components";

interface MainLayoutProps {
 header: ReactNode;
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
   <div className="header">{header}</div>
   <div className="sidebar">{sidebar}</div>
   <div className="content">{content}</div>
   {footer ? <div className="footer">{footer}</div> : null}
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
