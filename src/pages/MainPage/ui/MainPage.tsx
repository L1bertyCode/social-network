import { Page } from "@/shared/layouts/Page";
import bg from "@/shared/assets/img/bg.jpg";

import { Card } from "@/shared/ui/Card/Card";
import styled from "styled-components";
import { CoverImage } from "@/widgets/CoverImage";
import { Profile } from "@/app/entities/Profile";

interface MainPageProps {
 className?: string;
}

const MainPage = ({}: MainPageProps) => {
 return (
  <Page>
   <StyledMainPage>
    <CoverImage className="cImg" src={bg} alt="bg" />
    <StyledCard className={"header"}>
     <Profile />
    </StyledCard>
    <div className={"content"}>
     <StyledCard>info</StyledCard>
     <StyledCard>form</StyledCard>
     <StyledCard>posts</StyledCard>
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
