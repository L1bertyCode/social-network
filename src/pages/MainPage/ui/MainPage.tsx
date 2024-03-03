import { Page } from "@/shared/layouts/Page";

import { Card } from "@/shared/ui/Card/Card";
import styled from "styled-components";
import { CoverImage } from "@/widgets/CoverImage";
import { Profile } from "@/entities/Profile";
import { PostList } from "@/entities/Post";
import { Text } from "@/shared/ui/Text/Text";

import { AddPost } from "@/feature/addPost";

interface MainPageProps {
 className?: string;
}

const MainPage = ({}: MainPageProps) => {
 return (
  <Page>
   <StyledMainPage>
    <Profile className={"header"} />
    <div className={"content"}>
     {/* <StyledCard>info</StyledCard> */}
     <StyledCard>
      <AddPost />
     </StyledCard>
     <StyledCard>
      <Text>All posts</Text>
      <PostList />
     </StyledCard>
    </div>
    <StyledCard className="friends">friends</StyledCard>
   </StyledMainPage>
  </Page>
 );
};
export default MainPage;

const StyledCard = styled(Card)``;

const StyledMainPage = styled("div")`
 display: grid;
 grid-template-columns: repeat(3, 1fr);
 grid-template-areas:
  "h h h"
  "c c f";
 gap: 12px;

 .header {
  grid-area: h;
 }
 .content {
  grid-area: c;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.indents.indent12};
 }
 .friends {
  grid-area: f;
  width: 100%;
 }
`;
