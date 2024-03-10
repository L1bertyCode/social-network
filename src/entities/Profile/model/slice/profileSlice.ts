import {
 PayloadAction,
 createSlice,
} from "@reduxjs/toolkit";
import { ProfileSchema } from "../types/profile";
const initialState: ProfileSchema = {
 firstname: "Lib",
 sirname: "Code",
};
export const profileSlice = createSlice({
 name: "profile",
 initialState,
 reducers: {
  changeProfile: (
   state,
   action: PayloadAction<ProfileSchema>
  ) => {
   state = action.payload;
  },
 },
});
export const {
 actions: profileActions,
 reducer: profileReducer,
} = profileSlice;
