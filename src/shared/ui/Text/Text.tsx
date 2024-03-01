import styled from "styled-components";

type TextColorType = "primary" | "accent" | "notAccent";

interface TextProps {
 children?: string;
 colorType?: TextColorType;
}

export const Text = ({ children }: TextProps) => {
 return <StyledText>{children}</StyledText>;
};
const StyledText = styled.div<TextProps>``;
