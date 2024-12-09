import avatar from "@/assets/images/avatar.gif";
import Image from "next/image";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import StarIcon from "@/assets/icons/star.svg";
import SparkleIcon from "@/assets/icons/sparkle.svg";
import { HeroOrbit } from "@/app/components/HeroOrbit";
import { FaReact } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { RiNextjsLine } from "react-icons/ri";
import { FaHtml5 } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaNode } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { FaLinux } from "react-icons/fa";
import { FlipWords } from "@/app/components/flip-words";

export const HeroSection = () => {
  const words = ["web3 Enthusiast.", "Full-Stack Developer.", "Digital Artist.", "Technophile."];
  return (
    <div className="py-32 md:py-48 lg:py-60 relative z-10 overflow-x-clip">
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_50%,transparent)] -z-10">
        <div className="size-[700px] hero-ring"></div>
        <div className="size-[900px] hero-ring"></div>
        <div className="size-[1100px] hero-ring"></div>
        <div className="size-[1300px] hero-ring"></div>
        <HeroOrbit size={630} orbitDuration="32s" rotation={45}>
          <FaReact className=" size-16" />
        </HeroOrbit>
        <HeroOrbit size={630} orbitDuration="32s" rotation={90}>
          <RiNextjsLine className=" size-16" />
        </HeroOrbit>
        <HeroOrbit size={630} orbitDuration="32s" rotation={135}>
          <FaJs className=" size-16" />
        </HeroOrbit>
        <HeroOrbit size={630} orbitDuration="32s" rotation={180}>
          <FaHtml5 className=" size-16" />
        </HeroOrbit>
        <HeroOrbit size={630} orbitDuration="32s" rotation={225}>
          <RiTailwindCssFill className=" size-16" />
        </HeroOrbit>
        <HeroOrbit size={630} orbitDuration="32s" rotation={270}>
          <FaNode className=" size-16" />
        </HeroOrbit>
        <HeroOrbit size={630} orbitDuration="32s" rotation={315}>
          <SiMongodb className=" size-16" />
        </HeroOrbit>
        <HeroOrbit size={630} orbitDuration="32s" rotation={360}>
          <FaLinux className=" size-16" />
        </HeroOrbit>
        <HeroOrbit size={720} orbitDuration="52s" rotation={45}>
          <div className="size-3 rounded-full bg-gray-400"></div>
        </HeroOrbit>
        <HeroOrbit size={720} orbitDuration="52s" rotation={90}>
          <div className="size-3 rounded-full bg-gray-400"></div>
        </HeroOrbit>
        <HeroOrbit size={720} orbitDuration="52s" rotation={135}>
          <div className="size-3 rounded-full bg-gray-400"></div>
        </HeroOrbit>
        <HeroOrbit size={720} orbitDuration="52s" rotation={180}>
          <div className="size-3 rounded-full bg-gray-400"></div>
        </HeroOrbit>
        <HeroOrbit size={720} orbitDuration="52s" rotation={225}>
          <div className="size-3 rounded-full bg-gray-400"></div>
        </HeroOrbit>
        <HeroOrbit size={720} orbitDuration="52s" rotation={180}>
          <div className="size-3 rounded-full bg-gray-400"></div>
        </HeroOrbit>
        <HeroOrbit size={720} orbitDuration="52s" rotation={270}>
          <div className="size-3 rounded-full bg-gray-400"></div>
        </HeroOrbit>
        <HeroOrbit size={720} orbitDuration="52s" rotation={360}>
          <div className="size-3 rounded-full bg-gray-400"></div>
        </HeroOrbit>
      </div>
      <div className="container">
        <div className="flex flex-col items-center">
          <div className="border border-white overflow-hidden rounded-full w-24">
            <Image src={avatar} className="size-max" alt="avatar" />
          </div>
          <div className="bg-black border border-black px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
            <div className="bg-green-500 size-2.5 rounded-full relative">
              <div className="bg-green-500 absolute inset-0 rounded-full animate-ping-large"></div>
            </div>
            <div className="text-sm font-medium">
              Available For New Projects
            </div>
          </div>
        </div>
        <div className="max-w-2xl mx-auto">
          <h1 className="font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide leading-loose">
          Hi, I’m Ankit 👋<br/>
          I’m a<FlipWords words={words} /> <br />
          </h1>
          <p className="mt-4 text-center text-white/60 md:text-lg">
          Full-Stack Developer skilled in Next.js, MERN stack, and React Native. Exploring Web3, NFTs, and digital arts. Currently learning Spring Boot !
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
          <button className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl hover:translate-y-2 transition duration-300">
            <span className="font-semibold">Explore My Work</span>
            <ArrowDown className="size-4" />
          </button>
          <button className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl hover:bg-white/70 hover:text-gray-900">
            <span>👋</span>
            <span className="font-semibold">Let's Connect</span>
          </button>
        </div>
      </div>
    </div>
  );
};
