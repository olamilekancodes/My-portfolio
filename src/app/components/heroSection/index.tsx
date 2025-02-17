import Image from "next/image";

export const HeroSection = () => {
  return (
    <div className="flex flex-row items-center justify-between h-screen text-white">
      <div className="flex flex-col w-1/2 gap-10 relative justify-center">
        <div className=" text-[#6091e0]">
          <h1 className="text-4xl itim">Olamilekan Akanni</h1>
          <h3 className="text-3xl itim">
            <i>Frontend Developer</i>
          </h3>
        </div>
        <p className="text-sm text-justify font-extralight tracking-tight">
          I specialize in building sleek, responsive, and highly interactive
          user interfaces. My expertise lies in crafting scalable and
          maintainable codebases, ensuring seamless user experiences across
          different devices and screen sizes.
        </p>

        <div className="flex flex-row gap-5 absolute top-[-3rem] left-0 ">
          <Image
            src="/Images/eclipse.png"
            alt="step-image1"
            width={20}
            height={20}
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
            alt="step-image1"
            width={70}
            height={70}
          />
        </div>
      </div>
      <div>
        <p className="text-3xl w-1/2">Olamilekan AKanni</p>
      </div>
    </div>
  );
};
