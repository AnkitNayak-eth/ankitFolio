'use client'; 
import { useEffect, useRef } from 'react';
import { CardSpotlight } from "@/app/components/card-spotlight";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import createGlobe from 'cobe';

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
        glowColor: [1,1,1],
        offset: [0, 0],
        markers: [
          { location: [20.5937, 78.9629], size: 0.1 },
        ],
        
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

  return (
    <div className=" flex flex-col justify-center items-center container pb-16 lg:pb-24" style={{ transform: 'translateY(-100px)'}} >
      <canvas
        ref={canvasRef}
        style={{ width: '500px', height: '500px',transform: 'translateY(180px)' }}
        width="1000"
        height="1000"
      ></canvas>
      
      <CardSpotlight className="rounded-3xl bg-gray-900 hover:bg-black transition duration-700 ease-in-out z-20">
        <div className="py-8 px-10 text-center relative z-10">
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
              <button className="text-white bg-black inline-flex items-center px-6 h-12 rounded-xl gap-2 w-max border border-gray-900">
                <span className="font-semibold">Contact Me</span>
                <ArrowUpRightIcon className="size-4" />
              </button>
            </div>
          </div>
        </div>
      </CardSpotlight>
    </div>
  );
}
