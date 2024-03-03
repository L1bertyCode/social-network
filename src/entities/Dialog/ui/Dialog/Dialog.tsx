import styled from "styled-components";
import { DialogSchema } from "../../model/dialog";
import { AppLink } from "@/shared/ui/AppLink/AppLink";

interface DialogProps {
 dialog?: DialogSchema;
}

export const Dialog = ({ dialog }: DialogProps) => {
 return (
  <StyledDialog to={"/dialogs/" + dialog?.id}>
   {dialog?.name}
  </StyledDialog>
 );
};
const StyledDialog = styled(AppLink)`
 display: flex;
 justify-content: center;
`;
