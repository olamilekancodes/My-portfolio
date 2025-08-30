"use client";

import Image from "next/image";
import { FaBars } from "react-icons/fa6";
import { AiOutlineClose } from "react-icons/ai";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { BiMessageRoundedDetail } from "react-icons/bi";
import MessageButton from "../shared/MessageButton";

const navItems = [
  { id: "home", label: "Home" },
  { id: "projects", label: "Projects" },
  { id: "about_me", label: "About Me" },
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

  const mobileNavVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="flex items-center justify-between text-[#eaeaea] sticky top-0 z-10 py-5 md:px-10 px-3  bg-[#fff] ">
      <motion.div
        className="flex p-2 cursor-pointer items-end"
        onClick={scrollToSection.bind(this, "home")}
        whileHover="hover"
        initial="rest"
      >
        <Image
          src="/Images/newest.png"
          alt="Logo"
          width={150}
          height={80}
          className="w-[130px] md:w-[150px]"
        />

        <motion.div
          className="block w-2 h-2 bg-[#a475d9] rounded-full"
          variants={{
            rest: { y: 0 },
            hover: {
              y: -4,
              transition: {
                type: "spring",
                stiffness: 600,
                damping: 10,
                repeat: 1,
                repeatType: "reverse",
              },
            },
          }}
        />
      </motion.div>

      <div
        className="lg:hidden cursor-pointer text-[#37373C]"
        onClick={() => setOpenSideBar(true)}
      >
        <FaBars size={20} />
      </div>

      <div className="hidden lg:flex flex-row justify-center items-center gap-10">
        {navItems.map((navItem, index) => (
          <Link
            href={`#${navItem.id}`}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection(navItem.id);
            }}
            key={index}
            className={`font-medium md:text-sm lg:text-base cursor-pointer p-2 transition-colors hover:text-[#a475d9] ${
              activeSection === navItem.id
                ? "text-[#a475d9]"
                : "text-[#7f828b] transition-colors duration-500"
            }`}
          >
            {navItem.label}
          </Link>
        ))}
      </div>

      <div className="hidden lg:flex p-1 justify-center items-center cursor-pointer rotate-12 hover:text-[#a475d9] transition-colors duration-500">
        <BiMessageRoundedDetail
          className="bg-[#000] p-1 rounded-full"
          size={40}
        />
      </div>

      <motion.div
        ref={sidebarRef}
        className={`fixed top-0 right-0 h-full w-1/2 bg-[#fff] transform ${
          openSideBar ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-500 ease-in-out z-[10] lg:hidden`}
        initial="hidden"
        animate={openSideBar ? "visible" : "hidden"}
      >
        <div className="flex justify-end my-6">
          <AiOutlineClose
            size={24}
            onClick={() => setOpenSideBar(false)}
            className="p-1 mr-8 text-[#37373C] cursor-pointer"
          />
        </div>

        <div className="flex flex-col items-center mt-10 gap-6">
          {navItems.map((navItem, index) => (
            <motion.div key={index} variants={mobileNavVariants} custom={index}>
              <Link
                href={`#${navItem.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(navItem.id);
                }}
                className={`font-medium cursor-pointer p-2 transition-colors hover:text-[#a475d9] text-xs md:text-sm ${
                  activeSection === navItem.id
                    ? "text-[#a475d9]"
                    : "text-[#7f828b] transition-colors duration-500"
                }`}
              >
                {navItem.label}
              </Link>
            </motion.div>
          ))}

          <MessageButton />
        </div>
      </motion.div>
    </div>
  );
};

export default NavBar;
