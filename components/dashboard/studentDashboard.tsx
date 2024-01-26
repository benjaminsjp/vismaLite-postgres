import Link from "next/link";
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";
import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from "@/components/ui/table";
import { JSX, SVGProps } from "react";
import { Navbar } from "./student/navbar";
import { cn } from "@/lib/utils";

export default function Component() {
  return <Navbar />;
}
