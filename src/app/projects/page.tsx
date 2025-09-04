"use client";

import Image from "next/image";
import { useState } from "react";
import { GoArrowUpRight } from "react-icons/go";
import { motion } from "framer-motion";
import { PageTitle } from "../shared/PageTitle";
import Link from "next/link";

const projects = [
  {
    id: 1,
    title: "Organogram Workspace",
    description:
      "Organogram Workspace is an all-in-one SaaS platform for business operations by integrating multiple HR, payroll, and performance management tools into a single unified workspace. It serves organizations of all sizes with apps that streamline workforce management, automate payroll, and enhance employee performance tracking.",
    image: "/Images/workspace.jpg",
    bgImage: "/Images/project-background/bg1.png",
    link: "https://workspace.organogram.ltd/",
  },
  {
    id: 2,
    title: "Oloja",
    description:
      "Oloja is a B2C marketplace that connects buyers and customers to sellers and service providers in Australia. It offers a wide range of products such as electronics, fashion items, baby sitting, plumbing, etc. The platform is built with a focus on user experience and performance, ensuring that users can easily find and purchase products they love.",
    image: "/Images/oloja.jpg",
    bgImage: "/Images/project-background/bg2.png",
    link: "https://oloja.com.au/",
  },
  {
    id: 3,
    title: "Workspace HR",
    description:
      "The Workspace HR App in Organogram Workspace is a powerful, cloud-based solution designed to simplify and automate human resource management. It provides businesses with an all-in-one platform to manage employee data, track attendance, oversee performance, and enhance the overall employee experience.",
    image: "/Images/hr.jpg",
    bgImage: "/Images/project-background/bg3.png",
    link: "https://people.organogram.app/",
  },
  {
    id: 4,
    title: "Workspace Payroll",
    description:
      "The Workspace Payroll App is a powerful, automated payroll processing solution designed to simplify salary calculations, tax deductions, and compliance reporting. It ensures accurate, timely payments while reducing administrative workload, making it the perfect payroll management tool for businesses of all sizes.",
    image: "/Images/payroll.jpg",
    bgImage: "/Images/project-background/bg4.png",
    link: "https://payroll.organogram.app/",
  },
];

const Projects = () => {
  return (
    <div className="py-10 mt-0 xl:mt-10">
      <PageTitle
        title={
          <>
            My <span className="text-[#6e06f2]">Recent</span> Projects
          </>
        }
        paragraph="Here are some of my recent projects; focusing on clean design, responsiveness, interactive user experience with smooth animations and reusable components to deliver modern experiences."
      />

      <div className="my-20 flex flex-col lg:flex-row flex-wrap gap-10 items-center justify-center">
        {projects.map((project) => (
          <div
            key={project.id}
            className="relative xs:w-[90%] sm:w-[80%] md:w-[70%] lg:w-[45%] max-h-[35rem] bg-cover bg-center flex flex-col items-center justify-between p-5 md:p-10 mx-auto rounded-xl"
            style={{
              backgroundImage: `url(${project.bgImage})`,
            }}
          >
            <Image
              src={project.image}
              alt={project.title}
              width={800}
              height={300}
              className="z-10 object-cover rounded-lg"
            />

            <div className="flex flex-col items-start gap-3 z-10 self-start mt-4">
              <h1 className="text-2xl md:text-3xl font-bold text-white">
                {project.title}
              </h1>

              <p className="text-[#f9f9f9] text-xs md:text-sm">
                {project.description}
              </p>

              <Link
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 text-[10px] md:text-xs flex items-center gap-1 text-[#6e06f2] hover:underline"
              >
                View link <GoArrowUpRight />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
