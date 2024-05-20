import Back from "@/components/Back";
import Forground from "@/components/Forground";
import Image from "next/image";

export default function Home() {
  return (
    // this is the main div that holds the entire page
    <div className="w-full h-screen bg-zinc-800 relative">
      <Back />
      <Forground/>
</div>
  );
}


