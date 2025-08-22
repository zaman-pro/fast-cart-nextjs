import React from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";

const Banner = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between md:pl-20 py-14 md:py-0 bg-[#E6E9F2] my-16 rounded-xl overflow-hidden">
      <Image
        className="max-w-56"
        width={400}
        height={300}
        src={"/assets/jbl_soundbox_image.png"}
        alt="jbl_soundbox_image"
      />
      <div className="flex flex-col items-center justify-center text-center space-y-2 px-4 md:pr-20">
        <h2 className="text-2xl md:text-3xl font-semibold max-w-[290px] text-gray-700">
          Level Up Your Gaming Experience
        </h2>
        <p className="max-w-[343px] font-medium text-gray-800/60">
          From immersive sound to precise controls everything you need to win
        </p>
        <Link
          href={"/products"}
          className="group flex items-center justify-center gap-1 px-12 py-2.5 bg-orange-600 rounded text-white"
        >
          Buy now
          <FaArrowRight className="group-hover:translate-x-1 transition" />
        </Link>
      </div>
    </div>
  );
};

export default Banner;
