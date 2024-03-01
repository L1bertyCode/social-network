import styled from "styled-components";

type TitleColorType = "primary" | "accent" | "notAccent";

interface TitleProps {
 children?: string;
 colorType?: TitleColorType;
}

export const Title = ({ children }: TitleProps) => {
 return <StyledTitle>{children}</StyledTitle>;
};
const StyledTitle = styled.div<TitleProps>``;
