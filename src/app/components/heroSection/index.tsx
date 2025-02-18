import Image from "next/image";

export const HeroSection = () => {
  return (
    <div className="flex flex-row items-center justify-between text-white py-10 mb-10 h-[37rem]">
      <div className="flex flex-col w-1/2 gap-10 relative justify-center">
        <div className=" text-[#6091e0]">
          <h1 className="text-4xl itim">Olamilekan Akanni</h1>
          <h3 className="text-3xl itim">
            <i>Frontend Developer</i>
          </h3>
        </div>
        <p className="text-sm text-justify font-extralight tracking-tight w-3/4">
          I specialize in building sleek, responsive, and highly interactive
          user interfaces. My expertise lies in crafting scalable and
          maintainable codebases, ensuring seamless user experiences across
          different devices and screen sizes.
        </p>

        <div className="flex flex-row gap-5 absolute top-[-4rem] left-0 ">
          <Image
            src="/Images/eclipse.png"
            alt="eclipse-image"
            width={40}
            height={40}
          />
        </div>

        <div className="flex flex-row gap-5 absolute top-[-3rem] right-16 -rotate-180">
          <Image
            src="/Images/white-step.png"
            alt="step-image1"
            width={70}
            height={70}
          />
        </div>

        <div className="flex flex-row gap-5 absolute bottom-[-8rem]  left-28 rotate-90 ">
          <Image
            src="/Images/blue-step.png"
            alt="step-image2"
            width={70}
            height={70}
          />
        </div>
      </div>

      <div className=" flex items-center justify-center w-1/2  ">
        <div className="relative w-[17.5rem] h-[17.5rem] ">
          <Image
            src="/Images/hero-image.png"
            alt="hero-image"
            width={250}
            height={250}
            className="rounded-[1.25rem] z-20 relative"
          />

          <div className="rounded-[0.6rem] w-[15rem] h-[13.75rem] absolute bottom-4 right-0 border-[#eeeeee] border-2 z-0"></div>

          <div>
            <Image
              src="/Images/box-vector.png"
              alt="square vector"
              width={70}
              height={70}
              className="z-10 absolute -bottom-[5px] -right-[2.8rem]"
            />
          </div>

          <div>
            <Image
              src="/Images/box-vector.png"
              alt="square vector"
              width={70}
              height={70}
              className="z-10 absolute -top-[2.5rem] -left-[2.8rem] rotate-180"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
