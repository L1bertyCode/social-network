import { useAppDispatch } from "@/app/providers/StoreProvider/config/store";
import { Button } from "@/shared/ui/Button/Button";
import { Input } from "@/shared/ui/Input/Input";
import styled from "styled-components";

interface LoginFormProps {
 onClose?: () => void;
 firstname?: string;
 sirname?: string;
 onChangeFirtsname?: (value: string) => void;
 onChangeSirname?: (value: string) => void;
 login?: () => void;
}

export const LoginForm = ({
 onClose,
 sirname,
 firstname,
 onChangeFirtsname,
 onChangeSirname,
 login,
}: LoginFormProps) => {
 return (
  <SryledLoginForm>
   <Input
    label="Firstname"
    value={firstname}
    onChange={(value: string) => onChangeFirtsname?.(value)}
   />
   <Input
    label="Sirname"
    value={sirname}
    onChange={(value: string) => onChangeSirname?.(value)}
   />

   <Button
    variant="outlined"
    onClick={() => {
     onClose?.();
     if (firstname && sirname) {
      login?.();
     }
    }}
   >
    Login
   </Button>
  </SryledLoginForm>
 );
};
const SryledLoginForm = styled.div`
 display: flex;
 flex-direction: column;
 gap: 12px;
`;
