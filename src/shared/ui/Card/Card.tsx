import { ReactNode } from "react";
import styled from "styled-components";

interface CardProps {
 children?: ReactNode;
 className?: string;
}

export const Card = ({
 children,
 className,
 ...otherProps
}: CardProps) => {
 return (
  <StyledCard {...otherProps} className={className}>
   {children}
  </StyledCard>
 );
};
const StyledCard = styled.div`
 background-color: ${({ theme }) =>
  theme.colors["bg-color"]};
 border-radius: 16px;
`;
