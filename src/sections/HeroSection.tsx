"use client";
import avatar from "@/assets/images/avatar.gif";
import Image from "next/image";
import { FaArrowDown } from "react-icons/fa";
import { HeroOrbit } from "@/components/HeroOrbit";
import { FaReact } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { RiNextjsLine } from "react-icons/ri";
import { FaHtml5 } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaNode } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { FaLinux } from "react-icons/fa";
import { FlipWords } from "@/components/flip-words";
import { footerLinks } from "./Footer";
import { useState } from "react";

export const HeroSection = () => {
  const words = [
    "Web3 Enthusiast.",
    "Full-Stack Dev.",
    "Digital Artist.",
    "Technophile.",
    "Tech-Savvy.",
  ];
  const [buttonText, setButtonText] = useState("Let's Connect");

  const handleCopy = () => {
    navigator.clipboard.writeText("ankitkumarnayak1234@gmail.com").then(() => {
      setButtonText("Email Copied!");
      setTimeout(() => {
        setButtonText("Let's Connect");
      }, 1000);
    });
  };

  const handleScrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="py-32 md:py-48 lg:py-60 relative overflow-x-clip" id="home">
      
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_50%,transparent)] lg:mt-32">
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
        <HeroOrbit size={720} orbitDuration="52s" rotation={270}>
          <div className="size-3 rounded-full bg-gray-400"></div>
        </HeroOrbit>
        <HeroOrbit size={720} orbitDuration="52s" rotation={315}>
          <div className="size-3 rounded-full bg-gray-400"></div>
        </HeroOrbit>
        <HeroOrbit size={720} orbitDuration="52s" rotation={360}>
          <div className="size-3 rounded-full bg-gray-400"></div>
        </HeroOrbit>
      </div>
      <div className="container relative z-10">
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
            Hi, I’m Ankit 👋
            <br />
            I’m a<FlipWords words={words} className="text-white"/>
          </h1>
          <p className="mt-4 text-center text-white/60 md:text-lg">
            Full-Stack Developer skilled in Next.js, MERN stack, and React
            Native. Exploring Web3, NFTs, and digital arts. Currently learning
            Spring Boot!
          </p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
            <button
              onClick={handleScrollToAbout}
              className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl hover:translate-y-2 transition duration-300"
            >
              <span className="font-semibold">Explore My Work</span>
              <FaArrowDown />
            </button>
            <button
              onClick={handleCopy}
              className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl hover:bg-white/70 hover:text-gray-900"
            >
              <span>👋</span>
              <span className="font-semibold">{buttonText}</span>
            </button>
          </div>
          <nav className="flex flex-row items-center gap-8 mt-6">
            {footerLinks.map((link, index) => (
              <a
                href={link.href}
                key={index}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 transform hover:scale-150 transition-transform duration-300 ease-in-out"
              >
                <span>{link.icon}</span>
              </a>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};
