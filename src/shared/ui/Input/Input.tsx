import {
 ChangeEvent,
 InputHTMLAttributes,
 KeyboardEvent,
} from "react";
import styled from "styled-components";
import { Button } from "../Button/Button";

type ExtendsInputType = Omit<
 InputHTMLAttributes<HTMLInputElement>,
 "value" | "onChange" | "onKeyDown"
>;

interface InputProps extends ExtendsInputType {
 value?: string;
 onChange?: (value: string) => void;
 className?: string;
 type?: string;
 placeholder?: string;
 label?: string;
 //  onKeyDown?: (key: string) => void;
}

export const Input = ({
 type = "text",
 placeholder,
 className,
 value,
 onChange,
 //  onKeyDown,
 label,
 ...otherProps
}: InputProps) => {
 return (
  <InputWrapper>
   {label && <label htmlFor={label}>{label}</label>}
   <StyledInput
    {...otherProps}
    // onKeyDown={(e: KeyboardEvent<HTMLInputElement>) => {
    //   console.log("e.code", e.key);
    //    onKeyDown?.(e.code);
    // }}
    id={label}
    value={value}
    onChange={(e: ChangeEvent<HTMLInputElement>) =>
     onChange?.(e.target.value)
    }
    className={className}
    placeholder={placeholder}
    type={type}
   />
   {value && (
    <InputButton onClick={() => onChange?.("")}>
     x
    </InputButton>
   )}
  </InputWrapper>
 );
};
const InputWrapper = styled.div`
 position: relative;
 width: 100%;
 display: flex;
 align-items: center;
 justify-content: center;
 gap: 12px;
`;
const InputButton = styled(Button)`
 position: absolute;
 right: 4px;
 top: 50%;
 transform: translateY(-50%);
 padding: 8px;
`;
const StyledInput = styled.input`
 width: 100%;
 outline: none;
 border: none;
 background: ${({ theme }) =>
  theme.colors["bg-color-light"]};
 padding: 8px 30px 8px 8px;
 border-radius: ${({ theme }) => theme.indents.indent8};
`;
