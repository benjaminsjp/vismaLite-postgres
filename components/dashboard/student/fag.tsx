import { ScrollArea } from "../../ui/scroll-area";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../ui/accordion";
import { Separator } from "../../ui/separator";

export default function Fag() {
  return (
    <div className="flex bg-card border border-border rounded-lg w-1/4 m-10 mr-5 h-3/4">
      <div className="rounded-lg w-full ">
        <ScrollArea className="flex h-full ">
          {/* Overskrift på fag kortet */}
          <div className="sticky top-0 bg-background rounded-lg z-10">
            <h1 className="py-3 px-5 text-xl  ">
              <b>Fag</b>
            </h1>
            <Separator />
          </div>
          {/* Innhold som viser karakterer og fag */}
          <Accordion type="single" collapsible className=" px-5">
            <AccordionItem value="item-1">
              <AccordionTrigger className=" text-xl">Matte</AccordionTrigger>
              <AccordionContent>
                <p>Vurdering: 6</p>
                <p>Beskrivelse: Du er flink i matte</p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className=" text-xl">
                Programmering
              </AccordionTrigger>
              <AccordionContent>
                <p>Vurdering: 6</p>
                <p>Beskrivelse: Du er flink i Programmering</p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className=" text-xl">Matte</AccordionTrigger>
              <AccordionContent>
                <p>Vurdering: 6</p>
                <p>Beskrivelse: Du er flink i matte</p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className=" text-xl">Matte</AccordionTrigger>
              <AccordionContent>
                <p>Vurdering: 6</p>
                <p>Beskrivelse: Du er flink i matte</p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger className=" text-xl">Matte</AccordionTrigger>
              <AccordionContent>
                <p>Vurdering: 6</p>
                <p>Beskrivelse: Du er flink i matte</p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger className=" text-xl">Matte</AccordionTrigger>
              <AccordionContent>
                <p>Vurdering: 6</p>
                <p>Beskrivelse: Du er flink i matte</p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-7">
              <AccordionTrigger className=" text-xl">Matte</AccordionTrigger>
              <AccordionContent>
                <p>Vurdering: 6</p>
                <p>Beskrivelse: Du er flink i matte</p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-8">
              <AccordionTrigger className=" text-xl">Matte</AccordionTrigger>
              <AccordionContent>
                <p>Vurdering: 6</p>
                <p>Beskrivelse: Du er flink i matte</p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </ScrollArea>
      </div>
    </div>
  );
}
