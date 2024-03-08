import { HTMLAttributes, ReactNode } from "react";
import styled, { css } from "styled-components";
type CardPadding = "0" | "8" | "12" | "16" | "20" | "24";
interface CardProps extends HTMLAttributes<HTMLDivElement> {
 children?: ReactNode;
 className?: string;
 padding?: CardPadding;
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
const StyledCard = styled.div<CardProps>`
 background-color: ${({ theme }) =>
  theme.colors["bg-color"]};
 border-radius: 16px;
 ${(props: CardProps) => {
  switch (props.padding) {
   case "0":
    return css`
     padding: 0px;
    `;
   case "8":
    return css`
     padding: ${({ theme }) => theme.indents.indent8};
    `;
   case "16":
    return css`
     padding: ${({ theme }) => theme.indents.indent16};
    `;
   case "20":
    return css`
     padding: ${({ theme }) => theme.indents.indent20};
    `;
   case "24":
    return css`
     padding: ${({ theme }) => theme.indents.indent24};
    `;
   default:
    return css`
     padding: ${({ theme }) => theme.indents.indent12};
    `;
  }
 }}
`;
