"use client";

import Image from "next/image";
import { FaBars } from "react-icons/fa6";
import { AiOutlineClose } from "react-icons/ai";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Say Hello!" },
];

const NavBar = () => {
  const [openSideBar, setOpenSideBar] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("home");

  const sidebarRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        setOpenSideBar(false);
      }
    };

    if (openSideBar) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openSideBar]);

  const scrollToSection = (id: string) => {
    setOpenSideBar(false);
    setActiveSection(id);

    const element = document.getElementById(id);
    if (!element) return;

    const targetPosition = element.getBoundingClientRect().top + window.scrollY;
    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition;
    const duration = 900;
    let startTime: number | null = null;

    const animateScroll = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);

      const easeInOutCubic =
        progress < 0.5
          ? 4 * progress ** 3
          : 1 - Math.pow(-2 * progress + 2, 3) / 2;

      window.scrollTo(0, startPosition + distance * easeInOutCubic);

      if (elapsedTime < duration) {
        requestAnimationFrame(animateScroll);
      }
    };

    requestAnimationFrame(animateScroll);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      let currentSection = "home";

      for (const navItem of navItems) {
        const element = document.getElementById(navItem.id);
        if (element) {
          const elementTop = element.offsetTop - 100;
          if (scrollPosition >= elementTop) {
            currentSection = navItem.id;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex items-center justify-between text-[#eaeaea] sticky top-0 z-10 py-5 md:px-10 px-3  bg-[#0808088e] ">
      <div
        className="relative inline-block p-1 cursor-pointer after:content-[''] after:absolute after:bottom-[0.6rem] after:right-[-6px] after:w-0 after:h-0 after:bg-[#126cf8] after:rounded-full after:transition-all after:duration-500 md:hover:after:w-2 md:hover:after:h-2 hover:after:h-1 hover:after:w-1"
        onClick={scrollToSection.bind(this, "home")}
      >
        <div className="flex flex-row items-end gap-1 ">
          <Image
            src="/Images/ellipse.png"
            alt="Nav Image"
            width={50}
            height={50}
          />

          <p className="itim font-medium md:text-[1.9rem] text-[1.4rem]">
            lamilekan
          </p>
        </div>
      </div>

      <div
        className="lg:hidden cursor-pointer"
        onClick={() => setOpenSideBar(true)}
      >
        <FaBars size={20} />
      </div>

      <div className="hidden lg:flex flex-row gap-10">
        <div className="flex flex-row justify-center items-center gap-10 hover:text-[#939393] transition-colors duration-100">
          {navItems.map((navItem, index) => (
            <Link
              href={`#${navItem.id}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(navItem.id);
              }}
              key={index}
              className={`relative font-medium cursor-pointer p-2 transition-colors hover:text-[#eaeaea] after:content-[''] after:absolute after:bottom-[-7.5px] after:left-0 after:w-0 after:h-[2px] after:bg-[#126cf8] after:transition-[width] after:duration-300 ${
                activeSection === navItem.id
                  ? "after:w-full text-[#eaeaea]"
                  : "hover:after:w-full"
              }`}
            >
              {navItem.label}
            </Link>
          ))}
        </div>

        <a
          onClick={() => {
            setOpenSideBar(false);
            window.open(
              "https://drive.google.com/file/d/1cOPe_2n4pRmPd3N76WoaWF-2CfNyVVjL/view?usp=sharing",
              "_blank"
            );
          }}
          aria-label="View Olamilekan's Resume "
          className="border-2 border-[#126cf8] text-[#126cf8] px-4 py-2 rounded-md font-medium transition-colors duration-300 hover:border-[#0d5cb6] hover:text-[#0d5cb6] cursor-pointer"
        >
          Resume
        </a>
      </div>

      <div
        ref={sidebarRef}
        className={`fixed top-0 right-0 h-full w-1/2 bg-[#080808] shadow-lg transform ${
          openSideBar ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-[10] lg:hidden`}
      >
        <div className="flex justify-end my-6 p-2 mr-1">
          <AiOutlineClose
            size={24}
            className="text-white cursor-pointer"
            onClick={() => setOpenSideBar(false)}
          />
        </div>

        <div className="flex flex-col items-center mt-10 gap-6">
          {navItems.map((navItem) => (
            <Link
              href={`#${navItem.id}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(navItem.id);
              }}
              key={navItem.id}
              className={`relative text-white text-md font-medium cursor-pointer hover:text-gray-400 p-2 transition-colors after:content-[''] after:absolute after:bottom-[-7.5px] after:left-0 after:w-0 after:h-[2px] after:bg-[#126cf8] after:transition-[width] after:duration-300 ${
                activeSection === navItem.id
                  ? "after:w-full text-gray-400"
                  : "hover:after:w-full"
              }`}
            >
              {navItem.label}
            </Link>
          ))}

          <a
            onClick={() => {
              setOpenSideBar(false);
              window.open(
                "https://drive.google.com/file/d/1cOPe_2n4pRmPd3N76WoaWF-2CfNyVVjL/view?usp=sharing",
                "_blank"
              );
            }}
            aria-label="View Olamilekan's Resume "
            className="border-2 border-[#126cf8] text-[#126cf8] px-4 py-2 rounded-md font-medium transition-colors duration-300 hover:border-[#0d5cb6] hover:text-[#0d5cb6] cursor-pointer"
          >
            Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
