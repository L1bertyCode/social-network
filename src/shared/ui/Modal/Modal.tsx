import { ReactNode } from "react";
import styled from "styled-components";
import { Card } from "@/shared/ui/Card/Card";
import { Button } from "@/shared/ui/Button/Button";

interface ModalProps {
 children?: ReactNode;
 isOpen?: boolean;
 onClose?: () => void;
}

export const Modal = ({ children }: ModalProps) => {
 return (
  <StyledModal>
   <Content>
    {children}<CloseBtn>x</CloseBtn>
   </Content>
  </StyledModal>
 );
};
const StyledModal = styled.div<ModalProps>`
 position: fixed;
 width: 100%;
 height: 100vh;
 background-color: #ffffff90;
 display: flex;
 justify-content: center;
 align-items: center;
 z-index: 1;
`;
const Content = styled(Card)`
 position: relative;
`;
const CloseBtn = styled(Button)`
 position: absolute;
 top: -16px;
 right: -12px;
`;
