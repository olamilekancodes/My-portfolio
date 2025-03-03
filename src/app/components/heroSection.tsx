import Image from "next/image";

export const HeroSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between text-white py-10 md:h-[37rem] gap-15 md:gap-0">
      <div className="flex flex-col w-full md:w-1/2 lg:gap-10 gap-7 relative justify-center my-10 md:my-0">
        <div className="bg-[#126cf8] rounded-full w-12 h-12 md:w-16 md:h-16"></div>

        <div className=" text-[#6091e0]">
          <h1 className="lg:text-4xl md:text-3xl text-2xl itim">
            Olamilekan Akanni
          </h1>
          <h3 className="lg:text-3xl md:text-2xl itim text-xl">
            <i>Frontend Developer</i>
          </h3>
        </div>

        {/* <p className="md:text-sm text-xs text-left font-extralight tracking-tight w-full md:w-3/4"> */}
        <p className="text-left w-full md:w-3/4 text-sm md:text-base">
          I specialize in building sleek, responsive, and highly interactive
          user interfaces. My expertise lies in crafting scalable and
          maintainable codebases, ensuring seamless user experiences across
          different devices and screen sizes.
        </p>
      </div>

      <div className=" flex items-center justify-center  w-full md:w-1/2  my-10 md:my-0 ">
        <div className="relative w-[12.5rem] h-[12.5rem] md:w-[15.63rem] md:h-[15.63rem] lg:w-[17.5rem] lg:h-[17.5rem]  ">
          <Image
            src="/Images/hero-image.png"
            alt="hero-image"
            width={400}
            height={400}
            className="rounded-[1.25rem] z-[5] relative  md:w-[12.5rem] md:h-[12.5rem] lg:w-[16.25rem] lg:h-[16.25rem] object-cover w-[10.63rem] h-[10.63rem]"
          />

          <div className="rounded-[0.6rem] w-[10rem] h-[10rem] md:w-[12.5rem] md:h-[11.25rem] lg:w-[15.5rem] lg:h-[14.5rem] absolute bottom-3 right-3 lg:bottom-1 lg:right-0 md:bottom-7 md:right-6 border-[#eeeeee] border-2 z-0"></div>

          <div>
            <Image
              src="/Images/box-vector.png"
              alt="square vector bottom"
              width={70}
              height={70}
              className="z-0 absolute -bottom-[3px] -right-[1.25rem] md:bottom-[13px] md:-right-[8px] lg:-bottom-5 lg:-right-[2.1rem] w-[3.13rem] h-[3.13rem] lg:w-[4.38rem] lg:h-[4.38rem]"
            />
          </div>

          <div>
            <Image
              src="/Images/box-vector.png"
              alt="square vector top"
              width={70}
              height={70}
              className="z-0 absolute -top-[30px] -left-[35px] lg:-top-[2.5rem] lg:-left-[2.8rem] rotate-180 w-[50px] h-[50px] lg:w-[70px] lg:h-[70px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
