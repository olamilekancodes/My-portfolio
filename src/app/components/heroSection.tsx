import Image from "next/image";

export const HeroSection = () => {
  return (
    <div
      id="home"
      className="flex flex-col md:flex-row items-center justify-between py-10 md:h-[37rem] gap-15 md:gap-0"
    >
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

        <p className="text-left w-full md:w-3/4 text-sm md:text-base text-[#d8d8d8]">
          I specialize in building sleek, responsive, and highly interactive
          user interfaces. My expertise lies in crafting scalable and
          maintainable codebases, ensuring seamless user experiences across
          different devices and screen sizes.
        </p>
      </div>

      <div className=" flex items-center justify-center  w-full md:w-1/2  my-10 md:my-0 ">
        <Image
          src="/Images/hero-image.png"
          alt="hero-image"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
};
