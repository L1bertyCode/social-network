import { profileReducer } from "@/entities/Profile";
import { addMessageReducer } from "@/feature/addMessage";
import { addPostReducer } from "@/feature/addPost/model/slices/addPostSlice";
import { configureStore } from "@reduxjs/toolkit";
import {
 TypedUseSelectorHook,
 useDispatch,
 useSelector,
} from "react-redux";

export const store = configureStore({
 reducer: {
  addMessage: addMessageReducer,
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
