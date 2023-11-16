import CrabandShellfish from "@/components/CrabandShellfish";
import FishFillets from "@/components/FishFillets";
import FreshText from "@/components/FreshText";
import NumberText from "@/components/NumberText";
import ProductItem from "@/components/ProductItem";
import SaucesAndSalsa from "@/components/SaucesAndSalsa";
import Seasonings from "@/components/Seasonings";
import Shrimp from "@/components/Shrimp";
import SpecialItems from "@/components/SpecialItems";
import { data } from "@/utils/data";


export default function Home() {
  const { products, shrimp, CrabAndShellfish, SaucesandSalsa, Seasoning, Special } = data
  return (
    <div className="max-w[00px]:">
      <div className="flex justify-center items-center pt-2">
        <FreshText />
      </div>
      <div className="flex justify-center items-center pt-2">
        <NumberText />
      </div>
      <div className="flex justify-center items-center">
        <FishFillets />
      </div>
      <div className="flex justify-center items-center grid grid-rows-1">
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
      <div className="flex justify-center items-center pt-6">
        <Shrimp />
      </div>
      <div className="flex justify-center items-center grid grid-rows-1">
        {shrimp.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
      <div className="flex justify-center items-center pt-6">
        <CrabandShellfish />
      </div>
      <div className="flex justify-center items-center grid grid-rows-1">
        {CrabAndShellfish.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
      <div className="flex justify-center items-center pt-6">
        <SaucesAndSalsa />
      </div>
      <div className="flex justify-center items-center grid grid-rows-1">
        {SaucesandSalsa.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
      <div className="flex justify-center items-center pt-6">
        <Seasonings />
      </div>
      <div className="flex justify-center items-center grid grid-rows-1">
        {Seasoning.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
      <div className="flex justify-center items-center pt-6">
        <SpecialItems />
      </div>
      <div className="flex justify-center items-center grid grid-rows-1">
        {Special.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>

    </div>
  )
}
