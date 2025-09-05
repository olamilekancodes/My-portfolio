"use client";

import { motion } from "framer-motion";

import { PageTitle } from "../shared/PageTitle";
import { Paragraph } from "../shared/Typography";
import EnhancedSectionTitle from "../shared/EnhancedSectionTitle";
import Banner from "./banner";

const skills = [
  {
    title: "Frontend",
    list: [
      "HTML5",
      "CSS3",
      "Javascript",
      "React.js",
      "Next.js",
      "Vue.js",
      "Angular",
      "Typescript",
      "Tailwind CSS",
      "Material UI",
      "Redux",
      "React Query",
      "Shadcn",
      "Styled-Components",
      "Sass/SCSS",
      "Bootstrap",
      "REST APIs",
      "JSON & Data Manipulation",
      "Code Optimization",
      "Caching Strategies",
      "Git/GitHub",
      "Responsiveness",
      "Basic Knowledge of Backend",
    ],
  },
  {
    title: "Low Code",
    list: ["Webflow", "Bubble (Basic)"],
  },
  {
    title: "Soft Skill",
    list: [
      "Problem-Solving & Debugging",
      "Effective Communication",
      "Leadership",
      "Commitment",
      "Collaboration",
      "Attention to Detail",
    ],
  },
];

const fadeInVariant = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const skillItemVariant = {
  hidden: { opacity: 0, y: -20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const AboutModule = () => {
  return (
    <div className="py-10 mt-0 xl:mt-10">
      <PageTitle
        title={
          <>
            <span className="text-[#6e06f2]">About</span> Me
          </>
        }
        paragraph="Crafting seamless and visually engaging user experiences is my passion. As a frontend developer, I put my creativity and attention to detail into every project, turning ideas into responsive and functional websites amd applications."
      />

      <Banner />

      <div className="flex flex-col my-20 gap-14 md:gap-24 lg:gap-28">
        <EnhancedSectionTitle title="My Story">
          <motion.div
            variants={fadeInVariant}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col gap-2"
          >
            <Paragraph>
              My journey as a frontend developer began in 2020, during the
              COVID-19 lockdown. With the world on pause, I saw the stay-at-home
              curfew as an opportunity to invest in myself, so I dived into
              online classes on web development. What started as curiosity
              quickly grew into passion, and I became a self-taught developer.
            </Paragraph>
            <Paragraph>
              After the pandemic era, I landed my first internship at Adeoye
              Orimoloye & Co, where I worked on the law firm’s website. That
              experience opened doors for me, and shortly after, I joined Sync
              Skill, a Nigerian-Australian tech company. There, I contributed to
              a B2C web application and successfully implemented a Stripe
              payment gateway, gaining valuable hands-on experience with
              real-world product challenges.
            </Paragraph>
            <Paragraph>
              I currently work at Organogram, a enterprise solutions company
              building HR, payroll, and employee performance applications for
              organizations of different sizes. Each step of this journey has
              sharpened my skills and deepened my love for creating seamless,
              impactful user experiences.
            </Paragraph>
            <Paragraph>
              Looking ahead, I aspire to work on projects that cross continents,
              building digital solutions that connect people from different
              places and make the world feel just a little closer.
            </Paragraph>
          </motion.div>
        </EnhancedSectionTitle>

        <EnhancedSectionTitle title="Skills">
          <div className="flex flex-col gap-10 mt-5">
            {skills.map((skillGroup, index) => (
              <motion.div
                key={index}
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
              >
                <motion.h3 className="text-[#222] leading-none text-[1.25rem] md:text-2xl">
                  {skillGroup.title}
                </motion.h3>

                <motion.div
                  variants={container}
                  className="flex flex-wrap items-center justify-start gap-2 mt-2"
                >
                  {skillGroup.list.map((item, idx) => (
                    <motion.div key={idx} variants={skillItemVariant}>
                      <Paragraph className="px-4 py-1 border-[1.5px] md:border-2 border-[#9498a0] rounded-3xl">
                        {item}
                      </Paragraph>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </EnhancedSectionTitle>
      </div>
    </div>
  );
};

export default AboutModule;
