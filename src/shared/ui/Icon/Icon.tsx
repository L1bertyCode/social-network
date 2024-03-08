import { FunctionComponent, SVGProps } from "react";

interface IconProps extends SVGProps<SVGElement> {
 className?: string;

 Svg: FunctionComponent<SVGProps<SVGElement>>;
}

export const Icon = ({
 className,
 Svg,
 ...otherProps
}: IconProps) => {
 const icon = <Svg className={className} {...otherProps} />;
 return icon;
};
