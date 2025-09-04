import Image from "next/image";

import { MessageButton, ResumeButton } from "../shared/Button";
import { Paragraph, Title } from "../shared/Typography";

const HeroSection = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between justify-start items-start mt-0 xl:mt-10 py-10 border border-red-500 gap-15 md:gap-0 ">
      <div className="flex flex-col lg:basis-1/2 w-full gap-4 md:gap-7 lg:gap-10 justify-center text-[#37373C]  mb-20 lg:mb-0">
        <p className="text-[1.5rem] font-medium">Hey, I'm Olamilekan</p>
        <div className="flex flex-col gap-4 md:gap-10 lg:gap-12">
          <div className="flex items-center">
            <h1 className="text-[3rem] sm:text-[4rem] md:text-[5.5rem] xl:text-[6.25rem] font-bold text-[#6e06f2]">
              Front
            </h1>
            <h1 className="text-[3rem] sm:text-[4rem] md:text-[5.5rem] xl:text-[6.25rem] font-bold">
              end
            </h1>
          </div>
          <h1 className="text-[3rem] sm:text-[4rem] md:text-[5.5rem] xl:text-[6.25rem] font-bold">
            Developer
          </h1>
        </div>

        <Paragraph>
          I’m a passionate frontend developer who specializes in building
          amazing, responsive and user-friendly websites and applications.
        </Paragraph>

        <div className="flex gap-4 items-center mt-3 md:mt-0">
          <MessageButton />
          <ResumeButton />
        </div>
      </div>

      <div className="flex items-center justify-center lg:justify-end lg:basis-1/2 w-full md:w-1/2 my-10 md:my-0 self-center">
        <div className="p-[2px] rounded-full bg-gradient-to-r from-purple-200 via-purple-300 to-purple-400">
          <div className="flex justify-center items-center p-7 md:p-10 xl:p-12 rounded-full bg-white">
            <Image
              src="/Images/hero-image.png"
              alt="hero-image"
              width={300}
              height={300}
              className="rounded-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
