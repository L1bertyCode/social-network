import { Button } from "@/shared/ui/Button/Button";
import { Input } from "@/shared/ui/Input/Input";
import styled from "styled-components";

interface LoginFormProps {
 onClose?: () => void;
}

export const LoginForm = ({ onClose }: LoginFormProps) => {
 return (
  <SryledLoginForm>
   <Input label="Username" />
   <Input label="Sirrname" />
   <Button onClick={onClose}>Login</Button>
  </SryledLoginForm>
 );
};
const SryledLoginForm = styled.div`
 display: flex;
 flex-direction: column;
 
 gap: 12px;
`;
