"use client";
import { useEffect, useRef, useState } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import createGlobe from "cobe";
import { BackgroundGradient } from "@/components/background-gradient";

export function CallToAction() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    let phi = 0;
    const canvas = canvasRef.current;

    if (canvas) {
      const globe = createGlobe(canvas, {
        devicePixelRatio: 2,
        width: 1000,
        height: 1000,
        phi: 0,
        theta: 0,
        dark: 1,
        diffuse: 1.2,
        scale: 1,
        mapSamples: 16000,
        mapBrightness: 6,
        baseColor: [0.3, 0.3, 0.3],
        markerColor: [0, 1.0, 0],
        glowColor: [1, 1, 1],
        offset: [0, 0],
        markers: [{ location: [20.5937, 78.9629], size: 0.1 }],

        onRender: (state) => {
          state.phi = phi;
          phi += 0.01;
        },
      });

      return () => {
        globe.destroy();
      };
    }
  }, []);

  const [buttonText, setButtonText] = useState("Let's Connect");

  const handleCopy = () => {
    navigator.clipboard.writeText("ankitkumarnayak1234@gmail.com").then(() => {
      setButtonText("Email Copied!");
      setTimeout(() => {
        setButtonText("Let's Connect");
      }, 1000);
    });
  };

  return (
    <div
      className=" flex flex-col justify-center items-center container pb-16 lg:pb-24 overflow-x-hidden"
      style={{ transform: "translateY(-100px)" }}
      id="contact"
    >
      <canvas
        ref={canvasRef}
        style={{
          maxWidth: "500px",
          maxHeight: "500px",
          transform: "translateY(180px)",
        }}
        width="1000"
        height="1000"
      ></canvas>

      <BackgroundGradient>
        <div className="rounded-3xl bg-gray-900 hover:bg-black transition duration-700 ease-in-out relative z-50">
          <div className="py-8 px-10 text-center relative">
            <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center md:text-left">
              <div>
                <h2 className="font-serif text-2xl md:text-3xl">
                  Let's Create something amazing together.
                </h2>
                <p className="text-sm mt-2 md:text-base">
                  Ready to bring your next project to life? Let's connect and
                  discuss how I can help you achieve your goals.
                </p>
              </div>
              <div>
                <button
                  onClick={handleCopy}
                  className="relative inline-flex h-12 overflow-hidden rounded-full p-[3px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
                >
                  <span
                    className="absolute inset-[-1000%] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"
                    style={{
                      animation: "spin 4s linear infinite",
                    }}
                  />

                  <span className="gap-4 inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-black px-6 py-3 text-base font-medium text-white backdrop-blur-md">
                    <span className="font-bold text-nowrap">{buttonText}</span>
                    <FaExternalLinkAlt />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </BackgroundGradient>
    </div>
  );
}
