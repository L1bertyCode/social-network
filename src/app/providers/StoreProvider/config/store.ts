import { profileReducer } from "@/entities/Profile";
import { addPostReducer } from "@/feature/addPost/model/slice/addPostSlice";
import { configureStore } from "@reduxjs/toolkit";
import {
 TypedUseSelectorHook,
 useDispatch,
 useSelector,
} from "react-redux";

export const store = configureStore({
 reducer: {
  addPost: addPostReducer,
  profile: profileReducer,
 },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch =
 useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> =
 useSelector;
