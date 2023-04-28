"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import menuIcon from "../../public/images/icon-menu.svg";
import logo from "../../public/images/logo.svg";
import cartIcon from "../../public/images/icon-cart.svg";
import closeIcon from "../../public/images/icon-close.svg";
import profileImage from "../../public/images/image-avatar.png";

export default function Header() {
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleOnClick = () => {
    setToggleMenu((prev) => !prev);
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
  }, []);
  const refOne = useRef(null);
  const handleClickOutside = (e) => {
    if (!refOne.current.contains(e.target)) {
      console.log("outside div");
      handleOnClick();
    } else {
      console.log("inside div");
    }
  };

  return (
    <nav className="relative">
      {toggleMenu && (
        <div className="bg-black/75 absolute h-screen w-screen z-10">
          <div
            className="bg-white h-full  w-7/12 p-5 flex flex-col gap-10"
            ref={refOne}
          >
            <div
              className="w-4 flex items-center justify-center"
              onClick={handleOnClick}
            >
              <Image
                src={closeIcon}
                alt="Close icon"
                width={500}
                height={500}
              />
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
      )}

      <div className="flex items-center justify-between p-5 relative">
        <div className="flex gap-5">
          <div
            className="w-6 flex items-center justify-center"
            onClick={handleOnClick}
          >
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
