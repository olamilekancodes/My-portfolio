import { About } from "./components/about";
import { HeroSection } from "./components/heroSection";
import { NavBar } from "./components/nav";
import { Projects } from "./components/projects";

export default function Home() {
  return (
    <div className="m-auto max-w-6xl px-10 flex flex-col gap-10">
      <HeroSection />
      <About />
      <Projects />
    </div>
  );
}
