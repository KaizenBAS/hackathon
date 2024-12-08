'use client';
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex flex-col bg-[#FFFFFF] w-screen">
      {/* Top bar (hidden on mobile, visible on large screens) */}
      <div className="w-screen h-[58px] bg-[#252B42] items-center justify-between hidden lg:flex">
        <div className="flex gap-5 items-center ml-10">
          <div className="flex gap-5 items-center">
            <Image src="/vector.png" alt="phone" width={16} height={16} />
            <h2 className="text-white">(225) 555-0118</h2>
          </div>
          <div className="flex gap-5 items-center">
            <Image src="/mail.png" alt="email" width={16} height={16} />
            <h2 className="text-white">michelle.rivera@example.com</h2>
          </div>
        </div>
        <div>
          <h2 className="text-white">
            Follow Us and get a chance to win 80% off
          </h2>
        </div>
        <div className="flex gap-5 items-center mr-10">
          <h2 className="text-white">Follow Us:</h2>
          <div className="flex gap-5 items-center">
            <Image src="/a.png" alt="social" width={22} height={22} />
            <Image src="/y.png" alt="social" width={22} height={22} />
            <Image src="/f.png" alt="social" width={22} height={22} />
            <Image src="/x.png" alt="social" width={22} height={22} />
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="w-screen h-[78px] flex items-center justify-between px-5 lg:px-10">
        {/* Logo */}
        <h1 className="text-4xl text-[#252B42] font-bold">Bandage</h1>

        {/* Icons before the burger menu on mobile */}
        <div className="flex items-center gap-4 lg:hidden">
          <Image src="/search.png" alt="search" width={20} height={20} />
          <Image src="/cart.png" alt="cart" width={20} height={20} />
          {/* Burger menu */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 focus:outline-none"
          >
            <Image src="/burger.png" alt="menu" width={24} height={24} />
          </button>
        </div>

        {/* Navigation menu */}
        <ul
          className={`absolute top-20 right-0  bg-white p-5 shadow-md flex-col gap-6 items-center lg:static lg:flex lg:flex-row lg:items-center lg:bg-transparent lg:shadow-none ${
            isMenuOpen ? "flex" : "hidden"
          }`}>
          <li className="text-[#252B42] text-lg font-semibold"><Link href="/">Home</Link></li>
          <li className="text-[#252B42] text-lg font-semibold"><Link href="/products">Shop</Link></li>
          <li className="text-[#252B42] text-lg font-semibold">About</li>
          <li className="text-[#252B42] text-lg font-semibold">Contact</li>
          <li className="text-[#252B42] text-lg font-semibold">Pages</li>

          {/* Social Icons in Mobile Menu */}
          <div className="flex gap-5 mt-5 lg:hidden">
            <Image src="/a.png" alt="social" width={22} height={22} />
            <Image src="/y.png" alt="social" width={22} height={22} />
            <Image src="/f.png" alt="social" width={22} height={22} />
            <Image src="/x.png" alt="social" width={22} height={22} />
          </div>
        </ul>

        <div className="hidden lg:flex items-center gap-8">
          {/* Login/Register Section */}
          <div className="flex items-center gap-2">
            <Image src="/account.png" alt="account" width={20} height={20} />
            <h2 className="text-[#252B42] text-lg font-semibold whitespace-nowrap">
              Login / Register
            </h2>
          </div>

          {/* Icons Section */}
          <div className="flex items-center gap-5">
            <Image src="/search.png" alt="search" width={20} height={20} />
            <Image src="/cart.png" alt="cart" width={20} height={20} />
            <Image src="/fav.png" alt="favorites" width={20} height={20} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
