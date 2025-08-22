"use client";

import React from "react";
import Link from "next/link";

const Navbar = () => {
  const isLoggedIn = false;

  return (
    <nav className="flex items-center justify-between px-6 md:px-16 lg:px-32 py-3 border-b border-gray-300 text-gray-700">
      <Link href={"/"} className="cursor-pointer text-3xl font-bold">
        FastCart
      </Link>

      <div className="flex items-center gap-4 lg:gap-8 max-md:hidden">
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
              href={"/dashboard"}
              className="hover:text-orange-600 transition"
            >
              Dashboard
            </Link>
          </>
        )}
      </div>

      {!isLoggedIn ? (
        <Link
          className="bg-gray-600 hover:bg-orange-600 transition text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full text-xs sm:text-sm"
          href={"/login"}
        >
          Login
        </Link>
      ) : (
        <button className="bg-gray-600 hover:bg-orange-600 transition text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full text-xs sm:text-sm">
          Logout
        </button>
      )}
    </nav>
  );
};

export default Navbar;
