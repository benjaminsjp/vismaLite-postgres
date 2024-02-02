"use client";
import { BellIcon, CheckIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type CardProps = React.ComponentProps<typeof Card>;

export default function Login({ className, ...props }: CardProps) {
  const [role, setRole] = useState("");
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Logg inn</CardTitle>
        <CardDescription>Logg inn som enten lærer eller elev.</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="navn">Fornavn</Label>
              <Input id="fnavn" placeholder="Ditt fornavn" />
              <Label htmlFor="enavn">Etternavn</Label>
              <Input id="enavn" placeholder="Ditt etternavn" />
              <Label htmlFor="e-post">E-post</Label>
              <Input id="Navn" placeholder="Din e-post adresse" />
              <Label htmlFor="password">Passord</Label>
              <Input id="Navn" placeholder="Ditt passord" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="framework">Rolle</Label>
              <Select onValueChange={setRole}>
                <SelectTrigger id="Rolle">
                  <SelectValue placeholder="Rolle" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="teacher">Lærer</SelectItem>
                  <SelectItem value="student">Elev</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Link href={`/${role}`}>
          <Button>Logg inn</Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
