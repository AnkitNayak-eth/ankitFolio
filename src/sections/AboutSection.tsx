import { Card } from "@/app/components/Card";
import { SectionHeader } from "@/app/components/SectionHeader";
import StarIcon from "@/assets/icons/star.svg";
import BookImage from "@/assets/images/book-cover.png";
import Image from "next/image";
import JavaScriptIcon from "@/assets/icons/square-js.svg";
import Html5Icon from "@/assets/icons/square-js.svg";
import Css3Icon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import ChromeIcon from "@/assets/icons/chrome.svg";
import GitHubIcon from "@/assets/icons/github.svg";
import MapImage from "@/assets/images/map.png";
import avatar from "@/assets/images/avatar.png";
import { CardHeader } from "@/app/components/CardHeader";
import { ToolBoxItems } from "@/app/components/ToolBoxItems";
import { PinContainer } from "@/app/components/3d-pin";
const toolBoxItems = [
  {
    title: "JavaScript",
    iconType: JavaScriptIcon,
  },
  {
    title: "HTML5",
    iconType: Html5Icon,
  },
  {
    title: "CSS3",
    iconType: Css3Icon,
  },
  {
    title: "React",
    iconType: ReactIcon,
  },
  {
    title: "Chrome",
    iconType: ChromeIcon,
  },
  {
    title: "GitHub",
    iconType: GitHubIcon,
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
    <div className="pb-20 lg:py-28">
      <div className="container">
        <SectionHeader
          eyebrow="About Me"
          title="A Glimpse Into My World"
          description="Learn more about who I am, what I do, and what inspires me"
        />
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] md:col-span-2 lg:col-span-1">
            <PinContainer title="Download my CV" className="h-[320px] w-[320px]">
              <CardHeader
                title="My Reads"
                description="Explore the books shaping my perspective."
              />
              <div className="w-40 mx-auto mt-2 md:mt-0">
                <Image src={BookImage} alt="Book Cover" />
              </div>
              </PinContainer>
            </Card>
            <Card className="h-[320px] md:col-span-3 lg:col-span-2">
              <CardHeader
                title="My Toolbox"
                description="Explore the technologies and tools used to craft exceptional digital
              experiences."
                className=""
              />
              <ToolBoxItems toolboxItems={toolBoxItems} className="mt-6 animate-move-left [animation-duration:15s]" />
              <ToolBoxItems
                toolboxItems={toolBoxItems}
                className="mt-6 animate-move-right [animation-duration:15s]"
                itemsWrapperClassName=""
              />
            </Card>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 gap-8">
            <Card className="h-[320px] p-0 md:col-span-3 lg:col-span-2">
              <CardHeader
                title="Beyond The Code"
                description="Explore my interests and hobbies in the tech realm."
                className="px-6 pt-6"
              />
              <ToolBoxItems toolboxItems={hobbies} className="mt-6 animate-move-left [animation-duration:15s]" />
              <ToolBoxItems
                toolboxItems={hobbies}
                className="mt-6 animate-move-right [animation-duration:15s]"
                itemsWrapperClassName=""
              />
            </Card>
            <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
            <PinContainer title="I live in India" className="h-[320px] w-[620px] md:w-[280px] lg:w-[320px] mb-8">
              <Image
                src={MapImage}
                alt="Map"
                className="h-full w-full object-cover rounded-3xl"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400">
                <Image src={avatar} alt="Avatar" className="size-20 " />
              </div>
              </PinContainer>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
