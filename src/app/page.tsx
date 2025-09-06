import HeroSection from "./components/heroSection";
import HomepageSections from "./components/homepageSection";

export default function Home() {
  return (
    <div className="m-auto max-w-6xl flex flex-col gap-10">
      <HeroSection />
      <HomepageSections />
    </div>
  );
}
