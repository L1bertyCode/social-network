import { PostSchema } from "../../model/post";
import { Post } from "../Post/Post";

type Props = {};
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

export const PostList = (props: Props) => {
 return (
  <div>
   {list.map((item) => (
    <Post post={item} key={item.id} />
   ))}
  </div>
 );
};
