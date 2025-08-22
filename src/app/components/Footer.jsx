import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <div className="flex flex-col md:flex-row items-start justify-between px-6 md:px-16 lg:px-32 gap-10 py-14 border-b border-gray-500/30 text-gray-500">
        <div className="w-1/2">
          <Link href={"/"} className="cursor-pointer text-3xl font-bold">
            FastCart
          </Link>
          <p className="mt-6 text-sm max-w-md">
            Your one-stop destination for fast and reliable online shopping. We
            bring you quality products with lightning-fast delivery.
          </p>
        </div>

        <div className="w-1/2 flex items-start justify-start md:justify-center">
          <div>
            <h2 className="font-medium text-gray-900 mb-5">Get in touch</h2>
            <div className="text-sm space-y-2">
              <p>+1-234-567-890</p>
              <p>contact@fastcart.dev</p>
            </div>
          </div>
        </div>
      </div>
      <p className="py-4 text-center text-xs md:text-sm">
        Copyright 2025 © FastCart.dev All Right Reserved.
      </p>
    </footer>
  );
};

export default Footer;
