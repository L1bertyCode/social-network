import { Avatar } from "@/shared/ui/Avatar/Avatar";
import { Text } from "@/shared/ui/Text/Text";
import styled from "styled-components";
import { PostSchema } from "../../model/post";

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
     <DivImg>
      {post.username.substring(0, 1)}
      {post.sirname.substring(0, 1)}
     </DivImg>
    )}
    <PostName>
     {post.username} {post.sirname}
    </PostName>
   </PostHeader>
   <Text>{post.text}</Text>
  </StyledPost>
 );
};
const DivImg = styled.div`
 content: "";
 background: ${({ theme }) => theme.colors["color-accent"]};
 width: 50px;
 height: 50px;
 border-radius: 50%;
 display: flex;
 align-items: center;
 justify-content: center;
 font-size: 24px;
`;
const PostHeader = styled.div`
 display: flex;
 align-items: center;
 margin-bottom: ${({ theme }) => theme.indents.indent8};
`;
const PostName = styled.div`
 margin-left: ${({ theme }) => theme.indents.indent8};
`;
const StyledPost = styled.div``;
