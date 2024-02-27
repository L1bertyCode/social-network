import { ReactNode } from "react";
import styled from "styled-components";

interface MainLayoutProps {
 header: ReactNode;
 content: ReactNode;
 navbar: ReactNode;
 footer?: ReactNode;
}

export const MainLayout = ({
 header,
 content,
 navbar,
 footer,
}: MainLayoutProps) => {
 return (
  <StyledMainLayout>
   <>{header}</>
   <div>
    <>{content}</>
    <>{navbar}</>
   </div>
   {footer ? <>{footer}</> : null}
  </StyledMainLayout>
 );
};
const StyledMainLayout = styled.div`
 display: grid;
`;
