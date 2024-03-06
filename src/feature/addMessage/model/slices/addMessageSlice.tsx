import { createSlice } from "@reduxjs/toolkit";
import { addMessageSchema } from "../types/addMessageSchema";
const initialState: addMessageSchema = {
 messagesList: [
  {
   id: "1",
   text: "some text",
   firstname: "Lib",
   sirname: "Code",
  },
 ],
};

const addMessageSlice = createSlice({
 name: "addMessage",
 initialState,
 reducers: {},
});
export const { actions: addMessageActions } =
 addMessageSlice;
export const { reducer: addMessageReducer } =
 addMessageSlice;
