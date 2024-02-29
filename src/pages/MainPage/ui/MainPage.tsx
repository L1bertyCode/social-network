import { Page } from "@/shared/layouts/Page";
import { AppLink } from "@/shared/ui/AppLink/AppLink";
import styled from "styled-components";

interface MainPageProps {}

const MainPage = (props: MainPageProps) => {
 return (
  <StyledMainPage {...props}>
   MainPage
   <div className="bg info">info</div>
   <div className="bg content">content</div>
   <div className="bg friend">friend</div>
   <div className="bg from">from</div>
   <div className="bg posts">posts</div>
  </StyledMainPage>
 );
};
export default MainPage;
const StyledMainPage = styled(Page)`
 background: darkblue;
 width: 100%;
`;
