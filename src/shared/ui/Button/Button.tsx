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
 ${(props) => {
  switch (props.variant) {
   case "filled":
    return css`
     outline: none;
     background: none;
    `;
   default:
    return css`
     outline: none;
     background: none;
    `;
  }
 }}
`;
