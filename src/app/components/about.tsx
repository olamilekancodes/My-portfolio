import Image from "next/image";

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
  "React Query",
];

export const About = () => {
  return (
    <div
      id="about"
      className="flex flex-col md:flex-row justify-between items-center   text-[#d8d8d8] gap-20 md:gap-0 my-10"
    >
      <div className=" w-full md:w-3/6 flex flex-col">
        <Image
          src="/Images/vectors.png"
          alt="eclipse-vector"
          width={100}
          height={100}
          className="w-[100px]"
        />

        <div className="flex flex-col gap-5 my-10">
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
        </div>

        <Image
          src="/Images/vectors.png"
          alt="eclipse-vector"
          width={100}
          height={100}
          className="self-end"
        />
      </div>

      <div className="md:w-2/6 w-full flex flex-col justify-center items-center gap-10">
        <div className="flex flex-col gap-3  justify-center">
          <Image
            src="/Images/box-vector.png"
            alt="box-vector"
            width={300}
            height={300}
            className=""
          />
        </div>
        <div className="flex flex-col gap-3">
          <h3 className=" text-white">Skills</h3>

          <div className="flex gap-10">
            <ul className="flex flex-col gap-1 ml-5">
              {skills.slice(0, 6).map((skill, index) => (
                <li
                  className="text-[12px] list-disc marker:text-orange-300"
                  key={index}
                >
                  {skill}
                </li>
              ))}
            </ul>

            <ul className="flex flex-col gap-1 ml-5">
              {skills.slice(6, 12).map((skill, index) => (
                <li
                  className="text-[12px] list-disc marker:text-orange-300"
                  key={index}
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
