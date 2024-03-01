import styled from "styled-components";

type ColorType = "primary" | "accent" | "notAccent";

interface TextProps {
 children?: string;
 colorType?: ColorType;
}

export const Text = ({ children }: TextProps) => {
 return <StyledText>{children}</StyledText>;
};
const StyledText = styled.div<TextProps>``;
