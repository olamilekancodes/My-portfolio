"use client";

import { useRouter } from "next/navigation";
import { MessageButton } from "./shared/Button";

export default function NotFoundPage() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-[100vh] px-4 text-center">
      <div className="flex items-center justify-center select-none text-black font-black tracking-wider">
        <span className="relative drop-shadow-[4px_4px_0px_#7812ff] leading-none -rotate-3 text-[25vw] md:text-[14rem]">
          4
        </span>

        <span className="relative drop-shadow-[4px_4px_0px_#7812ff] leading-none text-[25vw] md:text-[14rem] mx-2 md:mx-4">
          0
        </span>

        <span className="relative drop-shadow-[4px_4px_0px_#7812ff] leading-none rotate-3 text-[25vw] md:text-[14rem]">
          4
        </span>
      </div>

      <div className="mt-8 flex flex-col gap-3">
        <h1 className="text-2xl md:text-3xl font-bold text-zinc-900">
          Page Not Found
        </h1>
        <p className="text-zinc-500 text-sm md:text-base">
          Let's head back to explore the portfolio.
        </p>
      </div>

      <div className="mt-8">
        <MessageButton title="Back To Home" action={() => router.push("/")} />
      </div>
    </div>
  );
}
