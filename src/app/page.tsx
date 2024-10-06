import Image from "next/image";
import Hero from "@/components/hero";
import Services from "@/components/services";
import Deals from "@/components/deals";
import Catogries from "@/components/catogries";
import Foryou from "@/components/Foryou";
import Successfulyymess from "@/components/Successfulyymess";
export default function Home() {
  return (
    <div>

     <Hero/>

    <Services/>

    <Deals/>

    <Catogries/>   

    <Foryou/>

    </div>
  );
}
