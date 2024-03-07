import { AboutPage } from "@/pages/AboutPage";
import { MainPage } from "@/pages/MainPage";
import NotFoundPage from "@/pages/NotFoundPage/ui/NotFoundPage";
import { MainLayout } from "@/shared/layouts/MainLayout";
import { Navbar } from "@/widgets/Navbar/ui/Navbar";

import { Sidebar } from "@/widgets/Sidebar";
import { Suspense } from "react";

import { AppRouter } from "./AppRouter";
import { Page } from "@/shared/layouts/Page";
import { Modal } from "@/shared/ui/Modal/Modal";

export const App = () => {
 return (
  <div>
   <Modal />
   <MainLayout
    header={<Navbar />}
    sidebar={<Sidebar />}
    content={
     <Suspense fallback={<Page>Loading...</Page>}>
      <AppRouter />
     </Suspense>
    }
    // footer={<div>footer</div>}
   />
  </div>
 );
};
