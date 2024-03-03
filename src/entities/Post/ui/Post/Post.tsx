import { Avatar } from "@/shared/ui/Avatar/Avatar";
import { Text } from "@/shared/ui/Text/Text";
import styled from "styled-components";
import { PostSchema } from "../../model/post";
import { AvatarDiv } from "@/shared/ui/Avatar/AvatarDiv";

interface PostProps {
 post?: PostSchema;
}

export const Post = ({ post }: PostProps) => {
 if (!post) return null;
 return (
  <StyledPost>
   <PostHeader>
    {post.avatar ? (
     <Avatar src={post.avatar} />
    ) : (
     <AvatarDiv
      username={post?.username}
      sirname={post?.sirname}
     />
    )}
    <PostName>
     {post.username} {post.sirname}
    </PostName>
   </PostHeader>
   <Text>{post.text}</Text>
  </StyledPost>
 );
};
const PostHeader = styled.div`
 display: flex;
 align-items: center;
 margin-bottom: ${({ theme }) => theme.indents.indent8};
`;
const PostName = styled.div`
 margin-left: ${({ theme }) => theme.indents.indent8};
`;
const StyledPost = styled.div`
 margin-top: 12px;
`;
