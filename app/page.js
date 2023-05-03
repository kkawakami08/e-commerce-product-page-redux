"use client";
import CartView from "./components/CartView";
import MobileImages from "./components/MobileImages";
import DesktopImages from "./components/DesktopImages";
import { product } from "../productData";
import ProductDescription from "./components/ProductDescription";
import { useSelector } from "react-redux";

export default function Home() {
  const { visible } = useSelector((state) => state.cart);
  return (
    <main className="relative md:w-full  md:py-16 md:px-32 md:flex md:justify-between md:gap-20 md:items-center">
      {visible && <CartView />}
      <div className="hidden md:block w-5/12">
        <DesktopImages imageArray={product.imagesURLs} />
      </div>
      <div className="md:hidden">
        <MobileImages imageArray={product.imagesURLs} />
      </div>
      <ProductDescription product={product} />
    </main>
  );
}
