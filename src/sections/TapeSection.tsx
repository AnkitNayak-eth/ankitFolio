import StarIcon from "@/assets/icons/star.svg";
import { Fragment } from "react";

const words = [
  "Performant",
  "Accessible",
  "Secure",
  "Interactive",
  "Scalable",
  "User Friendly",
  "Responsive",
  "Maintainable",
  "Search Optimized",
  "Usable",
  "Reliable",
];

export const TapeSection = ({ direction = 'left' }) => {
  return (
    <div className="py-16 lg:py-24 overflow-x-clip">
      <div className={`bg-gradient-to-r from-green-300 to-sky-400 ${direction === 'left' ? '-rotate-3' : 'rotate-3'} -mx-1`}>
        <div className={`flex [mask-image:linear-gradient(to_${direction},transparent,black_10%,black_90%,transparent)]`}>
          <div className={`flex flex-none gap-4 pr-4 py-3 animate-move-${direction} [animation-duration:30s]`}>
            {[...new Array(2)].fill(0).map((_, idx) => (
              <Fragment key={idx}>
                {words.map((word) => (
                  <div key={word} className="inline-flex gap-4">
                    <span className="text-gray-950 uppercase font-extrabold text-sm">
                      {word}
                    </span>
                    <StarIcon className="size-6 text-gray-950 -rotate-12" />
                  </div>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
