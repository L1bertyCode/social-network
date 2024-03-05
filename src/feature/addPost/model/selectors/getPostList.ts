import { StateSchema } from "@/app/providers/StoreProvider";

export const getPostList = (state: StateSchema) =>
 state.addPost.postsList;
