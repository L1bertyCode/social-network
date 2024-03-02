import { Button } from "@/shared/ui/Button/Button";
import { Card } from "@/shared/ui/Card/Card";

interface ProfileProps {
 className?: string;
}

export const Profile = ({ className }: ProfileProps) => {
 return (
  <Card className={className}>
   <div>Ava</div>
   <div>
    <span>Lib</span>
    <span>Code</span>
    <Button variant="filled">Edit</Button>
   </div>
  </Card>
 );
};
