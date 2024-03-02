import { InputHTMLAttributes } from "react";
import styled from "styled-components";

interface InputProps
 extends InputHTMLAttributes<HTMLInputElement> {
 type?: string;
 placeholder?: string;
}

export const Input = ({
 type = "text",
 placeholder,
}: InputProps) => {
 return (
  <StyledInput placeholder={placeholder} type={type} />
 );
};
const StyledInput = styled.input`
 outline: none;
 border: none;
 background: ${({ theme }) =>
  theme.colors["bg-color-light"]};
 padding: ${({ theme }) => theme.indents.indent8};
 border-radius: ${({ theme }) => theme.indents.indent8};
`;
