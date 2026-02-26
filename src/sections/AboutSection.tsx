"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import cv from "@/assets/images/cv.png";
import Image from "next/image";
import { FaReact, FaJs, FaHtml5, FaNode } from "react-icons/fa";
import { RiNextjsLine, RiTailwindCssFill } from "react-icons/ri";
import MapImage from "@/assets/images/map.png";
import avatar from "@/assets/images/avatar.gif";
import { CardHeader } from "@/components/CardHeader";
import { ToolBoxItems } from "@/components/ToolBoxItems";
import { PinContainer } from "@/components/3d-pin";
import { AiOutlineClose } from "react-icons/ai"; // Close icon

export const AboutSection = () => {
  const [isCvOpen, setIsCvOpen] = useState(false); // State for CV modal

  const toolBoxItems = [
    { title: "React", iconType: FaReact },
    { title: "JS", iconType: FaJs },
    { title: "NextJS", iconType: RiNextjsLine },
    { title: "Html", iconType: FaHtml5 },
    { title: "Tailwind", iconType: RiTailwindCssFill },
    { title: "NodeJS", iconType: FaNode },
  ];

  const hobbies = [
    { title: "Painting", emoji: "🎨" },
    { title: "Photography", emoji: "📸" },
    { title: "Gaming", emoji: "🎮" },
    { title: "Hiking", emoji: "🥾" },
    { title: "Music", emoji: "🎶" },
    { title: "Fitness", emoji: "💪" },
    { title: "Reading", emoji: "📚" },
  ];

  return (
    <div className="pb-20 lg:py-28 mt-8" id="about">
      <div className="container">
        <SectionHeader
          eyebrow="About Me"
          title="A Glimpse Into My World"
          description="Learn more about who I am, what I do, and what inspires me"
        />

        <div className="mt-20 flex flex-col gap-4">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            {/* CV Card */}
            <motion.div
              initial={{ opacity: 0, x: -100, rotate: -10, scale: 0.8 }}
              whileInView={{ opacity: 1, x: 0, rotate: 0, scale: 1 }}
              transition={{ type: "spring", bounce: 0.4, duration: 1.2 }}
              viewport={{ once: true, amount: 0.3 }}
              className="md:col-span-2 lg:col-span-1"
            >
              <Card className="h-[320px] cursor-pointer">
                <div onClick={() => setIsCvOpen(true)}>
                  <PinContainer
                    title="View my CV"
                    className="h-[320px] w-[320px]"
                  >
                    <CardHeader
                      title="My CV"
                      description="Click to view my CV."
                    />
                    <div className="w-40 mx-auto mt-2 md:mt-0">
                      <Image src={cv} alt="cv" />
                    </div>
                  </PinContainer>
                </div>
              </Card>
            </motion.div>

            {/* Toolbox */}
            <motion.div
              initial={{ opacity: 0, x: 100, rotate: 10, scale: 0.8 }}
              whileInView={{ opacity: 1, x: 0, rotate: 0, scale: 1 }}
              transition={{ type: "spring", bounce: 0.4, duration: 1.2, delay: 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
              className="h-[320px] md:col-span-3 lg:col-span-2"
            >
              <Card>
                <CardHeader
                  title="My Toolbox"
                  description="Explore the technologies and tools used to craft exceptional digital experiences."
                />
                <ToolBoxItems
                  toolboxItems={toolBoxItems}
                  className="m-6 animate-move-left [animation-duration:15s]"
                />
                <ToolBoxItems
                  toolboxItems={toolBoxItems}
                  className="m-6 animate-move-right [animation-duration:15s]"
                />
              </Card>
            </motion.div>
          </div>

          {/* Hobbies & Map */}
          <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 gap-8 mt-8">
            <motion.div
              initial={{ opacity: 0, y: 100, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ type: "spring", bounce: 0.4, duration: 1.2, delay: 0.4 }}
              viewport={{ once: true, amount: 0.3 }}
              className="h-[320px] md:col-span-3 lg:col-span-2"
            >
              <Card>
                <CardHeader
                  title="Beyond The Code"
                  description="Explore my interests and hobbies in the tech realm."
                />
                <ToolBoxItems
                  toolboxItems={hobbies}
                  className="m-6 animate-move-left [animation-duration:15s]"
                />
                <ToolBoxItems
                  toolboxItems={hobbies}
                  className="m-6 animate-move-right [animation-duration:15s]"
                  itemsWrapperClassName=""
                />
              </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 100, rotate: 5, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0, scale: 1 }}
              transition={{ type: "spring", bounce: 0.4, duration: 1.2, delay: 0.6 }}
              viewport={{ once: true, amount: 0.3 }}
              className="md:col-span-2 lg:col-span-1"
            >
              <Card className="h-[320px] p-0 relative">
                <PinContainer
                  title="I live in India"
                  className="h-[320px] w-[620px] md:w-[280px] lg:w-[320px] mb-8"
                >
                  <Image
                    src={MapImage}
                    alt="Map"
                    className="h-full w-full object-cover rounded-3xl"
                  />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-10 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400">
                    <Image
                      src={avatar}
                      alt="Avatar"
                      className="size-10 rounded-full"
                    />
                  </div>
                </PinContainer>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>

      {isCvOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm animate-fade-in">
          <Card className="relative w-screen max-w-3xl rounded-2xl shadow-2xl transform transition-transform duration-500 animate-slide-up h-[80vh] lg:h-[95vh] flex justify-center items-center">
            <button
              className="absolute top-4 right-4 text-4xl text-white hover:text-gray-400 z-10"
              onClick={() => setIsCvOpen(false)}
            >
              <AiOutlineClose />
            </button>

            <div className="w-full h-full overflow-auto flex justify-center items-center p-4">
              <Image
                src={cv}
                alt="CV"
                className="w-auto h-auto max-w-full max-h-full object-contain rounded-xl shadow-md lg:scale-[1.3]"
              />
            </div>
            <button
              onClick={() => window.open("/updatedMyCV.pdf", "_blank")}
              className="absolute my-3 bottom-2 left-10 lg:left-20 h-12 overflow-hidden rounded-full p-[3px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
            >
              <span
                className="absolute inset-[-1000%] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"
                style={{ animation: "spin 4s linear infinite" }}
              />

              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-black px-6 py-3 text-sm font-medium text-white backdrop-blur-md">
                View PDF →
              </span>
            </button>
          </Card>
        </div>
      )}
    </div>
  );
};
