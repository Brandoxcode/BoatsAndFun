import CrabandShellfish from "@/components/CrabandShellfish";
import FishFillets from "@/components/FishFillets";
import FreshText from "@/components/FreshText";
import Header from "@/components/Header";
import NumberText from "@/components/NumberText";
import SaucesAndSalsa from "@/components/SaucesAndSalsa";
import Seasonings from "@/components/Seasonings";
import Shrimp from "@/components/Shrimp";
import SpecialItems from "@/components/SpecialItems";

export default function Home() {
  return (
    <div >
      <div className="pt-1.5">
        <Header />
      </div>
      <div className="flex justify-center items-center pt-2">
        <FreshText />
      </div>
      <div className="flex justify-center items-center pt-2">
        <NumberText />
      </div>
      <div className="flex justify-center items-center">
        <FishFillets />
      </div>
      <div className="flex justify-center items-center pt-6">
        <Shrimp />
      </div>
      <div className="flex justify-center items-center pt-6">
        <CrabandShellfish />
      </div>
      <div className="flex justify-center items-center pt-6">
        <SaucesAndSalsa />
      </div>
      <div className="flex justify-center items-center pt-6">
        <Seasonings />
      </div>
      <div className="flex justify-center items-center pt-6">
        <SpecialItems />
      </div>
      <div className="w-screen h-screen flex justify-center items-center">
        <h1 className="text-6xl text-black max-w-[600px] mx-auto">Hola</h1>
      </div>
    </div>
  )
}
