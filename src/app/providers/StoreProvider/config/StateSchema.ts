import { ProfileSchema } from "@/entities/Profile";
import { addMessageSchema } from "@/feature/addMessage/model/types/addMessageSchema";
import { AddPostSchema } from "@/feature/addPost";

export interface StateSchema {
 profile: ProfileSchema;
 addPost: AddPostSchema;
 addMessage: addMessageSchema;
}
