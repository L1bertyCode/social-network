import styled from "styled-components";

interface AvatarDivProps {
 className?: string;
 firstname?: string;
 sirname?: string;
 size?: string;
}

export const AvatarDiv = ({
 className,
 firstname,
 sirname,
 size = "50px",
 ...otherProps
}: AvatarDivProps) => {
 return (
  <DivImg
   {...otherProps}
   style={{
    width: size,
    height: size,
    fontSize: `${Number(size.replace("px", "")) / 2}px`,
   }}
   className={className}
  >
   {firstname?.substring(0, 1)}
   {sirname?.substring(0, 1)}
  </DivImg>
 );
};
const DivImg = styled.div`
 content: "";
 background: ${({ theme }) => theme.colors["color-accent"]};
 border-radius: 50%;
 display: flex;
 align-items: center;
 justify-content: center;
`;
