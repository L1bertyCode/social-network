import { Avatar } from "@/shared/ui/Avatar/Avatar";
import { AvatarDiv } from "@/shared/ui/Avatar/AvatarDiv";
import { Button } from "@/shared/ui/Button/Button";
import { Card } from "@/shared/ui/Card/Card";
import { CoverImage } from "@/widgets/CoverImage";
import styled from "styled-components";
import bg from "@/shared/assets/img/bg.jpg";
import { useSelector } from "react-redux";
import { getPostList } from "@/feature/addPost";
import { getProfile } from "../model/selectors/getProfile";

interface ProfileProps {
 className?: string;
}

const avaSizeLeftPadding = "150px";
export const Profile = ({ className }: ProfileProps) => {
 const { firstname, sirname, avatar } =
  useSelector(getProfile);

 return (
  <ProfileCard padding="0" className={className}>
   <ProfileCardWrapper>
    <ProfileUser>
     <Ava>
      {avatar ? (
       <Avatar src={avatar} className="profile_ava" />
      ) : (
       <AvatarDiv
        className="profile_ava"
        size={avaSizeLeftPadding}
        firstname={firstname}
        sirname={sirname}
       />
      )}
     </Ava>

     <Name>
      {firstname} {sirname}
     </Name>
    </ProfileUser>
    <Button variant="filled">Edit</Button>
   </ProfileCardWrapper>
  </ProfileCard>
 );
};
const ProfileUser = styled.div`
 display: flex;
 justify-content: space-between;
 align-items: center;
`;
const Ava = styled.div`
 position: absolute;
 top: 0;
 transform: translateY(-50%);
 border: 5px solid
  ${({ theme }) => theme.colors["bg-color"]};
 border-radius: 50%;
`;
const Name = styled.div`
 margin-left: ${({ theme }) => theme.indents.indent8};
 padding-left: ${avaSizeLeftPadding};
`;
const ProfileCard = styled(Card)`
 height: 400px;
 position: relative;
 background: ${({ theme }) =>
   theme.colors["bg-color-light"]}
  url(${bg}) no-repeat center / cover;
 display: flex;
 flex-direction: column;
 justify-content: end;
`;
const ProfileCardWrapper = styled(Card)`
 position: relative;
 width: 100%;
 height: 100px;
 display: flex;
 justify-content: space-between;
 align-items: center;
 background: ${({ theme }) => theme.colors["bg-color"]};
`;
