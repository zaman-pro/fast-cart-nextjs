"use client";

import React, { useState } from "react";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const user = useSession();
  const isLoggedIn = user?.status === "authenticated";

  return (
    <nav className="flex items-center justify-between px-6 md:px-16 lg:px-32 py-3 border-b border-gray-300 text-gray-700 relative">
      <Link href={"/"} className="cursor-pointer text-3xl font-bold">
        FastCart
      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-4 lg:gap-8">
        <Link href="/" className="hover:text-orange-600 transition">
          Home
        </Link>
        <Link href="/products" className="hover:text-orange-600 transition">
          Products
        </Link>
        {isLoggedIn && (
          <>
            <Link
              href="/dashboard/add-product"
              className="hover:text-orange-600 transition"
            >
              Add Product
            </Link>
            <Link
              href="/dashboard"
              className="hover:text-orange-600 transition"
            >
              Dashboard
            </Link>
          </>
        )}
      </div>

      {/* Auth Buttons */}
      <div className="hidden md:flex items-center gap-2">
        {!isLoggedIn ? (
          <>
            <button
              onClick={() => signIn()}
              className="bg-gray-600 hover:bg-orange-600 transition text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full text-xs sm:text-sm"
            >
              Login
            </button>
            <Link
              href={"/register"}
              className="bg-gray-600 hover:bg-orange-600 transition text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full text-xs sm:text-sm"
            >
              Register
            </Link>
          </>
        ) : (
          <button
            onClick={() => signOut()}
            className="bg-gray-600 hover:bg-orange-600 transition text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full text-xs sm:text-sm"
          >
            Logout
          </button>
        )}
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-gray-700"
        onClick={() => setIsOpen(!isOpen)}
      >
        {/* Hamburger Icon */}
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
          />
        </svg>
      </button>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col md:hidden p-4 gap-2 z-10">
          <Link
            href="/"
            className="w-full text-center hover:text-orange-600 transition py-2 px-4 rounded"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/products"
            className="w-full text-center hover:text-orange-600 transition py-2 px-4 rounded"
            onClick={() => setIsOpen(false)}
          >
            Products
          </Link>
          {isLoggedIn && (
            <>
              <Link
                href="/dashboard/add-product"
                className="w-full text-center hover:text-orange-600 transition py-2 px-4 rounded"
                onClick={() => setIsOpen(false)}
              >
                Add Product
              </Link>
              <Link
                href="/dashboard"
                className="w-full text-center hover:text-orange-600 transition py-2 px-4 rounded"
                onClick={() => setIsOpen(false)}
              >
                Dashboard
              </Link>
            </>
          )}
          {!isLoggedIn ? (
            <>
              <button
                onClick={() => {
                  signIn();
                  setIsOpen(false);
                }}
                className="w-full text-center bg-gray-600 hover:bg-orange-600 transition text-white py-2 px-4 rounded"
              >
                Login
              </button>
              <Link
                href="/register"
                className="w-full text-center bg-gray-600 hover:bg-orange-600 transition text-white py-2 px-4 rounded"
                onClick={() => setIsOpen(false)}
              >
                Register
              </Link>
            </>
          ) : (
            <button
              onClick={() => {
                signOut();
                setIsOpen(false);
              }}
              className="w-full text-center bg-gray-600 hover:bg-orange-600 transition text-white py-2 px-4 rounded"
            >
              Logout
            </button>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
