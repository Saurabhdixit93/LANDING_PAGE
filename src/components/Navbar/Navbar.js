import Link from "next/link";
import DarkModeToggle from "./DarkModeToggle";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import StartComponent from "../StartComponent";

export default function Navbar() {
  const path = usePathname();
  const [isActive, setIsActive] = useState(false);

  const handleActive = () => {
    setIsActive(!isActive);
  };

  const navbarLinks = [
    {
      id: 1,
      name: "Home",
      href: "/",
      active: false,
      className: `hover:text-blue-500 text-[#FF5555] hover:text-red-500 !font-[900]`,
    },

    {
      id: 2,
      name: "About",
      href: "#about",
      active: false,
      className: `hover:text-blue-500  ${
        isActive
          ? "text-[#FF5555] hover:text-red-500 !font-[900]"
          : "text-gray-900 dark:text-white font-[500]"
      }`,
    },
    {
      id: 3,
      name: "Pricing",
      href: "#pricing",
      active: false,
      className: `hover:text-blue-500  ${
        isActive
          ? "text-[#FF5555] hover:text-red-500 !font-[900]"
          : "text-gray-900 dark:text-white font-[500]"
      }`,
    },
    {
      id: 4,
      name: "Features",
      href: "#features",
      active: false,
      className: `hover:text-blue-500  ${
        isActive
          ? "text-[#FF5555] hover:text-red-500 !font-[900]"
          : "text-gray-900 dark:text-white font-[500]"
      }`,
    },
  ];

  return (
    <nav className="w-full">
      <div className="px-4 py-4 flex justify-between items-center">
        <div className="flex space-x-14 items-center">
          <div className="text-2xl font-bold text-gray-900 dark:text-white flex space-x-2 items-center">
            <Image src={"/Frame.svg"} alt="logo" width={70} height={70} />
            <h2 className="text-md">uifry</h2>
            <sup className="!ml[-2px] text-xs font-[800]">TM</sup>
          </div>

          <div className="flex space-x-6 items-center">
            {navbarLinks.map((linkItem, index) => (
              <Link
                href={linkItem.href}
                key={index}
                className={`${linkItem.className} nav_font_family text-2xl leading-26 `}
              >
                {linkItem.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex items-center space-x-8">
          <button className="class_font_family_light capitalize bg-black text-white py-3 px-8 rounded text-xl leading-26 dark:bg-white dark:text-black dark:border dark:border-black">
            download
          </button>
          <DarkModeToggle />

          <div className="mt-10">
            <StartComponent height={50} width={60} />
          </div>
        </div>
      </div>
    </nav>
  );
}
