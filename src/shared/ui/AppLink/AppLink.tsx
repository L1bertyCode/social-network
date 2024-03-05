import { ReactNode } from "react";
import { Link, LinkProps } from "react-router-dom";

import styled from "styled-components";

interface AppLinkProps extends LinkProps {
 children?: ReactNode;
 className?: string;
}

export const AppLink = ({
 to,
 children,
 className,
}: AppLinkProps) => {
 return (
  <SyledAppLink className={className} to={to}>
   {children}
  </SyledAppLink>
 );
};
const SyledAppLink = styled(Link)`
 /* &:hover {
  opacity: ${({ theme }) => theme.opacity.opacity70};
 } */
`;
