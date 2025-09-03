"use client";

import Image from "next/image";
import { useState } from "react";
import { GoArrowUpRight } from "react-icons/go";
import { motion } from "framer-motion";
import { PageTitle } from "../shared/PageTitle";

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
      "Organogram Workspace is an all-in-one SaaS platform designed to streamline business operations by integrating multiple HR, payroll, and performance management tools into a single, unified workspace. It caters to organizations of all sizes, offering specialized apps that enhance workforce management, automate payroll processing, and improve employee performance tracking.",
    image: "/Images/workspace.jpg",
    tools: ["React JS", "Typescript", "Material UI", "Redux", "React Query"],
    link: "https://workspace.organogram.ltd/",
  },
  {
    id: 3,
    name: "Workspace HR",
    description:
      "The Workspace HR App in Organogram Workspace is a powerful, cloud-based solution designed to simplify and automate human resource management. It provides businesses with an all-in-one platform to manage employee data, track attendance, oversee performance, and enhance the overall employee experience.",
    image: "/Images/hr.jpg",
    tools: [
      "React JS",
      "Typescript",
      "Material UI",
      "Redux",
      "React Query",
      "Sass/SCSS",
      "Styled-components",
    ],
    link: "https://people.organogram.app/",
  },
  {
    id: 4,
    name: "Workspace Payroll",
    description:
      "The Workspace Payroll App is a powerful, automated payroll processing solution designed to simplify salary calculations, tax deductions, and compliance reporting. It ensures accurate, timely payments while reducing administrative workload, making it the perfect payroll management tool for businesses of all sizes.",
    image: "/Images/payroll.jpg",
    tools: [
      "React JS",
      "Typescript",
      "Material UI",
      "Redux",
      "React Query",
      "Sass/SCSS",
      "Styled-components",
    ],
    link: "https://payroll.organogram.app/",
  },
];

const projectVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1 },
  },
};

const Projects = () => {
  const [hoveredProjectId, setHoveredProjectId] = useState<number | null>(null);

  return (
    <div className="mt-0 xl">
      <PageTitle
        title={
          <>
            My <span className="text-[#6e06f2]">Recent</span> Projects
          </>
        }
        paragraph="Here my recent projects; focusing on clean design, responsiveness, interactive user experience with smooth animations and reusable components to deliver modern experiences."
      />

      {/* {projects.map((project) => (
        <a
          href={project.link}
          key={project.id}
          target="_blank"
          rel="noopener noreferrer"
          // variants={projectVariants}
          // initial="hidden"
          // whileInView="visible"
          // viewport={{ once: true }}
        >
          <div
            className={`flex md:flex-row flex-col gap-5 p-7 cursor-pointer transition-colors duration-300 rounded-lg border-b-2 ${
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
              className="md:w-[300px] md:h-[180px] w-full flex md:block justify-center rounded-lg object-cover"
            />

            <div className="flex flex-col gap-5">
              <div className={`flex gap-2`}>
                <h3
                  className={`transition-colors duration-300 ${
                    hoveredProjectId === project.id && "text-[#f2c4a0]"
                  }`}
                >
                  {project.name}
                </h3>
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
        </a>
      ))} */}
    </div>
  );
};

export default Projects;
