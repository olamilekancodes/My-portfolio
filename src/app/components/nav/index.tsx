import Image from "next/image";

const navItems = [
  { id: "home", label: "Home" },
  { id: "project", label: "Project" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

export const NavBar = () => {
  return (
    <div className="flex items-center  py-2 px-5 bg-[#080808] text-[#eaeaea] hover:text-[#939393] transition-colors duration-300 border-b-[0.5px] border-gray-500 sticky top-0 z-10">
      <div className="relative inline-block p-1 cursor-pointer after:content-[''] after:absolute after:bottom-0 after:right-[-7px] after:w-0 after:h-0 after:bg-[#126cf8] after:rounded-full after:transition-all after:duration-500 hover:after:w-2 hover:after:h-2">
        <Image src="/Images/logo.png" alt="Logo" width={70} height={50} />
      </div>

      <div className="flex flex-row justify-center items-center gap-10 m-auto">
        {navItems.map((navItem, index) => (
          <p
            key={index}
            className="relative font-medium cursor-pointer p-2 transition-colors hover:text-[#eaeaea] after:content-[''] after:absolute after:bottom-[-7.5px] after:left-0 after:w-0 after:h-[2px] after:bg-[#126cf8] after:transition-[width] after:duration-300 hover:after:w-full"
          >
            {navItem.label}
          </p>
        ))}
      </div>
    </div>
  );
};
