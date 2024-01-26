import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";

export function Navbar() {
  return (
    <div className="">
      <div className="space-y-1 m-5">
        <div className="flex">
          <div className="flex w-1/3">
            <h1 className="text-lg font-medium leading-none align-middle self-center">
              vismaLite
            </h1>
          </div>
          <div className="flex w-1/3"></div>
          <div className="flex w-1/3 text-right justify-end">
            <ThemeToggle />
            <p className=" self-center">skibidi</p>
          </div>
        </div>
      </div>
      <Separator className="my-4" />
      <div className="flex h-5 items-center space-x-4 text-sm ml-5">
        <div>
          <Link href={"/"}>Hjem</Link>
        </div>
        <Separator orientation="vertical" />
        <div>Fag</div>
        <Separator orientation="vertical" />
        <div>Karakterer</div>
      </div>
    </div>
  );
}
