"use client";

import { TbBrandLinkedinFilled } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";
import { use, useState } from "react";

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
  const [hoveredSocialId, setHoveredSocialId] = useState<string | null>(null);

  return (
    <div className="my-10 text-[#d8d8d8] border-t-2 border-[#d8d8d8]">
      <div className=" flex m-auto max-w-7xl flex-col md:flex-row items-center md:justify-between justify-center mt-10 px-10 gap-y-5 md:gap-y-0">
        <p>Olamilekan Akanni &copy; 2025</p>
        <span className="flex gap-4 item-center text-[#126cf8]">
          {socials.map((social) => (
            <a
              key={social.id}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Olamilekan's ${social.id}`}
              className={`transition-colors duration-300 hover:text-[#0d5cb6] ${
                hoveredSocialId === social.id ? "text-[#0d5cb6]" : ""
              }`}
              onMouseEnter={() => setHoveredSocialId(social.id)}
              onMouseLeave={() => setHoveredSocialId(null)}
            >
              {<social.icon size={25} />}
            </a>
          ))}
        </span>
      </div>
    </div>
  );
};

export default FooterModule