import { AboutPage } from "@/pages/AboutPage";
import { MainPage } from "@/pages/MainPage";
import { NotFoundPage } from "@/pages/NotFoundPage";
import { ReactNode } from "react";
import { RouteProps } from "react-router-dom";

type ExtendsRouteProps = RouteProps & {
 icon?: ReactNode;
};
export const routesConfig: ExtendsRouteProps[] = [
 { element: <MainPage />, path: "/", icon: "" },
 { element: <AboutPage />, path: "/about", icon: "" },
 { element: <NotFoundPage />, path: "*", icon: "" },
];