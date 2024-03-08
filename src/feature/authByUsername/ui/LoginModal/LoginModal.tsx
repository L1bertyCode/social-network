import { Modal } from "@/shared/ui/Modal/Modal";
import { ReactNode, useState } from "react";
import { LoginForm } from "../LoginForm/LoginForm";

interface LoginModalProps {
 isOpen?: boolean;
 onClose?: () => void;
}

export const LoginModal = ({
 isOpen,
 onClose,
}: LoginModalProps) => {
 return (
  <Modal onClose={onClose} isOpen={isOpen}>
   <LoginForm onClose={onClose} />
  </Modal>
 );
};
