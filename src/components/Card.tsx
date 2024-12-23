import { ComponentPropsWithoutRef } from "react";
import { twMerge } from "tailwind-merge"

export const Card = ({className,children,...other}: ComponentPropsWithoutRef<"div">) => {
  return (
    <div className={twMerge("bg-gray-900 hover:bg-black transition duration-700 ease-in-out rounded-3xl relative overflow-hidden after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline-offset-2 after:rounded-3xl after:outline-white/20 after:pointer-events-none",className)}{...other}>
        {children}
    </div>
  );
};
