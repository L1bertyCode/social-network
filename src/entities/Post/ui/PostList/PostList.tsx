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
