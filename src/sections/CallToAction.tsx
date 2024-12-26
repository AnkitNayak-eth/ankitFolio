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
                className="text-white bg-black inline-flex items-center px-6 h-12 rounded-xl gap-2 w-max border border-gray-900"
              >
                <span className="font-semibold">{buttonText}</span>
                <FaExternalLinkAlt />
              </button>
            </div>
          </div>
        </div>
      </div>
      </BackgroundGradient>
    </div>
  );
}
