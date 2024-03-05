import styled from "styled-components";
import { DialogSchema } from "../../model/dialog";
import { Dialog } from "../Dialog/Dialog";
import { Card } from "@/shared/ui/Card/Card";

type DialogListProps = { dialogList?: DialogSchema[] };

export const DialogList = ({
 dialogList,
}: DialogListProps) => {
 if (!dialogList) return null;
 return (
  <StyledDialogList>
   {dialogList.map((dialogItem) => (
    <Dialog dialog={dialogItem} key={dialogItem.id} />
   ))}
  </StyledDialogList>
 );
};
const StyledDialogList = styled.div`
 display: flex;
 flex-direction: column;

`;
