import General from "@/components/cards/general";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-blue-400 grid gap-6">
      <div className="grid grid-cols-2 gap-6">
        {/* Make this layout https://youtu.be/NJNOHU_ADko?t=198 */}
        <General />
        <div className="grid gap-8">
          <Card className=" w-full h-full">One</Card>
          <Card className=" w-full h-full">Two</Card>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-8">
        <Card className=" w-full h-[280px]">One</Card>
        <Card className=" w-full h-[280px]">Two</Card>
        <Card className=" w-full h-[280px]">Three</Card>
      </div>
    </main>
  );
}
