"use client";
import React from "react";
import Image from "next/image";
import menuIcon from "../../public/images/icon-menu.svg";
import logo from "../../public/images/logo.svg";
import cartIcon from "../../public/images/icon-cart.svg";
import closeIcon from "../../public/images/icon-close.svg";
import profileImage from "../../public/images/image-avatar.png";
import Link from "next/link";

export default function Header() {
  return (
    <nav className="relative">
      <div className="bg-black/75 absolute h-screen w-screen z-10">
        <div className="bg-white h-full  w-7/12 p-5 flex flex-col gap-10">
          <div className="w-4 flex items-center justify-center">
            <Image src={closeIcon} alt="Close icon" width={500} height={500} />
          </div>
          <ul className="flex flex-col gap-3">
            <li>
              <p className="font-bold">Collections</p>
            </li>
            <li>
              <p className="font-bold">Men</p>
            </li>
            <li>
              <p className="font-bold">Women</p>
            </li>
            <li>
              <p className="font-bold">About</p>
            </li>
            <li>
              <p className="font-bold">Contact</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex items-center justify-between p-5 relative">
        <div className="flex gap-5">
          <div className="w-6 flex items-center justify-center">
            <Image src={menuIcon} alt="Menu icon" width={500} height={500} />
          </div>
          <div className="w-44 flex items-center justify-center">
            <Image src={logo} alt="Logo" width={500} height={500} />
          </div>
        </div>
        <div className="flex gap-5">
          <div className="w-7 flex items-center justify-center">
            <Image src={cartIcon} alt="Cart icon" width={500} height={500} />
          </div>
          <div className="w-6 flex items-center justify-center">
            <Image
              src={profileImage}
              alt="Profile Image"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </nav>
  );
}
