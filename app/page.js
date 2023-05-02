"use client";
import CartView from "./components/CartView";
import MobileImages from "./components/MobileImages";
import { product } from "../productData";
import ProductDescription from "./components/ProductDescription";
import { useSelector } from "react-redux";

export default function Home() {
  const { visible } = useSelector((state) => state.cart);
  return (
    <main className="relative ">
      {visible && <CartView />}

      <div className="md:hidden">
        <MobileImages imageArray={product.imagesURLs} />
      </div>
      <ProductDescription product={product} />
    </main>
  );
}
