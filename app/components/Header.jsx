"use client";
import React from "react";
import Image from "next/image";
import menuIcon from "../../public/images/icon-menu.svg";
import logo from "../../public/images/logo.svg";
import cartIcon from "../../public/images/icon-cart.svg";
import profileImage from "../../public/images/image-avatar.png";

export default function Header() {
  return (
    <nav className="flex items-center justify-between p-5">
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
    </nav>
  );
}
