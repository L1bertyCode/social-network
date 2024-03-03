import { ButtonHTMLAttributes, ReactNode } from "react";
import styled, { css } from "styled-components";

type ButtonVariant = "clear" | "filled" | "outlined";
interface ButtonProps
 extends ButtonHTMLAttributes<HTMLButtonElement> {
 children?: ReactNode;
 onClick?: () => void;
 variant?: ButtonVariant;
 className?: string;
}

export const Button = (props: ButtonProps) => {
 return (
  <StyledButton
   className={props.className}
   {...props}
   onClick={props.onClick}
  >
   {props.children}
  </StyledButton>
 );
};

const StyledButton = styled.button<ButtonProps>`
 cursor: pointer;
 outline: none;

 ${(props) => {
  switch (props.variant) {
   case "filled":
    return css`
     padding: ${({ theme }) => theme.indents.indent8}
      ${({ theme }) => theme.indents.indent20};
     background: ${({ theme }) =>
      theme.colors["color-hint"]};
     border: 1px solid transparent;
     border-radius: ${({ theme }) => theme.borderRadius.r12};
     opacity: 0.9;
     &:hover {
      opacity: 1;
     }
    `;
   case "outlined":
    return css`
     padding: 12px 20px;
     border-radius: ${({ theme }) => theme.borderRadius.r8};
     background: none;
     border: 1px solid red;
    `;
   default:
    return css`
     border: none;
     background: none;
    `;
  }
 }}
`;
