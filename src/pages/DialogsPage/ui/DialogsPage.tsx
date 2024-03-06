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
    <VerticalLine />
    <MessageList />
   </StyledDialogsPage>
  </Page>
 );
};
const StyledDialogsPage = styled(Card)`
 height: 100%;
 display: grid;
 grid-template-columns: 2fr 0.1fr 10fr;
 gap: ${({ theme }) => theme.indents.indent12};
`;
const VerticalLine = styled.div`
 height: 100%;
 width: 1px;
 opacity: ${({ theme }) => theme.opacity.opacity70};
 background: ${({ theme }) =>
  theme.colors["bg-color-inverted"]};
`;
export default DialogsPage;
