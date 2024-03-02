import { DialogList } from "@/entities/Dialog";
import { Page } from "@/shared/layouts/Page";

interface DialogsPageProps {}

const DialogsPage = (props: DialogsPageProps) => {
 return (
  <Page>
   DialogsPage
   <DialogList />
  </Page>
 );
};

export default DialogsPage;
