import { PostSchema } from "@/entities/Post";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { AddPostSchema } from "../types/addPostSchema";

const initialState: AddPostSchema = {
 postsList: [
  {
   id: "1",
   firstname: "Liberty",
   sirname: "Code",
   avatar: "",
   text: "text",
   likes: 0,
  },
  {
   id: "2",
   firstname: "Liberty",
   sirname: "Code",
   avatar: "",
   text: "text text",
   likes: 2,
  },
  {
   id: "3",
   firstname: "Liberty",
   sirname: "Code",
   avatar: "",
   text: "text 100",
   likes: 100,
  },
 ],
};

export const addPostSlice = createSlice({
 name: "addPost",
 initialState,
 reducers: {
  setPost: (state, action: PayloadAction<PostSchema>) => {
   state.postsList = [...state.postsList, action.payload];
  },
 },
});

export const { actions: addPostActions } = addPostSlice;
export const { reducer: addPostReducer } = addPostSlice;
