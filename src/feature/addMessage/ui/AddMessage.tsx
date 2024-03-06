import { useAppDispatch } from "@/app/providers/StoreProvider/config/store";
import { MessageSchema } from "@/entities/Message/model/message";
import { Button } from "@/shared/ui/Button/Button";
import { Input } from "@/shared/ui/Input/Input";
import { useState } from "react";

import styled from "styled-components";
import { addMessageActions } from "../model/slices/addMessageSlice";

export const AddMessage = () => {
 const [messageText, setMessageText] = useState("");
 const distpatch = useAppDispatch();
 const createNewMessage = () => {
  if (messageText) {
   const newMessag: MessageSchema = {
    id: String(new Date()),
    firstname: "Lib",
    sirname: "Code",
    text: messageText,
   };
   distpatch(addMessageActions.setMessage(newMessag));
   setMessageText("");
  }
 };
 return (
  <StyledAddMessage>
   <Input
    value={messageText}
    onChange={(messageText: string) =>
     setMessageText(messageText)
    }
    placeholder={"Type text"}
   />
   <Button onClick={createNewMessage} variant="filled">
    Send
   </Button>
  </StyledAddMessage>
 );
};
const StyledAddMessage = styled.div`
 width: 100%;
 display: flex;
 align-items: center;
 gap: 12px;
`;
// export const StyledInput = styled(Input)``;

// export const StyledButton = styled(Button)``;
