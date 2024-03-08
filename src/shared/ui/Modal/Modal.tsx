import { MouseEvent, ReactNode } from "react";
import styled from "styled-components";
import { Card } from "@/shared/ui/Card/Card";
import { Button } from "@/shared/ui/Button/Button";

interface ModalProps {
 children?: ReactNode;
 isOpen?: boolean;
 onClose?: () => void;
}

export const Modal = ({
 children,
 onClose,
}: ModalProps) => {
 const onContentClick = (e: MouseEvent) =>
  e.stopPropagation();
 return (
  <StyledModal onClick={onClose}>
   <Content onClick={onContentClick}>
    {children}
    <CloseBtn onClick={onClose}>x</CloseBtn>
   </Content>
  </StyledModal>
 );
};
const StyledModal = styled.div<ModalProps>`
 position: fixed;
 top: 0;
 bottom: 0;
 right: 0;
 left: 0;
 background-color: #ffffff90;
 display: flex;
 justify-content: center;
 align-items: center;
 z-index: 1;
`;
const Content = styled(Card)`
 position: relative;
 min-width: 360px;
 width: 20%;
 height: 20vh;
 display: flex;
 align-items: center;
 justify-content: center;
`;
const CloseBtn = styled(Button)`
 position: absolute;
 top: -16px;
 right: -12px;
`;
