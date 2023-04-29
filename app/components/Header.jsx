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

  // close mobile menu when clicking outside of element
  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
  }, []);

  const refOne = useRef(null);

  const handleClickOutside = (e) => {
    if (!refOne.current.contains(e.target)) {
      handleOnClick();
    }
  };

  return (
    <nav className="relative md:border-b-2 ">
      {/* mobile menu popup */}
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
      {/* header content */}

      <div className="flex items-center justify-between p-5 relative ">
        <div className="flex gap-5 md:gap-14 ">
          {/* mobile only hamburger menu icon */}
          <div
            className="w-6 flex items-center justify-center md:hidden"
            onClick={handleOnClick}
          >
            <Image src={menuIcon} alt="Menu icon" width={500} height={500} />
          </div>
          {/* end hamburger menu icon */}
          <div className="w-44 flex items-center justify-center md:w-32">
            <Image src={logo} alt="Logo" width={500} height={500} />
          </div>
          <ul className="hidden md:flex gap-10 text-darkGrayishBlue items-end">
            <li className="hover:border-b-4 border-primaryOrange hover:text-veryDarkBlue hover:cursor-pointer">
              <p className="">Collections</p>
            </li>
            <li className="hover:border-b-4 border-primaryOrange hover:text-veryDarkBlue hover:cursor-pointer">
              <p className="">Men</p>
            </li>
            <li className="hover:border-b-4 border-primaryOrange hover:text-veryDarkBlue hover:cursor-pointer">
              <p className="">Women</p>
            </li>
            <li className="hover:border-b-4 border-primaryOrange hover:text-veryDarkBlue hover:cursor-pointer">
              <p className="">About</p>
            </li>
            <li className="hover:border-b-4 border-primaryOrange hover:text-veryDarkBlue hover:cursor-pointer">
              <p className="">Contact</p>
            </li>
          </ul>
        </div>
        <div className="flex gap-10 items-center">
          <div className="relative">
            <div className="w-7 flex items-center justify-center">
              <Image src={cartIcon} alt="Cart icon" width={500} height={500} />
            </div>
            {/* cart item quantity */}
            <div className="bg-primaryOrange flex items-center justify-center rounded-lg absolute bottom-4 -right-2 w-6 md:bottom-4 md:w-5">
              <p className="text-white text-xs font-normal">3</p>
            </div>
            {/* end cart item quantity */}
          </div>
          <div className="w-6 flex items-center justify-center md:w-10">
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
