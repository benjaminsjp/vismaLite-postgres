import Settings from "@/components/settings";
import Navigation from "@/components/dashboard/student/sidebar";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";

import { Button } from "@/components/ui/button";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import Fag from "@/components/dashboard/student/fag";
import Fravær from "@/components/dashboard/student/Fravær";
import Anmerkninger from "@/components/dashboard/student/Anmerkninger";
import LeggTilData from "@/components/dashboard/student/leggTilTestData";
export default function StudentSidebar() {
  return (
    <section className="">
      {/* Navbar */}
      <div className=" p-5 border-b border-muted flex sticky top-0 bg-background z-10">
        <div className="flex w-1/3">
          <h1 className=" text-xl">vismaLite Student</h1>
        </div>

        <div className="flex w-1/3">
          <LeggTilData />
        </div>
        <div className="flex w-1/3 text-right self-end justify-end align-middle">
          <p className=" pr-2">Benjamin Pedersen</p>

          <Settings />
        </div>
      </div>

      <div className=" flex flex-row h-screen border-r border-muted">
        <Navigation />
        <Fag />
        <Fravær />
        <Anmerkninger />
      </div>
    </section>
  );
}
