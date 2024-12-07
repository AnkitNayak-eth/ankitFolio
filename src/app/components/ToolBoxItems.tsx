import { twMerge } from "tailwind-merge";
import { TechIcon } from "./TechIcon";
import { Fragment } from "react";

export const ToolBoxItems = ({
  toolboxItems,
  className,
  itemsWrapperClassName,
}: {
  toolboxItems: {
    title: string;
    iconType?: React.ElementType;
    emoji?: string;
  }[];
  className?: string;
  itemsWrapperClassName?: string;
}) => {
  return (
    <div
      className={twMerge(
        "flex",
        className
      )}
    >
      <div className="flex flex-none py-0.5 gap-6 pr-6">
      {[...new Array(2)].fill(0).map((_, idx) => (
              <Fragment key={idx}>
                {toolboxItems.map((item) => (
          <div
            key={item.title}
            className={twMerge(
              "inline-flex items-center gap-4 py-2 px-3 outline outline-2 outline-white/10 rounded-lg",
              itemsWrapperClassName
            )}
          >
            {item.iconType ? (
              <TechIcon component={item.iconType} />
            ) : (
              <span className="text-2xl">{item.emoji}</span>
            )}
            <span>{item.title}</span>
          </div>
        ))}
              </Fragment>
            ))}
        
      </div>
    </div>
  );
};
