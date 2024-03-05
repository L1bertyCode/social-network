import { Post } from "../Post/Post";
import { getPostList } from "@/feature/addPost";
import { useSelector } from "react-redux";

interface PostListProps {}

export const PostList = (props: PostListProps) => {
 const stateList = useSelector(getPostList);
 return (
  <div>
   {stateList.map((item) => (
    <Post post={item} key={item.id} />
   ))}
  </div>
 );
};
