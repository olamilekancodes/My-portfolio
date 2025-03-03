import { About } from "./components/about";
import { HeroSection } from "./components/heroSection";
import { NavBar } from "./components/nav";

export default function Home() {
  return (
    <div className="bg-[#080808]">
      <NavBar />
      <div className="m-auto max-w-6xl px-10 flex flex-col gap-10">
        <HeroSection />
        <About />
        <About />
      </div>
    </div>
  );
}
