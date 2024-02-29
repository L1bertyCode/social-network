import { AboutPage } from "@/pages/AboutPage";
import { MainPage } from "@/pages/MainPage";
import NotFoundPage from "@/pages/NotFoundPage/ui/NotFoundPage";
import { MainLayout } from "@/shared/layouts/MainLayout";
import { Navbar } from "@/widgets/Navbar/ui/Navbar";

import { Sidebar } from "@/widgets/Sidebar";
import { Suspense } from "react";

import { AppRouter } from "./AppRouter";

export const App = () => {
 return (
  <div>
   <MainLayout
    header={<Navbar />}
    sidebar={<Sidebar />}
    content={
     <Suspense fallback={<div>Loading...</div>}>
      <AppRouter />
     </Suspense>
    }
    // footer={<div>footer</div>}
   />
  </div>
 );
};
