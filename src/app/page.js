import React from "react";
import Banner from "./components/Banner";
import HeaderSlider from "./components/HeaderSlider";
import FeaturedProduct from "./components/FeaturedProduct";
import HomeProducts from "./components/HomeProducts";

const page = () => {
  return (
    <div className="px-6 md:px-16 lg:px-32">
      <HeaderSlider />
      <HomeProducts />
      <FeaturedProduct />
      <Banner />
    </div>
  );
};

export default page;
