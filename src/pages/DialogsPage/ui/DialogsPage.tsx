import {
 DialogList,
 DialogSchema,
} from "@/entities/Dialog";
import { MessageList } from "@/entities/Message";
import { Page } from "@/shared/layouts/Page";
import { Card } from "@/shared/ui/Card/Card";
import styled from "styled-components";

interface DialogsPageProps {}
const list: DialogSchema[] = [
 { id: "1", name: "Alex" },
 { id: "2", name: "Pavel" },
 { id: "3", name: "Bob" },
];
const DialogsPage = (props: DialogsPageProps) => {
 return (
  <Page>
   <StyledDialogsPage>
    <DialogList dialogList={list} />
    <MessageList />
   </StyledDialogsPage>
  </Page>
 );
};
const StyledDialogsPage = styled(Card)`
height: 100%;
 display: grid;
 grid-template-columns: 2fr 10fr;
 gap: ${({ theme }) => theme.indents.indent12};
`;
export default DialogsPage;
