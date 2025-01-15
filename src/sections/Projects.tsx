import frens from "@/assets/images/frens.png";
import nextShare from "@/assets/images/nextShare.png";
import aura from "@/assets/images/aura.png";
import llama from "@/assets/images/llama.png";
import Image from "next/image";
import { FaRegCircleCheck } from "react-icons/fa6";
import { FaExternalLinkAlt } from "react-icons/fa";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";

const portfolioProjects = [
  {
    company: "Personal Project",
    year: "2024",
    title: "Frens - AI Powered Chat Mobile App",
    results: [
      {
        title:
          "Developed a real-time chat application using React Native and Firebase.",
      },
      {
        title:
          "Integrated my self built Llama AI API for AI-powered chatbot interactions.",
      },
      {
        title:
          "Implemented secure user authentication and media sharing with Firebase.",
      },
    ],
    link: "https://github.com/AnkitNayak-eth/Frens-AI-Powered-Chat-Mobile-Application",
    option: "Visit Repo",
    image: frens,
  },
  {
    company: "Personal Project",
    year: "2024",
    title: "NextShare - File Sharing Webapp",
    results: [
      {
        title:
          "Integrated Cloudinary for file storage and MongoDB for upload logs.",
      },
      {
        title:
          "Implemented URL shortening and QR code generation for easy sharing.",
      },
      {
        title:
          "Enabled file uploads up to 100MB with automatic expiration within 24 hours.",
      },
    ],
    link: "https://next-shareit.vercel.app",
    option: "Visit Live WebApp",
    image: nextShare,
  },
  {
    company: "Personal Project",
    year: "2024",
    title: "Aura - Wallpaper Mobile App",
    results: [
      {
        title:
          "Developed a sleek wallpaper app using React Native powered by the Pixabay API.",
      },
      {
        title:
          "Implemented high-quality wallpaper exploration, search, and seamless download features.",
      },
      {
        title:
          "Built a visually appealing image grid for improved wallpaper browsing.",
      },
    ],
    link: "https://github.com/AnkitNayak-eth/Aura-wallpaper-app",
    option: "Visit Repo",
    image: aura,
  },
  {
    company: "Personal Project",
    year: "2024",
    title: "Llama - Ai API and Chat Webapp",
    results: [
      {
        title:
          "Developed Llama 3.3 70B API, delivering advanced, context-aware AI responses.",
      },
      {
        title: "Built interactive chat feature using Next.js, and TailwindCSS.",
      },
      {
        title:
          "Achieved performance on par with GPT-4.o, enhancing AI versatility.",
      },
    ],
    link: "https://llama-ai.vercel.app",
    option: "Visit Live WebApp",
    image: llama,
  },
];

export const ProjectsSection = () => {
  return (
    <section className="pb-16 lg:py-24" id="project">
      <div className="container">
        <SectionHeader
          eyebrow="Real-World Results"
          title="Featured Projects"
          description="See How I Transformed Concepts Into Digital Experience."
        />
        <div className="md:mt-20 flex flex-col mt-10 gap-20">
          {portfolioProjects.map((project, projectIndex) => (
            <div
              key={project.title}
              className="after:pointer-events-none sticky transition-all duration-300 hover:scale-[1.01]"
              style={{ top: `calc(64px + ${projectIndex * 60}px` }}
            >
              <Card>
                <div className="px-6 pt-6 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 transition-all duration-300">
                  <div className="lg:grid lg:grid-cols-2 lg:gap-16 relative">
                    <div className="lg:pb-16">
                      <div className="inline-flex items-center gap-2 uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text">
                        <span>{project.company}</span>
                        <span className="text-white/30">&bull;</span>
                        <span>{project.year}</span>
                      </div>
                      <h3 className="font-serif text-2xl mt-3 md:mt-5 md:text-4xl font-bold">
                        {project.title}
                      </h3>
                      <hr className="border-t-2 border-white/10 my-4 md:my-6" />
                      <ul className="flex flex-col gap-4 my-6 md:my-8">
                        {project.results.map((result, index) => (
                          <li
                            key={index}
                            className="flex items-center gap-3 text-sm md:text-base text-white/60 hover:text-white/90 transition-colors duration-200"
                          >
                            <FaRegCircleCheck className="text-emerald-400 flex-shrink-0" />
                            <span>{result.title}</span>
                          </li>
                        ))}
                      </ul>
                      <a
                        href={project.link}
                        className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors duration-200 group"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button className="bg-white text-black h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                          <span>{project.option}</span>
                          <FaExternalLinkAlt />
                        </button>
                      </a>
                    </div>
                    <div>
                      <Image
                        src={project.image}
                        alt={project.title}
                        className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                      />
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
