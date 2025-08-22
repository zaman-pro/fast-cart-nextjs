import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdFormatListBulletedAdd } from "react-icons/md";
import { GoChecklist } from "react-icons/go";

const SideBar = () => {
  const pathname = usePathname();
  const menuItems = [
    {
      name: "Add Product",
      path: "/dashboard/add-product",
      icon: <MdFormatListBulletedAdd />,
    },
    {
      name: "Added Products",
      path: "/dashboard/added-products",
      icon: <GoChecklist />,
    },
  ];

  return (
    <div className="md:w-64 w-16 border-r min-h-screen text-base border-gray-300 py-2 flex flex-col">
      {menuItems.map((item) => {
        const isActive = pathname === item.path;

        return (
          <Link href={item.path} key={item.name} passHref>
            <div
              className={`flex items-center py-3 px-4 gap-3 cursor-pointer ${
                isActive
                  ? "border-r-4 md:border-r-[6px] bg-orange-600/10 border-orange-500/90"
                  : "hover:bg-gray-100/90 border-white"
              }`}
            >
              <div className="w-7 h-7 flex items-center justify-center text-gray-700 text-xl">
                {item.icon}
              </div>
              <p className="md:block hidden text-center">{item.name}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default SideBar;
