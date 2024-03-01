import { Button } from "@/shared/ui/Button/Button";
import { Card } from "@/shared/ui/Card/Card";

interface ProfileProps {}

export const Profile = (props: ProfileProps) => {
 return (
  <Card>
   <div>Ava</div>
   <div>
    <span>Lib</span>
    <span>Code</span>
    <Button>Edit</Button>
   </div>
  </Card>
 );
};
