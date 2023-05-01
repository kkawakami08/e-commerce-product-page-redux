"use client";
import { useState } from "react";

import MobileImages from "./components/MobileImages";
import { product } from "../productData";
import ProductDescription from "./components/ProductDescription";

export default function Home() {
  console.log(product.imagesURLs);
  return (
    <main>
      <div className="md:hidden">
        <MobileImages imageArray={product.imagesURLs} />
      </div>
      <ProductDescription product={product} />
    </main>
  );
}
