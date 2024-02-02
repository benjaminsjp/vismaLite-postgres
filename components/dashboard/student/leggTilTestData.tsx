"use client";
import { Button } from "@/components/ui/button";
export default function LeggTilData() {
  const insertData = async () => {
    const response = await fetch("/api/", { method: "POST" });

    if (!response.ok) {
      console.error("Error:", response.status, response.statusText);
      return;
    }

    if (response.headers.get("Content-Type")?.includes("application/json")) {
      const data = await response.json();
      console.log(data);
    } else {
      console.log("Response is not JSON");
    }
  };

  return (
    <div>
      <Button onClick={insertData} />
    </div>
  );
}
