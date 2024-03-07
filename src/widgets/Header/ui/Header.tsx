import { variables } from "@/app/styles/variables";
import { ReactNode } from "react";
import styled from "styled-components";

interface HeaderProps {
 children?: ReactNode;
}

export const Header = ({ children }: HeaderProps) => {
 return <StyledHeader>{children}</StyledHeader>;
};
const StyledHeader = styled.header`
 max-width: 1600px;
 width: 100%;
 height: 100%;
 margin: 0 auto;
 padding: 12px;
 box-sizing: border-box;
 @media (max-width: 1600px) {
  max-width: 1400px;
 }
 @media (max-width: 1400px) {
  max-width: 1200px;
 }
`;
