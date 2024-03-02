import { Page } from "@/shared/layouts/Page";
import bg from "@/shared/assets/img/bg.jpg";

import { Card } from "@/shared/ui/Card/Card";
import styled from "styled-components";
import { CoverImage } from "@/widgets/CoverImage";
import { Profile } from "@/entities/Profile";
import { PostList } from "@/entities/Post";
import { Text } from "@/shared/ui/Text/Text";
import { Input } from "@/shared/ui/Input/Input";

interface MainPageProps {
 className?: string;
}

const MainPage = ({}: MainPageProps) => {
 return (
  <Page>
   <StyledMainPage>
    <CoverImage className="cImg" src={bg} alt="bg" />
    <Profile className={"header"} />
    <div className={"content"}>
     <StyledCard>info</StyledCard>
     <StyledCard>
      form
      <Input placeholder={"What's news?"} />
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
  "i i i"
  "h h h"
  "c c f";
 gap: 12px;
 .cImg {
  grid-area: i;
 }
 .header {
  grid-area: h;
 }
 .content {
  grid-area: c;
  width: 100%;
 }
 .friends {
  grid-area: f;
  width: 100%;
 }
`;
