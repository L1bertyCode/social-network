import { PostSchema } from "@/entities/Post";
import { Button } from "@/shared/ui/Button/Button";
import { Input } from "@/shared/ui/Input/Input";
import { useState } from "react";
import styled from "styled-components";

interface AddPostProps {}

export const AddPost = (props: AddPostProps) => {
 // const dispatch=use
 const [value, setValue] = useState<string>("");
 const onChangeInput = (value: string) => setValue(value);
 const createNewPost = () => {
  const newPost: PostSchema = {
   id: String(new Date()),
   username: "Lib",
   sirname: "Code",
   avatar: "",
   text: value,
   likes: 0,
  };
 };
 return (
  <StyledAddPost>
   <StyledInput
    value={value}
    onChange={onChangeInput}
    placeholder={"What's news?"}
   />
   <StyledButton onClick={createNewPost} variant="filled">
    Add
   </StyledButton>
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
