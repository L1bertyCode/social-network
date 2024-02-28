import { Header } from "@/widgets/Header";
import { MainLayout } from "../shared/layouts/MainLayout";
import { Sidebar } from "@/widgets/Sidebar";

export const App = () => {
 return (
  <div>
   <MainLayout
    header={<Header />}
    sidebar={<Sidebar />}
    content={<div>content</div>}
    // footer={<div>footer</div>}
   />
  </div>
 );
};
