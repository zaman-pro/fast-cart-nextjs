"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import Loading from "@/app/components/Loading";
import ProductCard from "@/app/components/ProductCard";
import Link from "next/link";
import { FaStar } from "react-icons/fa";
import { useAppContext } from "@/context/AppContext";

const Product = () => {
  const { products } = useAppContext();

  const { id } = useParams();
  const [productData, setProductData] = useState(null);

  useEffect(() => {
    const product = products.find((p) => p.id === parseInt(id));
    setProductData(product);
  }, [id]);

  if (!productData) return <Loading />;

  return (
    <div className="px-6 md:px-16 lg:px-32 pt-14 space-y-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <div className="px-5 lg:px-16 xl:px-20">
          <div className="rounded-lg overflow-hidden bg-gray-500/10 mb-4">
            <Image
              src={productData.imgSrc}
              alt={productData.name}
              className="w-full h-auto object-cover mix-blend-multiply"
              width={800}
              height={800}
            />
          </div>
        </div>

        <div className="flex flex-col">
          <h1 className="text-3xl font-medium text-gray-800/90 mb-4">
            {productData.name}
          </h1>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-0.5">
              {Array.from({ length: 5 }).map((_, index) =>
                index < Math.floor(productData.rating) ? (
                  <FaStar key={index} className="text-orange-500 h-3 w-3" />
                ) : (
                  <FaStar key={index} className="text-orange-200 h-3 w-3" />
                )
              )}
            </div>
            <p>({productData.rating})</p>
          </div>

          <p className="text-gray-600 mt-3">{productData.description}</p>
          <p className="text-3xl font-medium mt-6">{productData.price}</p>

          <hr className="bg-gray-600 my-6" />

          <div className="overflow-x-auto">
            <table className="table-auto border-collapse w-full max-w-72">
              <tbody>
                <tr>
                  <td className="text-gray-600 font-medium">Brand</td>
                  <td className="text-gray-800/50 ">Generic</td>
                </tr>
                <tr>
                  <td className="text-gray-600 font-medium">Color</td>
                  <td className="text-gray-800/50 ">Multi</td>
                </tr>
                <tr>
                  <td className="text-gray-600 font-medium">Category</td>
                  <td className="text-gray-800/50">{productData.category}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="flex items-center mt-10 gap-4">
            <button className="w-full py-3.5 bg-gray-100 text-gray-800/80 hover:bg-gray-200 transition">
              Add to Cart
            </button>
            <button className="w-full py-3.5 bg-orange-500 text-white hover:bg-orange-600 transition">
              Details
            </button>
          </div>
        </div>
      </div>

      {/* Featured Products */}
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center mb-4 mt-16">
          <p className="text-3xl font-medium">
            Featured{" "}
            <span className="font-medium text-orange-600">Products</span>
          </p>
          <div className="w-28 h-0.5 bg-orange-600 mt-2"></div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mt-6 pb-14 w-full">
          {products.slice(0, 5).map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>

        <Link
          href={"/products"}
          className="px-8 py-2 mb-16 border rounded text-gray-500/70 hover:bg-slate-50/90 transition"
        >
          See more
        </Link>
      </div>
    </div>
  );
};

export default Product;
