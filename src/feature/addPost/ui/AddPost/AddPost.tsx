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
 const [value, setValue] = useState<string>("");
 const onChangeInput = (value: string) => setValue(value);
 const createNewPost = () => {
  const newPost: PostSchema = {
   id: String(new Date()),
   firstname: "Lib",
   sirname: "Code",
   avatar: "",
   text: value,
   likes: 0,
  };
  if (value) {
   dispatch(addPostActions.setValue(newPost));
  }
  setValue("");
 };
 return (
  <StyledAddPost>
   <Input
    value={value}
    onChange={onChangeInput}
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
