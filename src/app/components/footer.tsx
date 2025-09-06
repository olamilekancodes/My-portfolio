"use client";

import { TbBrandLinkedinFilled } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";

const socials = [
  {
    id: "LinkedIn",
    icon: TbBrandLinkedinFilled,
    link: "https://www.linkedin.com/in/olamilekan-akanni-64740696/",
  },
  {
    id: "Github",
    icon: FaGithub,
    link: "https://github.com/olamilekancodes",
  },
];

const FooterModule = () => {
  return (
    <div className="my-10 text-[#9c9ea4] border-t-2 border-[#6d7078]">
      <div className=" flex m-auto max-w-7xl flex-col md:flex-row items-center md:justify-between justify-center mt-10 px-10 gap-y-5 md:gap-y-0">
        <p>Olamilekan Akanni &copy; 2025</p>
        <span className="flex gap-4 item-center">
          {socials.map((social) => (
            <a
              key={social.id}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Olamilekan's ${social.id}`}
              className="transition-colors duration-300 hover:text-[#6e06f2] text-[#9c9ea4]"
            >
              {<social.icon size={25} />}
            </a>
          ))}
        </span>
      </div>
    </div>
  );
};

export default FooterModule;
