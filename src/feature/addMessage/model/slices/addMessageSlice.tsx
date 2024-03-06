import {
 PayloadAction,
 createSlice,
} from "@reduxjs/toolkit";
import { addMessageSchema } from "../types/addMessageSchema";
import { MessageSchema } from "@/entities/Message/model/message";
const initialState: addMessageSchema = {
 messagesList: [
  {
   id: "1",
   text: "some text",
   firstname: "Lib",
   sirname: "Code",
  },
  {
   id: "2",
   text: "text text",
   firstname: "Lib",
   sirname: "Code",
  },
  {
   id: "3",
   text: "text",
   firstname: "Lib",
   sirname: "Code",
  },
 ],
};

const addMessageSlice = createSlice({
 name: "addMessage",
 initialState,
 reducers: {
  setMessage: (
   state,
   action: PayloadAction<MessageSchema>
  ) => {
   state.messagesList = [
    ...state.messagesList,
    action.payload,
   ];
  },
 },
});
export const { actions: addMessageActions } =
 addMessageSlice;
export const { reducer: addMessageReducer } =
 addMessageSlice;
