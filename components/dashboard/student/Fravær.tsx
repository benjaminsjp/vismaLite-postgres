import { ScrollArea } from "../../ui/scroll-area";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../ui/accordion";
import { Separator } from "../../ui/separator";

export default function Fravær() {
  return (
    <div className="flex bg-card border border-border rounded-lg w-1/4 m-10 ml-5 h-3/4">
      <div className="rounded-lg w-full ">
        <ScrollArea className="flex h-full ">
          {/* Overskrift for Fravær kortet */}
          <div className="sticky top-0 bg-background rounded-lg z-10">
            <h1 className="py-3 px-5 text-xl  ">
              <b>Fravær</b>
            </h1>
            <Separator />
          </div>
          {/* Innhold som viser tidspunk man fikk fravær */}
          <div className="flex flex-1 px-5 items-center hover:underline justify-between py-4 text-sm font-medium">
            <p className=" text-xl">02.02.2024</p>
          </div>
        </ScrollArea>
      </div>
    </div>
  );
}
