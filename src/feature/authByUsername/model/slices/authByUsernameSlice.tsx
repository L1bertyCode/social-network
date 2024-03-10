import { ProfileSchema } from "@/entities/Profile";
import {
 PayloadAction,
 createSlice,
} from "@reduxjs/toolkit";
const initialState: ProfileSchema = {
 firstname: "",
 sirname: "",
};
export const authByUsernameSlice = createSlice({
 name: "authByUsername",
 initialState,
 reducers: {
  setProfile: (
   state,
   action: PayloadAction<ProfileSchema>
  ) => {
   console.log("action.payload", action.payload);

   state = { ...action.payload };
   console.log("state", state);
  },
 },
});
export const {
 actions: authByUsernameActions,
 reducer: authByUsernameReducer,
} = authByUsernameSlice;
