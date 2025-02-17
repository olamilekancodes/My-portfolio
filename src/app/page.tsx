import { HeroSection } from "./components/heroSection";
import { NavBar } from "./components/nav";

export default function Home() {
  return (
    <div className="bg-[#080808]">
      <NavBar />
      <div className="m-auto max-w-6xl px-20 border-2 border-red-500">
        <HeroSection />
      </div>
    </div>
  );
}
