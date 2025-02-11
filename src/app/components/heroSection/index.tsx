import Image from "next/image";

import styles from "./styles.module.css";

export const HeroSection = () => {
  return (
    <div className="relative flex flex-col items-center justify-center h-screen  bg-[#040404df]">
      <div className="absolute inset-0 z-[-1]">
        <Image
          src="/Images/hero-bg.jpg"
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>
      <div className="w-[250px] h-[250px] overflow-hidden rounded-full relative">
        <Image
          src="/Images/hero-image.jpeg"
          alt="Image of Olamilekan AKanni"
          width={250}
          height={250}
          className="rounded-full"
        />
      </div>

      <div className={styles.rotatingText}>
        <svg className="w-full h-full">
          <defs>
            <path
              id="circlePath"
              d="M 200, 50 A 150,150 0 1,1 199.9,50"
              fill="transparent"
            />
          </defs>

          <text
            fill="white"
            fontSize="20.8"
            fontWeight="bold"
            letterSpacing="1"
          >
            <textPath href="#circlePath" startOffset="0%">
              Frontend Developer • Olamilekan Akanni • Frontend Developer •
              Olamilekan Akanni •
            </textPath>
          </text>
        </svg>
      </div>
    </div>
  );
};
