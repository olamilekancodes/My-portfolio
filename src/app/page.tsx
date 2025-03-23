import HeroSection from "./components/heroSection";
import Projects from "./components/projects";
import Contact from "./components/contact";
import AboutModule from "./components/about";

export default function Home() {
  return (
    <div className="m-auto max-w-6xl px-10 flex flex-col gap-10">
      <HeroSection />
      <AboutModule />
      <Projects />
      <Contact />
    </div>
  );
}
