"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const skills = [
  "Next.js",
  "React.js",
  "React Native (in-view)",
  "Typescript",
  "Tailwind CSS",
  "Material UI",
  "Redux",
  "React Query",
  "Shadcn",
  "Styled-components",
  "Sass/SCSS",
  "Bootstrap",
];

const skillVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.1,
      duration: 0.5,
      type: "spring",
      stiffness: 100,
    },
  }),
};

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeInOut",
    },
  },
};

const MotionSpan = dynamic(
  () => import("framer-motion").then((mod) => mod.motion.span),
  { ssr: false }
);

const AboutModule = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center   text-[#d8d8d8] gap-20 md:gap-0 my-10">
      <div className=" w-full md:w-3/6 flex flex-col">
        <Image
          src="/Images/vectors.png"
          alt="eclipse-vector"
          width={100}
          height={100}
          className="w-[100px]"
        />

        <motion.div
          className="flex flex-col gap-5 my-10"
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="itim text-white">
            "I build experiences, not just interfaces"
          </h2>
          <p className="text-left w-full text-sm md:text-base ">
            Over the past few years, building experiences and interfaces has
            been my guiding principle as a <b>Frontend Software Developer</b>.
            I’ve had the privilege of working with amazing teams across
            different companies, building products that truly make a difference.
            From creating smooth, user-friendly B2C marketplaces to developing
            powerful HR and payroll applications, gaining hands-on experience
            which shapes digital tools that people rely on every day.
          </p>

          <p className="text-left w-full text-sm md:text-base">
            I’ve learned to turn complex ideas into clean, intuitive, and
            responsive web applications. But beyond the code, I’ve come to
            appreciate the importance of collaboration and really listening to
            the needs of users - because the best products are built when
            everyone’s voice is heard.
          </p>

          <p className="text-left w-full text-sm md:text-base">
            I’m always eager to solve problems, take on new challenges, and keep
            growing my skills. Whether it’s making an app run faster, improving
            the way it looks and feels, or adding features people didn’t even
            know they needed, I’m all about delivering work I can be proud of.
            And as I keep moving forward, I’m excited to keep building
            experiences that people love and trust.
          </p>
        </motion.div>

        <Image
          src="/Images/vectors.png"
          alt="eclipse-vector"
          width={100}
          height={100}
          className="self-end"
        />
      </div>

      <div className="md:w-2/6 w-full flex flex-col justify-start gap-10">
        <h2 className=" text-white">Skills</h2>

        <div className="relative w-full flex flex-wrap gap-5 p-4">
          {skills.map((skill, index) => {
            return (
              <MotionSpan
                key={index}
                className="px-4 py-2 text-black md:text-sm text-[12px] rounded-2xl font-medium shadow-lg"
                style={{
                  backgroundColor: `hsl(${Math.random() * 360}, 70%, 70%)`,
                }}
                variants={skillVariants}
                initial="hidden"
                whileInView="visible"
                custom={index}
                viewport={{ once: true }}
              >
                {skill}
              </MotionSpan>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AboutModule;
