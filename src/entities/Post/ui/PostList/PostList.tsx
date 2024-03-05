import { PostSchema } from "../../model/types/post";
import { Post } from "../Post/Post";

interface PostListProps {}
const list: PostSchema[] = [
 {
  id: "1",
  username: "Liberty",
  sirname: "Code",
  avatar: "",
  text: "text",
  likes: 0,
 },
 {
  id: "2",
  username: "Liberty",
  sirname: "Code",
  avatar: "",
  text: "text text",
  likes: 2,
 },
 {
  id: "3",
  username: "Liberty",
  sirname: "Code",
  avatar: "",
  text: "text 100",
  likes: 100,
 },
];

export const PostList = (props: PostListProps) => {
 return (
  <div>
   {list.map((item) => (
    <Post post={item} key={item.id} />
   ))}
  </div>
 );
};
