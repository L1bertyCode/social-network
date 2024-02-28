import { variables } from "@/app/styles/variables";
import { ReactNode } from "react";
import styled from "styled-components";

interface PageProps {
 children: ReactNode;
}

export const Page = ({ children }: PageProps) => {
 return <StyledPage>{children}</StyledPage>;
};
const StyledPage = styled.div`
 padding: 20px;
 height: calc(100vh - ${variables.heights.headerHeight});
`;
