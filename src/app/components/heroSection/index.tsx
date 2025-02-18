import Image from "next/image";

export const HeroSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between text-white py-10 mb-10 md:h-[37rem] gap-15 md:gap-0">
      <div className="flex flex-col w-full md:w-1/2 lg:gap-10 gap-7 relative justify-center my-10 md:my-0">
        <Image
          src="/Images/eclipse.png"
          alt="eclipse-image"
          width={40}
          height={40}
        />

        <div className=" text-[#6091e0]">
          <h1 className="lg:text-4xl md:text-3xl text-2xl itim">
            Olamilekan Akanni
          </h1>
          <h3 className="lg:text-3xl md:text-2xl itim text-xl">
            <i>Frontend Developer</i>
          </h3>
        </div>

        <p className="md:text-sm text-xs text-left font-extralight tracking-tight w-full md:w-3/4">
          I specialize in building sleek, responsive, and highly interactive
          user interfaces. My expertise lies in crafting scalable and
          maintainable codebases, ensuring seamless user experiences across
          different devices and screen sizes.
        </p>

        <div className="ml-16">
          <Image
            src="/Images/blue-step.png"
            alt="step-image2"
            width={70}
            height={70}
            className="w-[35px] h-[35px] md:w-[50px] md:h-[50px] lg:w-[70px] lg:h-[70px] rotate-90"
          />
        </div>

        <div className="flex flex-row gap-5 absolute top-[-3rem] right-16 -rotate-180">
          <Image
            src="/Images/white-step.png"
            alt="step-image1"
            width={70}
            height={70}
            className="w-[35px] h-[35px] md:w-[50px] md:h-[50px] lg:w-[70px] lg:h-[70px]"
          />
        </div>
      </div>

      <div className=" flex items-center justify-center  w-full md:w-1/2  my-10 md:my-0 ">
        <div className="relative w-[200px] h-[200px] md:w-[250px] md:h-[250px] lg:w-[280px] lg:h-[280px]  ">
          <Image
            src="/Images/hero-image.png"
            alt="hero-image"
            width={250}
            height={250}
            className="rounded-[1.25rem] z-20 relative md:w-[200px] md:h-[200px] lg:w-[250px] lg:h-[250px] object-cover w-[170px] h-[170px]"
          />

          <div className="rounded-[0.6rem] w-[160px] h-[150px] md:w-[200px] md:h-[180px] lg:w-[240px] lg:h-[220px] absolute bottom-3 right-3 lg:bottom-4 lg:right-0 md:bottom-7 md:right-6 border-[#eeeeee] border-2 z-0"></div>

          <div>
            <Image
              src="/Images/box-vector.png"
              alt="square vector"
              width={70}
              height={70}
              className="z-10 absolute -bottom-[3px] -right-[20px] md:bottom-[13px] md:-right-[8px] lg:-bottom-[5px] lg:-right-[2.8rem] w-[50px] h-[50px] lg:w-[70px] lg:h-[70px] "
            />
          </div>

          <div>
            <Image
              src="/Images/box-vector.png"
              alt="square vector"
              width={70}
              height={70}
              className="z-10 absolute -top-[30px] -left-[35px] lg:-top-[2.5rem] lg:-left-[2.8rem] rotate-180 w-[50px] h-[50px] lg:w-[70px] lg:h-[70px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
