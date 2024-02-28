import Calendar from "@/components/cards/calendar";
import General from "@/components/cards/general";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";

export default function Home() {
  return (
    <main className=" grid gap-6 grid-rows-2">
      <div className="grid grid-cols-2 gap-6">
        <General />
        <div className="grid gap-6 h-full w-full ">
          <Calendar />
          <Calendar />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-8">
        <Card className=" w-full h-[280px]">One</Card>
        <Card className=" w-full h-[280px]">
          {/* Make Table scrollable inside itself  */}
        </Card>
        <Card className=" w-full h-[280px]">Three</Card>
      </div>
    </main>
  );
}
