import { MainLayout } from "../shared/layouts/MainLayout";

export const App = () => {
 return (
  <div>
   <MainLayout
    header={<div>header</div>}
    content={<div>content</div>}
    navbar={<div>navbar</div>}
    footer={<div>footer</div>}
   />
  </div>
 );
};
