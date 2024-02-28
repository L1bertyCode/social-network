import { theme } from "@/app/styles/theme/theme";
import { variables } from "@/app/styles/variables";
import styled from "styled-components";

interface HeaderProps {}

export const Header = (props: HeaderProps) => {
 return <StyledHeader>Header</StyledHeader>;
};
const StyledHeader = styled.header`
 width: 100%;
 height: ${variables.heights.headerHeight};
 background-color: ${theme.colors["inverted-bg-color"]};
 color: ${theme.colors["inverted-text-color"]};
`;
