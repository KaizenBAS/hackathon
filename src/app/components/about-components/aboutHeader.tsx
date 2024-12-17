"use client";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";


const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prevState) => !prevState);
  };

  return (
    <header className="bg-white py-4">
      <div className="container mx-auto flex items-center justify-between px-4">
        <div className="text-[24px] font-bold text-[#252B42] mr-8">
          Bandage
        </div>

        <nav className="hidden md:flex flex-row items-center gap-8 text-[14px] text-[#737373] font-bold ml-20">
          <ul className="list-none flex gap-8">
            {" "}
            <Link href="/">
              <li className="cursor-pointer hover:text-[#23A6F0] transition-all">
                Home
              </li>
            </Link>
            <Link href="/products">
              <li className="cursor-pointer hover:text-[#23A6F0] transition-all">
                Product
              </li>
            </Link>
            <Link href="/pricing">
              <li className="cursor-pointer hover:text-[#23A6F0] transition-all">
                Pricing
              </li>
            </Link>
            <Link href="/contact">
              <li className="cursor-pointer hover:text-[#23A6F0] transition-all">
                Contact
              </li>
            </Link>
          </ul>
        </nav>

        {/* Icons and Buttons */}
        <div className="flex items-center gap-4 ml-auto">
          {/* Search Icon (Hidden on desktop) */}
          <button className="md:hidden flex items-center justify-center p-2  text-[#252B42] hover:text-[#23A6F0] hover:border-[#23A6F0] transition-all">
            {/* <FiSearch size={20} /> */}
          </button>

          {/* Add to Cart Icon (Hidden on desktop) */}
          <button className="md:hidden flex items-center justify-center p-2 text-[#252B42] hover:text-[#23A6F0] hover:border-[#23A6F0] transition-all">
            {/* <FiShoppingCart size={20} /> */}
          </button>

          {/* Login Button (Hidden on mobile) */}
          <button className="hidden md:block px-4 py-2 text-[#23A6F0] rounded  font-bold">
            Login
          </button>

          {/* Become a member Button (Hidden on mobile) */}
          <button className="hidden md:flex items-center gap-2 px-4 py-3 bg-[#23A6F0] text-[#FAFAFA] rounded-md hover:bg-blue-500 transition-all">
            Become a member
            {/* <FiArrowRight className="text-lg" /> */}
          </button>

          {/* Mobile Hamburger Menu (Appears at the end on mobile) */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMobileMenu} className="text-[#252B42]">
              
              {/* {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />} */}
               <Image src="/burger.png" alt="menu" width={24} height={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu starts */}
      <div
        className={`md:hidden ${
          isMobileMenuOpen ? "block" : "hidden"
        } bg-white shadow-md mt-4 px-4 py-6 flex justify-center items-center x`}
      >
        <ul className="list-none flex flex-col gap-4 text-[20px] text-[#737373] font-bold">
          {" "}

          <Link href="/">
            <li className="cursor-pointer hover:text-[#23A6F0] transition-all">
              Home
            </li>
          </Link>
          <Link href="/product">
            <li className="cursor-pointer hover:text-[#23A6F0] transition-all">
              Product
            </li>
          </Link>
          <Link href="/pricing">
            <li className="cursor-pointer hover:text-[#23A6F0] transition-all">
              Pricing
            </li>
          </Link>
          <Link href="/contact">
            <li className="cursor-pointer hover:text-[#23A6F0] transition-all">
              Contact
            </li>
          </Link>
        </ul>
      </div>
    </header>
  );
};

export default Header;