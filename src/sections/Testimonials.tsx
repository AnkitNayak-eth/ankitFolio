import { Card } from "@/app/components/Card";
import { SectionHeader } from "@/app/components/SectionHeader";
import Georgie from "@/assets/images/Georgie.jpg";
import BL3ED from "@/assets/images/BL3ED.jpg";
import Onur from "@/assets/images/Onur.jpg";
import JohnTC from "@/assets/images/JohnTC.webp";
import Naveen from "@/assets/images/Naveen.webp";
import Image from "next/image";
import { Fragment } from "react";

const testimonials = [
  {
    name: "Georgie Boy",
    position: "Founder @TheAlienBoyNFT",
    text: "Ankit's the GOAT! Dude took our project from 'meh' to 'mind-blowing' in no time. Clean code, crazy ideas, and execution that’s always on point. Can’t wait to work with him again!",
    avatar: Georgie,
  },
  {
    name: "BL3ED",
    position: "Marketing Lead @Meraki_Web3",
    text: "Yo, Ankit’s a total beast at what he does! Took our Web3 game to heights we didn’t even know existed. Smooth execution, next-level ideas, and vibes that just hit different. 🔥",
    avatar: BL3ED,
  },
  {
    name: "Onur",
    position: "Software Developer ",
    text: "In a short period of time, Ankit was able to recover our database and fix critical issues. His expertise and efficiency are impressive. We’re grateful for his support.",
    avatar: Onur,
  },
  {
    name: "JohnTC",
    position: "Crypto Trader",
    text: "Ankit was able to clone our exact Figma design in no time. His speed and precision are unmatched. We were impressed with how efficiently he handled the task.",
    avatar: JohnTC,
  },
  {
    name: "Naveen Choudhary",
    position: "Tech Manager @Elite Esports",
    text: "Ankit did an excellent job deploying our web app on AWS. He made sure everything ran smoothly and efficiently, getting us up and running faster than expected.",
    avatar: Naveen,
  },
];

export const TestimonialsSection = () => {
  return (
    <div>
      <div className="py-16 lg:py-24">
        <SectionHeader
          eyebrow="Happy Clients"
          title="What Clients Say about Me"
          description="Don't just take my word for it. See what my Clients have to say about my work."
        />
        <div className="mt-12 lg:mt-24 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4 -my-4">
          <div className="flex gap-8 pr-8 flex-none animate-move-left [animation-duration:90s] hover:[animation-play-state:paused]">
            {[...new Array(2)].fill(0).map((_, idx) => (
              <Fragment key={idx}>
                {testimonials.map((testimonial) => (
                  <Card
                    key={testimonial.name}
                    className="flex gap-4 max-w-xs md:max-w-md p-6 md:p-8 hover:-rotate-3 transition duration-300"
                  >
                    <div className="size-14 bg-gray-700 items-center justify-center inline-flex rounded-full flex-shrink-0">
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="size-max rounded-full"
                      />
                    </div>
                    <div className="flex gap-4 items-center">
                      <div>
                        <div className="font-semibold">{testimonial.name}</div>
                        <div className="font-sm text-white/40">
                          {testimonial.position}
                        </div>
                        <p className="mt-4 md:mt-6 lg:mt-2 text-sm">
                          {testimonial.text}
                        </p>
                      </div>
                    </div>
                  </Card>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
