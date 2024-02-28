import General from "@/components/cards/general";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="grid grid-cols-2">
      {/* Make this layout https://youtu.be/NJNOHU_ADko?t=198 */}
      <General />
    </main>
  );
}
