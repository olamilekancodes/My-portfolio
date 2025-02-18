import { HeroSection } from "./components/heroSection";
import { NavBar } from "./components/nav";

export default function Home() {
  return (
    <div className="bg-[#080808]">
      <NavBar />
      <div className="m-auto max-w-6xl px-10 ">
        <HeroSection />
      </div>
    </div>
  );
}
