"use client";

import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";

import { Paragraph } from "../shared/Typography";

const banner = [
  {
    id: 1,
    list: [
      "JSON & data manipulation",
      "Code Optimization",
      "Caching strategies",
      "Git/GitHub",
      "Styled-components",
      "Sass/SCSS",
      "Bootstrap",
      "REST APIs",
    ],
  },
  {
    id: 2,
    list: [
      "React.js",
      "Next.js",
      "Vue.js",
      "Typescript",
      "Tailwind CSS",
      "Material UI",
      "Redux",
      "React Query",
      "Shadcn",
    ],
  },
  {
    id: 3,
    list: [
      "Webflow",
      "Problem-solving & Debugging",
      "Effective Communication",
      "Leadership",
      "Commitment",
      "Collaboration",
    ],
  },
];

const BannerRow = ({ row, direction }: { row: any; direction: number }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const rowRef = useRef<HTMLDivElement>(null);
  const [maxX, setMaxX] = useState(0);

  useEffect(() => {
    if (containerRef.current && rowRef.current) {
      const containerWidth = containerRef.current.offsetWidth;
      const rowWidth = rowRef.current.scrollWidth;
      setMaxX(rowWidth - containerWidth);
    }
  }, []);

  return (
    <div ref={containerRef} className="w-full overflow-hidden">
      <motion.div
        ref={rowRef}
        className="flex items-center gap-2 whitespace-nowrap"
        animate={
          maxX > 0
            ? { x: direction === 1 ? [0, -maxX, 0] : [-maxX, 0, -maxX] }
            : {}
        }
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {/* {row.list.map((item: string, i: number) => (
          <Paragraph
            key={`${row.id}-${i}`}
            className="px-4 py-1 bg-[#222] text-white rounded-xl"
          >
            {item}
          </Paragraph>
        ))} */}

        {row.list.map((item: string, i: number) => (
          <div key={`${row.id}-${i}`} className="flex items-center">
            <Paragraph className="px-4 py-1 bg-[#222] text-white rounded-xl">
              {item}
            </Paragraph>

            {i < row.list.length - 1 && (
            
                <Image
                src="/Images/star.png"
                alt="star"
                width={20}
                height={20}
                className="object-contain"
              />
     
            )}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const Banner = () => {
  return (
    <div className="bg-[#B8B8B8] w-full h-[20rem] py-10 flex flex-col justify-between items-start my-20 rounded-xl">
      {banner.map((row, index) => {
        const direction = index === 1 ? -1 : 1;
        return <BannerRow key={row.id} row={row} direction={direction} />;
      })}
    </div>
  );
};

export default Banner;
