import { Button } from "@/shared/ui/Button/Button";
import { Input } from "@/shared/ui/Input/Input";
import styled from "styled-components";

interface AddPostProps {}

export const AddPost = (props: AddPostProps) => {
 return (
  <StyledAddPost>
   <StyledInput placeholder={"What's news?"} />
   <StyledButton variant="filled">Add</StyledButton>
  </StyledAddPost>
 );
};
const StyledAddPost = styled.div`
 width: 100%;
 display: flex;
 align-items: center;
 gap: 12px;
`;
const StyledButton = styled(Button)``;

const StyledInput = styled(Input)``;
