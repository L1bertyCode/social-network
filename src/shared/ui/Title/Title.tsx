import styled from "styled-components";

type ColorType = "primary" | "accent" | "notAccent";

interface TitleProps {
 children?: string;
 colorType?: ColorType;
}

export const Title = ({ children }: TitleProps) => {
 return <StyledTitle>{children}</StyledTitle>;
};
const StyledTitle = styled.div<TitleProps>``;
