import { useAppDispatch } from "@/app/providers/StoreProvider/config/store";
import { PostSchema } from "@/entities/Post";
import { Button } from "@/shared/ui/Button/Button";
import { Input } from "@/shared/ui/Input/Input";
import { useState } from "react";
import styled from "styled-components";
import { addPostActions } from "../../model/slices/addPostSlice";

interface AddPostProps {}

export const AddPost = (props: AddPostProps) => {
 const dispatch = useAppDispatch();
 const [value, setPost] = useState<string>("");
 const onChangeInput = (value: string) => setPost(value);
 const createNewPost = (keyCode?: string) => {
  const newPost: PostSchema = {
   id: String(new Date()),
   firstname: "Lib",
   sirname: "Code",
   avatar: "",
   text: value,
   likes: 0,
  };
  if (value) {
   dispatch(addPostActions.setPost(newPost));
   setPost("");
  } else if (value && keyCode === "Enter") {
   dispatch(addPostActions.setPost(newPost));
   setPost("");
  }
 };
 return (
  <StyledAddPost>
   <Input
    value={value}
    onChange={onChangeInput}

    // onKeyDown={createNewPost}
    placeholder={"What's news?"}
   />
   <Button onClick={createNewPost} variant="filled">
    Add
   </Button>
  </StyledAddPost>
 );
};
const StyledAddPost = styled.div`
 width: 100%;
 display: flex;
 align-items: center;
 gap: 12px;
`;
// const StyledButton = styled(Button)``;

// const StyledInput = styled(Input)``;
