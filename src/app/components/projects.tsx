"use client";

import { link } from "fs";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { GoArrowUpRight } from "react-icons/go";

const projects = [
  {
    id: 1,
    name: "Oloja",
    description:
      "Oloja is a B2C marketplace that connects buyers and customers to sellers and service providers in Australia. It offers a wide range of products such as electronics, fashion items, baby sitting, plumbing, etc. The platform is built with a focus on user experience and performance, ensuring that users can easily find and purchase products they love.",
    image: "/Images/oloja.jpg",
    tools: ["Next JS", "Typescript", "Tailwind CSS", "Redux", "React Query"],
    link: "https://oloja.com.au/",
  },
  {
    id: 2,
    name: "Organogram Workspace",
    description:
      "Oloja is a B2C marketplace that connects buyers and customers to sellers and service providers in Australia. It offers a wide range of products such as electronics, fashion items, baby sitting, plumbing, etc. The platform is built with a focus on user experience and performance, ensuring that users can easily find and purchase products they love.",
    image: "/Images/workspace.jpg",
    tools: ["React JS", "Typescript", "Material UI", "Redux", "React Query"],
    link: "https://workspace.organogram.ltd/",
  },
  {
    id: 3,
    name: "Workspace HR",
    description:
      "Oloja is a B2C marketplace that connects buyers and customers to sellers and service providers in Australia. It offers a wide range of products such as electronics, fashion items, baby sitting, plumbing, etc. The platform is built with a focus on user experience and performance, ensuring that users can easily find and purchase products they love.",
    image: "/Images/hr.jpg",
    tools: [
      "React JS",
      "Typescript",
      "Material UI",
      "Redux",
      "React Query",
      "Styled-components",
      "Sass/SCSS",
    ],
    link: "https://people.organogram.app/",
  },
  {
    id: 4,
    name: "Workspace Payroll",
    description:
      "Oloja is a B2C marketplace that connects buyers and customers to sellers and service providers in Australia. It offers a wide range of products such as electronics, fashion items, baby sitting, plumbing, etc. The platform is built with a focus on user experience and performance, ensuring that users can easily find and purchase products they love.",
    image: "/Images/payroll.jpg",
    tools: [
      "React JS",
      "Typescript",
      "Material UI",
      "Redux",
      "React Query",
      "Styled-components",
      "Sass/SCSS",
    ],
    link: "https://payroll.organogram.app/",
  },
];

type Props = {};
export const Projects = ({}: Props) => {
  const [hoveredProjectId, setHoveredProjectId] = useState<number | null>(null);

  return (
    <div className="flex flex-col gap-10 my-20 text-white">
      <h1 className="itim">Recent projects</h1>
      {projects.map((project) => (
        <Link
          href={project.link}
          key={project.id}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div
            className={`flex gap-5 p-7 cursor-pointer transition-colors duration-300 rounded-lg border-b-2 ${
              hoveredProjectId === project.id
                ? "border-b-[#f2c4a0]"
                : "border-b-white"
            } `}
            onMouseEnter={() => setHoveredProjectId(project.id)}
            onMouseLeave={() => setHoveredProjectId(null)}
          >
            <Image
              src={project.image}
              alt={`${project.name} image`}
              width={300}
              height={300}
              className="w-[300px] h-[180px] rounded-lg object-cover"
            />
            <div className="flex flex-col gap-5">
              <div className={`flex gap-2`}>
                <h2
                  className={`transition-colors duration-300 ${
                    hoveredProjectId === project.id && "text-[#f2c4a0]"
                  }`}
                >
                  {project.name}
                </h2>
                <span
                  className={`transition-all duration-300 self-end ${
                    hoveredProjectId === project.id
                      ? "translate-y-[-5px] translate-x-[5px] text-[#f2c4a0]"
                      : "translate-y-0 translate-x-0"
                  }`}
                >
                  <GoArrowUpRight size={25} />
                </span>
              </div>
              <p className="text-left w-full text-sm md:text-base text-[#d8d8d8]">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-4">
                {project.tools.map((tool, index) => (
                  <p
                    key={index}
                    className="text-center text-[#f2c4a0] text-sm px-3 py-1 rounded-2xl bg-[#ffe2cc34]"
                  >
                    {tool}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};
