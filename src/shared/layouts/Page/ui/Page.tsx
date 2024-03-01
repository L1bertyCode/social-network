import { variables } from "@/app/styles/variables";
import { ReactNode } from "react";
import styled from "styled-components";

interface PageProps {
 children: ReactNode;
 className?: string;
}

export const Page = ({
 children,
 className,
}: PageProps) => {
 return (
  <StyledPage className={className}>{children}</StyledPage>
 );
};
const StyledPage = styled.div`
 height: calc(100vh - ${variables.heights.headerHeight});
 padding: 12px;
`;
