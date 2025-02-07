'use client';
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [cartItemsCount, setCartItemsCount] = useState(0);

  // Cart counter functionality
  useEffect(() => {
    const updateCartCount = () => {
      const cartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');
      setCartItemsCount(cartItems.length);
    };

    updateCartCount(); // Initial load
    window.addEventListener('storage', updateCartCount);
    return () => window.removeEventListener('storage', updateCartCount);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prevState) => !prevState);
  };

  return (
    <div className="flex flex-col bg-[#FFFFFF] w-screen">
      {/* Top bar (hidden on mobile) */}
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

        {/* Mobile Icons */}
        <div className="flex items-center gap-4 lg:hidden">
          <Image src="/search.png" alt="search" width={20} height={20} />
          <Link href='/cart' className="relative">
            <Image src="/cart.png" alt="cart" width={20} height={20} />
            {cartItemsCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                {cartItemsCount}
              </span>
            )}
          </Link>
          <button
            onClick={toggleMobileMenu}
            className="p-2 focus:outline-none"
          >
            <Image src="/burger.png" alt="menu" width={24} height={24} />
          </button>
        </div>

        {/* Desktop Navigation */}
        <ul className={`hidden lg:flex lg:flex-row lg:items-center lg:gap-6`}>
          <li className="text-[#252B42] text-lg font-semibold">
            <Link href="/">Home</Link>
          </li>
          <li className="text-[#252B42] text-lg font-semibold">
            <Link href="/products">Shop</Link>
          </li>
          <li className="text-[#252B42] text-lg font-semibold">
            <Link href="/about">About</Link>
          </li>
          <li className="text-[#252B42] text-lg font-semibold">
            <Link href="/contact">Contact</Link>
          </li>
          <li className="text-[#252B42] text-lg font-semibold">Pages</li>
        </ul>

        {/* Desktop Login/Shopping Section */}
        <div className="hidden lg:flex items-center gap-8">
          <div className="flex items-center gap-2">
            <Image src="/account.png" alt="account" width={20} height={20} />
            <h2 className="text-[#252B42] text-lg font-semibold whitespace-nowrap">
              Login / Register
            </h2>
          </div>

          <div className="flex items-center gap-5">
            <Image src="/search.png" alt="search" width={20} height={20} />
            <Link href='/cart' className="relative">
              <Image src="/cart.png" alt="cart" width={20} height={20} />
              {cartItemsCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {cartItemsCount}
                </span>
              )}
            </Link>
            <Image src="/fav.png" alt="favorites" width={20} height={20} />
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`lg:hidden ${isMobileMenuOpen ? "block" : "hidden"} bg-white shadow-md px-4 py-6`}
        style={{
          position: "absolute",
          top: "78px",
          left: 0,
          right: 0,
          zIndex: 1000
        }}
      >
        <ul className="list-none flex flex-col gap-4 text-[20px] text-[#737373] font-bold text-center">
          <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
            <li className="cursor-pointer hover:text-[#23A6F0] transition-all">
              Home
            </li>
          </Link>
          <Link href="/products" onClick={() => setIsMobileMenuOpen(false)}>
            <li className="cursor-pointer hover:text-[#23A6F0] transition-all">
              Products
            </li>
          </Link>
          <Link href="/about" onClick={() => setIsMobileMenuOpen(false)}>
            <li className="cursor-pointer hover:text-[#23A6F0] transition-all">
              About
            </li>
          </Link>
          <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
            <li className="cursor-pointer hover:text-[#23A6F0] transition-all">
              Contact
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Header;