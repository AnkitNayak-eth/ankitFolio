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
import { BlogSection } from "@/sections/Blog";
export default function Home() {
  return (
    <>
    <div className="relative bg-grid-white/[0.1]">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <HeroSection />
      <AboutSection/>
      <TapeSection />
      <TestimonialsSection />
      <TapeSection direction="right" />
      <ProjectsSection />
      <BlogSection />
      <CallToAction />
      <Footer />
      <ShootingStars />
      <StarsBackground />
    </div>
  </>
  );
}