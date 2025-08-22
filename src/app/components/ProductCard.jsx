"use client";

import React from "react";
import Image from "next/image";
import { FaRegHeart, FaStar } from "react-icons/fa";
import Link from "next/link";

const ProductCard = ({ product }) => {
  return (
    <Link
      href={`/products/${product.id}`}
      scroll={false}
      onClick={() => scrollTo(0, 0)}
      className="flex flex-col items-start gap-0.5 max-w-[200px] w-full"
    >
      <div className="cursor-pointer group relative bg-gray-500/10 rounded-lg w-full h-52 flex items-center justify-center">
        <Image
          src={product.imgSrc}
          alt={product.name}
          className="group-hover:scale-105 transition object-cover w-4/5 h-4/5 md:w-full md:h-full"
          width={800}
          height={800}
        />
        <button className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-md">
          <FaRegHeart className="h-3 w-3 text-gray-600" />
        </button>
      </div>

      <p className="md:text-base font-medium pt-2 w-full truncate">
        {product.name}
      </p>
      <p className="w-full text-xs text-gray-500/70 max-sm:hidden truncate">
        {product.description}
      </p>
      <div className="flex items-center gap-2">
        <p className="text-xs">{4.5}</p>
        <div className="flex items-center gap-0.5">
          {Array.from({ length: 5 }).map((_, index) =>
            index < Math.floor(4) ? (
              <FaStar key={index} className="text-orange-500 h-3 w-3" />
            ) : (
              <FaStar key={index} className="text-orange-200 h-3 w-3" />
            )
          )}
        </div>
      </div>

      <div className="flex items-end justify-between w-full mt-1">
        <p className="text-base font-medium">{product.price}</p>
        <button className=" max-sm:hidden px-4 py-1.5 text-gray-500 border border-gray-500/20 rounded-full text-xs hover:bg-slate-50 transition">
          Details
        </button>
      </div>
    </Link>
  );
};

export default ProductCard;
