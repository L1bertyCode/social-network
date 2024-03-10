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
import { useState } from "react";
import { Input } from "@/shared/ui/Input/Input";
import { useAppDispatch } from "@/app/providers/StoreProvider/config/store";
import { profileActions } from "../model/slice/profileSlice";

interface ProfileProps {
 className?: string;
}

const avaSizeLeftPadding = "150px";
export const Profile = ({ className }: ProfileProps) => {
 const dispatch = useAppDispatch();
 const { firstname, sirname, avatar } =
  useSelector(getProfile);
 const [isChange, setIsChange] = useState<boolean>(false);
 const [isFirstname, setIsFirstname] = useState(firstname);
 const [isSirname, setIsSirname] = useState(sirname);
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
     {!isChange ? (
      <Name>
       {isFirstname} {isSirname}
      </Name>
     ) : (
      <Name>
       <Input
        value={isFirstname}
        onChange={(value: string) => setIsFirstname(value)}
       />
       <Input
        value={isSirname}
        onChange={(value: string) => setIsSirname(value)}
       />
      </Name>
     )}
    </ProfileUser>

    {!isChange ? (
     <Button
      onClick={() => setIsChange(true)}
      variant="filled"
     >
      Edit
     </Button>
    ) : (
     <Button
      onClick={() => {
       setIsChange(false);
       dispatch(
        profileActions.changeProfile({
         firstname: isFirstname,
         sirname: isSirname,
        })
       );
      }}
      variant="filled"
     >
      Save
     </Button>
    )}
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
 display: flex;
 gap: 12px;
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
