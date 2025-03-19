import { About } from "./components/about";
import Contact from "./components/contact";
import { HeroSection } from "./components/heroSection";
import { Projects } from "./components/projects";

export default function Home() {
  return (
    <div className="m-auto max-w-6xl px-10 flex flex-col gap-10">
      <HeroSection />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}
