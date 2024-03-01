import { ImgHTMLAttributes } from "react";
import styled from "styled-components";

interface CoverImageProps
 extends ImgHTMLAttributes<HTMLImageElement> {
 src: string;
 alt: string;
 className?: string;
}

export const CoverImage = ({
 src,
 alt,
 className,
}: CoverImageProps) => {
 return (
  <StyledImg className={className} src={src} alt={alt} />
 );
};
const StyledImg = styled.img`
 width: 100%;
 height: 250px;
 border-radius: 16px;
`;
