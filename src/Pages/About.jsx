import { React, useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";
import myPhoto from "../Assets/usmanpng.png";
import Typed from "typed.js";
export default function About() {
  const typedRef = useRef();
  const containerRef = useRef();
  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ["Frontend Developer", "Backend Developer", "UI Designer"],
      typeSpeed: 50,
      backSpeed: 50,
      smartBackspace: 100,
      loop: true,
    });
    VanillaTilt.init(containerRef.current, {
      max: 2,
      glare: true,
      "max-glare": "0.5",
    });
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <div
      ref={containerRef}
      className=" relative grid h-4/5  w-4/5 grid-cols-2 content-center items-center rounded-2xl border-l-2 border-t-2 border-white/60  bg-white/20 px-8 shadow-2xl backdrop-blur-2xl "
    >
      <div className="absolute top-1 flex w-full items-center justify-between px-8">
        <p>About_me.md</p>
        <div
          className="flex space-x-2 
        "
        >
          <div className="h-4 w-4 rounded-full bg-white"></div>
          <div className="h-4 w-4 rounded-full bg-white"></div>
          <div className="h-4 w-4 rounded-full bg-white"></div>
        </div>
      </div>
      <img src={myPhoto} alt="Usman Photo" className="h-5/6 " />
      <div>
        <h2 className="text-8xl">Hi There!</h2>
        <h1 className="text-8xl">
          I am <span className="font-bold">Usman.</span>
        </h1>
        <h1 className="text-8xl">
          a <span className="font-bold text-yellow-300" ref={typedRef}></span>.
        </h1>
        <h1 className="absolute bottom-4 right-4 text-6xl font-semibold text-white/10">
          #TechGeek.
        </h1>
      </div>
    </div>
  );
}
