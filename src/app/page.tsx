import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/HeroSection";
import { ProjectsSection } from "@/sections/Projects";
import { TapeSection } from "@/sections/TapeSection";
import { TestimonialsSection } from "@/sections/Testimonials";
import { AboutSection } from "@/sections/AboutSection";
import { CallToAction, } from "@/sections/CallToAction";
import { Footer } from "@/sections/Footer";
import { BlogSection } from "@/sections/Blog";
import Squares from "@/components/Squares";
import { SplashScreen } from "@/components/SplashScreen";

export default function Home() {
  return (
    <SplashScreen>
      <div className="fixed inset-0 z-[-1] pointer-events-none">
        <Squares
          direction="diagonal"
          speed={0.5}
          squareSize={40}
          borderColor="#333"
          hoverFillColor="#222"
        />
      </div>
      <HeroSection />
      <AboutSection />
      <TapeSection />
      <TestimonialsSection />
      <TapeSection direction="right" />
      <ProjectsSection />
      <BlogSection />
      <CallToAction />
      <Footer />
    </SplashScreen>
  );
}