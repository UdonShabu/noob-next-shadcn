import Calendar from "@/components/cards/calendar";
import General from "@/components/cards/general";
import { TableDemo } from "@/components/cards/table-demo";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";

export default function Home() {
  return (
    <main className="grid gap-6 ">
      <div className="grid grid-1 md:grid-cols-2 gap-6">
        <General />
        <div className="grid gap-6 h-full w-full ">
          <Calendar />
          <Calendar />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 overflow-hidden">
        <Card className=" w-full h-[280px]">One</Card>
        <Card className=" w-full h-[280px] overflow-scroll">
          <TableDemo />
        </Card>
        <Card className=" w-full h-[280px]">Three</Card>
      </div>
    </main>
  );
}
