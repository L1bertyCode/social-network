import { Page } from "@/shared/layouts/Page";
// @ts-ignore
import bg from "@/shared/assets/img/bg.jpg";
import { Card } from "@/shared/ui/Card/Card";
import styled from "styled-components";
import { CoverImage } from "@/widgets/CoverImage";

interface MainPageProps {
 className?: string;
}

const MainPage = ({}: MainPageProps) => {
 return (
  <StyledMainPage>
   <CoverImage className="cImg" src={bg} alt="bg" />
   <StyledCard className={"header"}>info</StyledCard>
   <div className={"content"}>
    <StyledCard>info</StyledCard>
    <StyledCard>form</StyledCard>
    <StyledCard>posts</StyledCard>
   </div>
   <StyledCard className="friends">friends</StyledCard>
  </StyledMainPage>
 );
};
export default MainPage;

const StyledCard = styled(Card)``;

const StyledMainPage = styled(Page)`
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
