import { ImgHTMLAttributes } from "react";
import styled from "styled-components";

interface AvatarProps
 extends ImgHTMLAttributes<HTMLImageElement> {
 src: string;
 alt?: string;
 className?: string;
}

export const Avatar = ({
 src,
 alt="ava",
 className,
}: AvatarProps) => {
 return (
  <StyledImg className={className} src={src} alt={alt} />
 );
};
const StyledImg = styled.img<AvatarProps>`
 border-radius: 50%;
`;
