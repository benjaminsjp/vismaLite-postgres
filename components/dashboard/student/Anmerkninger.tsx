import { ScrollArea } from "../../ui/scroll-area";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../ui/accordion";
import { Separator } from "../../ui/separator";

export default function Anmerkninger() {
  return (
    <div className="flex bg-card border border-border rounded-lg w-1/4 m-10 ml-5 h-3/4">
      <div className="rounded-lg w-full ">
        <ScrollArea className="flex h-full ">
          {/* Overskrift for Fravær kortet */}
          <div className="sticky top-0 bg-background rounded-lg z-10">
            <h1 className="py-3 px-5 text-xl  ">
              <b>Anmerkninger</b>
            </h1>
            <Separator />
          </div>
          {/* Innhold som viser tidspunk man fikk fravær */}
          <Accordion type="single" collapsible className=" px-5">
            <AccordionItem value="item-1">
              <AccordionTrigger className=" text-xl">
                Oppførsel
              </AccordionTrigger>
              <AccordionContent>
                <p>Beskrivelse: Bråker og herjer i klasserommet</p>

                <p className="pt-2 text-xs">02.02.2024</p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </ScrollArea>
      </div>
    </div>
  );
}
