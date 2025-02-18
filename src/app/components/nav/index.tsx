"use client";

import Image from "next/image";

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "project", label: "Project" },
  { id: "contact", label: "Contact" },
];

export const NavBar = () => {
  return (
    <div className="flex items-center justify-between text-[#eaeaea] sticky top-0 z-10 py-5 px-10">
      <div className="relative inline-block p-1 cursor-pointer after:content-[''] after:absolute after:bottom-[0.6rem] after:right-[-6px] after:w-0 after:h-0 after:bg-[#126cf8] after:rounded-full after:transition-all after:duration-500 hover:after:w-2 hover:after:h-2">
        <div className="flex flex-row items-end gap-1 ">
          <div className="w-12 h-12 overflow-hidden rounded-full flex items-center justify-center border-4 border-white">
            <Image
              src="/Images/nav-image.jpg"
              alt="Nav Image"
              width={70}
              height={70}
              className="rounded-full object-cover"
            />
          </div>
          <p className="itim font-medium text-[1.9rem]">lamilekan</p>
        </div>
      </div>

      <div className="hidden md:flex flex-row gap-10">
        <div className="flex flex-row justify-center items-center gap-10 hover:text-[#939393] transition-colors duration-100">
          {navItems.map((navItem, index) => (
            <p
              key={index}
              className="relative font-medium cursor-pointer p-2 transition-colors hover:text-[#eaeaea] after:content-[''] after:absolute after:bottom-[-7.5px] after:left-0 after:w-0 after:h-[2px] after:bg-[#126cf8] after:transition-[width] after:duration-300 hover:after:w-full"
            >
              {navItem.label}
            </p>
          ))}
        </div>

        <button className="border-2 border-[#126cf8] text-[#126cf8] px-4 py-2 rounded-md font-medium transition-colors duration-300 hover:border-[#0d5cb6] hover:text-[#0d5cb6]">
          Resume
        </button>
      </div>
    </div>
  );
};
