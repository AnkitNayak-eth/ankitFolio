import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import cv from "@/assets/images/cv.jpg";
import Image from "next/image";
import { FaReact } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { RiNextjsLine } from "react-icons/ri";
import { FaHtml5 } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaNode } from "react-icons/fa";
import MapImage from "@/assets/images/map.png";
import avatar from "@/assets/images/avatar.gif";
import { CardHeader } from "@/components/CardHeader";
import { ToolBoxItems } from "@/components/ToolBoxItems";
import { PinContainer } from "@/components/3d-pin";

const toolBoxItems = [
  {
    title: "React",
    iconType: FaReact,
  },
  {
    title: "JS",
    iconType: FaJs,
  },
  {
    title: "NextJS",
    iconType: RiNextjsLine,
  },
  {
    title: "Html",
    iconType: FaHtml5,
  },
  {
    title: "Tailwind",
    iconType: RiTailwindCssFill,
  },
  {
    title: "NodeJS",
    iconType: FaNode,
  },
];

const hobbies = [
  {
    title: "Painting",
    emoji: "🎨",
  },
  {
    title: "Photography",
    emoji: "📸",
  },
  {
    title: "Gaming",
    emoji: "🎮",
  },
  {
    title: "Hiking",
    emoji: "🥾",
  },
  {
    title: "Music",
    emoji: "🎶",
  },
  {
    title: "Fitness",
    emoji: "💪",
  },
  {
    title: "Reading",
    emoji: "📚",
  },
];

export const AboutSection = () => {
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
            <Card className="h-[320px] md:col-span-2 lg:col-span-1">
              <PinContainer
                title="Download my CV"
                href="/updatedCV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="h-[320px] w-[320px]"
              >
                <CardHeader title="My CV" description="Download my CV here." />
                <div className="w-40 mx-auto mt-2 md:mt-0">
                  <Image src={cv} alt="cv" />
                </div>
              </PinContainer>
            </Card>
            <div className="h-[320px] md:col-span-3 lg:col-span-2">
              <Card>
                <CardHeader
                  title="My Toolbox"
                  description="Explore the technologies and tools used to craft exceptional digital
              experiences."
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
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 gap-8">
            <div className="h-[320px] md:col-span-3 lg:col-span-2">
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
            </div>
            <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
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
          </div>
        </div>
      </div>
    </div>
  );
};
