import styled from "styled-components";
import { DialogSchema } from "../../model/dialog";
import { AppLink } from "@/shared/ui/AppLink/AppLink";

interface DialogProps {
 dialog?: DialogSchema;
}

export const Dialog = ({ dialog }: DialogProps) => {
 return (
  <StyledDialog to={"/dialogs/" + dialog?.id}>
   <Sdiv>{dialog?.name}</Sdiv>
  </StyledDialog>
 );
};
const Sdiv = styled.div`
 width: 100%;
 height: 100%;
 display: flex;
 align-items: center;
 justify-content: center;
 border-radius: ${({ theme }) => theme.indents.indent12};

 &:hover {
  background: ${({ theme }) =>
   theme.colors["color-accent"]};
 }
 &.active {
  background: ${({ theme }) =>
   theme.colors["color-accent"]};
 }
`;
const StyledDialog = styled(AppLink)`
 width: 100%;
 height: 40px;
`;
