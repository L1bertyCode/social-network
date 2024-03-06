import styled from "styled-components";
import { MessageSchema } from "../../model/message";
import { Avatar } from "@/shared/ui/Avatar/Avatar";
import { AvatarDiv } from "@/shared/ui/Avatar/AvatarDiv";
import { Text } from "@/shared/ui/Text/Text";

interface MessageProps {
 message: MessageSchema;
}

export const Message = ({ message }: MessageProps) => {
 return (
  <StyledMessage>
   <MessageHeader>
    {message.avatar ? (
     <Avatar src={message.avatar} />
    ) : (
     <AvatarDiv
      firstname={message?.firstname}
      sirname={message?.sirname}
     />
    )}
    <MessageName>
     {message.firstname} {message.sirname}
    </MessageName>
   </MessageHeader>
   <Text>{message.text}</Text>
  </StyledMessage>
 );
};
const MessageHeader = styled.div`
 display: flex;
 align-items: center;
 margin-bottom: ${({ theme }) => theme.indents.indent8};
`;
const MessageName = styled.div`
 margin-left: ${({ theme }) => theme.indents.indent8};
`;
const StyledMessage = styled.div`
 margin-top: 12px;
`;
