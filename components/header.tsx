import { Bell } from "lucide-react";
import CommandDemo from "./command-demo";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

export default function Header() {
  return (
    <div className=" grid grid-cols-2 justify-between items-start m-3 border-b pb-4">
      <CommandDemo />
      <div className="flex items-center justify-end">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon" className="relative">
              <div className="w-4 h-4 bg-red-400 rounded-full absolute right-0 top-0"></div>
              <Bell className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuItem>
              Profile
              <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
