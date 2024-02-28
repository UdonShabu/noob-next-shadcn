import { Calculator, Calendar, Receipt, Settings, User } from "lucide-react";
import UserItem from "./user-item";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";

export default function Sidebar() {
  const menuList = [
    {
      group: "Suggestions",
      items: [
        {
          icon: <Calendar />,
          link: "/",
          text: "Calendar",
        },

        {
          icon: <Calculator />,
          link: "/",
          text: "Calculator",
        },
      ],
    },
    {
      group: "Settings",
      items: [
        {
          icon: <User />,
          link: "/",
          text: "Profile",
        },
        {
          icon: <Receipt />,
          link: "/",
          text: "Billing",
        },
        {
          icon: <Settings />,
          link: "/",
          text: "Settings",
        },
      ],
    },
  ];
  return (
    <div className="hidden lg:flex fixed flex-col min-w-[300px] min-h-screen border-r gap-4">
      <div>
        <UserItem />
      </div>
      <div className="grow">
        <Command>
          <CommandList>
            {menuList.map((menu) => (
              <CommandGroup heading={menu.group} key={menu.group}>
                {menu.items.map((item) => (
                  <CommandItem
                    key={item.text}
                    className="flex gap-x-2 cursor-pointer"
                  >
                    {item.icon}
                    {item.text}
                  </CommandItem>
                ))}
              </CommandGroup>
            ))}
          </CommandList>
        </Command>
      </div>
      <div>Setting</div>
    </div>
  );
}
