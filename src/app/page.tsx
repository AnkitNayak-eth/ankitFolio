import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/HeroSection";
import { ShootingStars } from "@/components/shooting-stars";
import { StarsBackground } from "@/components/stars-background";
import {ProjectsSection} from "@/sections/Projects";
import { TapeSection } from "@/sections/TapeSection";
import { TestimonialsSection } from "@/sections/Testimonials";
import { AboutSection } from "@/sections/AboutSection";
import { CallToAction,} from "@/sections/CallToAction";
import { Footer } from "@/sections/Footer";
export default function Home() {
  return (
    <>
    <div className="relative dark:bg-grid-white/[0.2]">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <Header />
      <HeroSection />
      <AboutSection/>
      <TapeSection />
      <TestimonialsSection />
      <TapeSection direction="right" />
      <ProjectsSection />
      <CallToAction />
      <Footer />
      <ShootingStars />
      <StarsBackground />
    </div>
  </>
  );
}