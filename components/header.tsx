import { Bell } from "lucide-react";
import CommandDemo from "./command-demo";
import { Button } from "./ui/button";

export default function Header() {
  return (
    <div className=" grid grid-cols-2 justify-between items-start m-3">
      <CommandDemo />
      <div className="flex items-center justify-end">
        <Button variant="outline" size="icon">
          <Bell className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
