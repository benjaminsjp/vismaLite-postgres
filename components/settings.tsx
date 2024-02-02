import { GearIcon } from "@radix-ui/react-icons";

//Importerer dropdown menyen til settings
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { ThemeToggle } from "./theme-toggle";

export default function Settings() {
  return (
    <main className=" align-middle">
      <DropdownMenu>
        <DropdownMenuTrigger>
          <GearIcon className="h-5 w-5 ml-2" />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>Min profil</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <ThemeToggle />
          </DropdownMenuItem>
          <DropdownMenuItem>Billing</DropdownMenuItem>
          <DropdownMenuItem>Team</DropdownMenuItem>
          <DropdownMenuItem>Subscription</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </main>
  );
}
