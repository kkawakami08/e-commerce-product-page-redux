"use client";
import tempImage from "../public/images/image-product-1.jpg";
import Image from "next/image";
import MobileImages from "./components/MobileImages";

export default function Home() {
  return (
    <main>
      <MobileImages />
      <div>DETAILS</div>
    </main>
  );
}
