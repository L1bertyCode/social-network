import { AboutPage } from "@/pages/AboutPage";
import { MainPage } from "@/pages/MainPage";
import { NotFoundPage } from "@/pages/NotFoundPage";
import { routesConfig } from "@/shared/config/routes/routesConfig";

import { Route, Routes } from "react-router-dom";
interface AppRouterProps {}
export const AppRouter = (props: AppRouterProps) => {
 return (
  <Routes>
   {routesConfig.map((routesItem) => (
    <Route
     key={routesItem.path}
     element={routesItem.element}
     path={routesItem.path}
    />
   ))}
  </Routes>
 );
};
