import { PropsWithChildren } from "react";

export const HeroOrbit = ({
  children,
  size,
  rotation,
  orbitDuration,
}: PropsWithChildren<{ size: number; rotation: number; orbitDuration?: string;}>) => {
  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -z-20">

      <div className="animate-spin" style={{ animationDuration: orbitDuration }}>
        <div
          style={{
            height: `${size}px`,
            width: `${size}px`,
            transform: `rotate(${rotation}deg)`,
          }}
        >

          <div className="inline-flex animate-spin" style={{ animationDuration: "10s" }}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

