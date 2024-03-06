import {
 AddMessage,
 getMessagesList,
} from "@/feature/addMessage";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { Message } from "../Message/Message";

interface MessageListProps {}

export const MessageList = (props: MessageListProps) => {
 const messagesList = useSelector(getMessagesList);
 return (
  <StyledMessageList>
   {messagesList.map((messageItem) => (
    <Message message={messageItem} />
   ))}
   <StyledAddMessage />
  </StyledMessageList>
 );
};
const StyledMessageList = styled.div`
 display: flex;
 flex-direction: column;
 justify-content: space-between;
`;
const StyledAddMessage = styled(AddMessage)``;
