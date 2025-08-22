"use client";

import React from "react";
import Image from "next/image";
import Loading from "@/app/components/Loading";
import Link from "next/link";
import { useAppContext } from "@/context/AppContext";
import { MdArrowOutward } from "react-icons/md";

const AddedProducts = () => {
  const { products } = useAppContext();

  if (!products || products.length === 0) return <Loading />;

  return (
    <div className="flex-1 min-h-screen flex flex-col justify-between">
      <div className="w-full md:p-10 p-4">
        <h2 className="pb-4 text-lg font-medium">Added Products</h2>
        <div className="flex flex-col items-center max-w-4xl w-full overflow-hidden rounded-md bg-white border border-gray-500/20">
          <table className="table-fixed w-full overflow-hidden">
            <thead className="text-gray-900 text-sm text-left">
              <tr>
                <th className="w-2/3 md:w-2/5 px-4 py-3 font-medium truncate">
                  Product
                </th>
                <th className="px-4 py-3 font-medium truncate max-sm:hidden">
                  Category
                </th>
                <th className="px-4 py-3 font-medium truncate">Price</th>
                <th className="px-4 py-3 font-medium truncate max-sm:hidden">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="text-sm text-gray-500">
              {products.map((product, index) => (
                <tr
                  key={index}
                  className="border-t border-gray-500/20 hover:bg-orange-600/10"
                >
                  <td className="md:px-4 pl-2 md:pl-4 py-3 flex items-center space-x-3 truncate">
                    <div className="bg-gray-500/10 rounded p-2">
                      <Image
                        src={product.imgSrc}
                        alt="product Image"
                        width={64}
                        height={64}
                        className="rounded-md object-cover"
                      />
                    </div>
                    <span className="truncate w-full">{product.name}</span>
                  </td>
                  <td className="px-4 py-3 max-sm:hidden">
                    {product.category}
                  </td>
                  <td className="px-4 py-3">${product.price}</td>
                  <td className="px-4 py-3 max-sm:hidden">
                    <Link
                      href={`/products/${product.id}`}
                      scroll={true}
                      onClick={() => scrollTo(0, 0)}
                      className="inline-flex items-center gap-1 px-2 md:px-4 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700 transition-colors"
                    >
                      <span className="hidden md:block">Visit</span>
                      <MdArrowOutward className="text-lg" />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AddedProducts;
