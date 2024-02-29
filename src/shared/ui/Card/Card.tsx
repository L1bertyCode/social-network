import { ReactNode } from "react";
import styled from "styled-components";

interface CardProps {
 children?: ReactNode;
}

export const Card = ({ children }: CardProps) => {
 return <StyledCard>Card</StyledCard>;
};
const StyledCard = styled.div`
 background-color: ${({ theme }) =>
  theme.colors["dark-bg-color"]};
`;
