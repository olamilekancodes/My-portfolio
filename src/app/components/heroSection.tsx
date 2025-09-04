import Image from "next/image";
import { MessageButton, ResumeButton } from "../shared/Button";
import { Paragraph } from "../shared/Typography";

const HeroSection = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between justify-start items-start mt-0 xl:mt-10 py-10 gap-15 md:gap-0 ">
      <div className="flex flex-col lg:basis-1/2 w-full justify-center text-[#37373C]  mb-20 lg:mb-0">
        <p className="text-[1rem] md:text-[1.5rem] font-medium">
          Hey, I'm Olamilekan Akanni
        </p>
        <div className="flex flex-col text-[#222] my-3">
          <div className="flex items-center">
            <h1 className="text-[3rem] sm:text-[4rem] md:text-[5.5rem] xl:text-[6.25rem] font-bold text-[#6e06f2] leading-none">
              Front
            </h1>
            <h1 className="text-[3rem] sm:text-[4rem] md:text-[5.5rem] xl:text-[6.25rem] font-bold leading-none">
              end
            </h1>
          </div>
          <h1 className="text-[3rem] sm:text-[4rem] md:text-[5.5rem] xl:text-[6.25rem] font-bold leading-none">
            Developer
          </h1>
        </div>

        <Paragraph>
          I’m a passionate frontend developer who specializes in building
          amazing, responsive and user-friendly websites and applications
        </Paragraph>

        <div className="flex gap-4 items-center mt-5 md:mt-8">
          <MessageButton />
          <ResumeButton />
        </div>
      </div>

      <div className="flex items-center justify-center lg:justify-end lg:basis-1/2 w-full md:w-1/2 my-10 md:my-0 self-center">
        <div className="relative">
          <div className="absolute inset-0 rounded-full animate-spin-slow">
            <div className="w-full h-full rounded-full bg-gradient-to-r from-purple-200 via-purple-300 to-purple-400"></div>
          </div>

          <div className="relative flex justify-center items-center p-5 md:p-8 xl:p-10 rounded-full bg-white">
            <Image
              src="/Images/hero-image.jpg"
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
