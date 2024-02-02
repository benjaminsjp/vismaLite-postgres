import React from "react";
import { cn } from "@/lib/utils";

import Login from "@/components/login/login";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function home() {
  return (
    <main>
      <div className=" justify-center align-middle text-center m-20 mb-5">
        <h1 className=" text-2xl ">vismaLite</h1>
      </div>
      <div className="flex">
        <div className="flex w-1/3"></div>
        <div className=" flex w-1/3">
          <Login />
        </div>
        <div className="flex w-1/3"></div>
      </div>
      <div></div>
    </main>
  );
}
