import { Button } from "@/shared/ui/Button/Button";
import { Input } from "@/shared/ui/Input/Input";

import styled from "styled-components";

export const AddMessage = () => {
 return (
  <StyledAddMessage>
   <Input
    // value={value}
    // onChange={onChangeInput}
    placeholder={"What's news?"}
   />
   <Button
    //  onClick={createNewPost}
    variant="filled"
   >
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
