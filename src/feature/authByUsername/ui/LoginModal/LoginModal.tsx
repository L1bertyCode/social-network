import { Modal } from "@/shared/ui/Modal/Modal";
import { ReactNode, useState } from "react";
import { LoginForm } from "../LoginForm/LoginForm";

interface LoginModalProps {
 isOpen?: boolean;
 onClose?: () => void;
 firstname?: string;
 sirname?: string;
 onChangeFirtsname?: (value: string) => void;
 onChangeSirname?: (value: string) => void;
 login?: () => void;
}

export const LoginModal = ({
 isOpen,
 onClose,
 sirname,
 firstname,
 onChangeFirtsname,
 onChangeSirname,
 login,
}: LoginModalProps) => {
 return (
  <Modal onClose={onClose} isOpen={isOpen}>
   <LoginForm
    firstname={firstname}
    sirname={sirname}
    onChangeFirtsname={onChangeFirtsname}
    onChangeSirname={onChangeSirname}
    onClose={onClose}
    login={login}
   />
  </Modal>
 );
};
