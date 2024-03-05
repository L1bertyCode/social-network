import { ProfileSchema } from "@/entities/Profile";
import { AddPostSchema } from "@/feature/addPost";

export interface StateSchema {
 profile: ProfileSchema;
 addPost: AddPostSchema;
}
