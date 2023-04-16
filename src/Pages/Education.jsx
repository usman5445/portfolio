import { React, useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";
import myPhoto from "../Assets/usmanpng.png";
import Typed from "typed.js";
export default function Education() {
  const typedRef = useRef();
  const containerRef = useRef();
  useEffect(() => {
    VanillaTilt.init(containerRef.current, {
      max: 2,
      glare: true,
      "max-glare": "0.5",
    });
    return () => {};
  }, []);
  return (
    <div
      ref={containerRef}
      className="  relative grid h-4/5 w-4/5 grid-cols-2 content-center rounded-2xl border-l-2 border-t-2 border-white/60  bg-white/20 px-8 shadow-2xl backdrop-blur-2xl "
    >
      <div className="absolute top-1 flex w-full items-center justify-between px-8">
        <p>Education_&_Certificates.md</p>
        <div
          className="flex space-x-2 
        "
        >
          <div className="h-4 w-4 rounded-full bg-white"></div>
          <div className="h-4 w-4 rounded-full bg-white"></div>
          <div className="h-4 w-4 rounded-full bg-white"></div>
        </div>
      </div>
      <div className=" col-span-2 grid grid-cols-2 divide-x-2 py-16   text-center  text-5xl leading-relaxed">
        <div className="">
          <h1>10th (SSC)</h1>
          <h1 className="font-bold">73.40%</h1>
          <h1>Maharashtra State Board</h1>
        </div>

        <div>
          <h1>12th (HSC)</h1>
          <h1 className="font-bold">68%</h1>
          <h1>Maharashtra State Board</h1>
        </div>
      </div>
      <div className="col-span-2 space-y-2 py-16 text-center">
        <h1 className="text-4xl font-bold">Frontend Development Bootcamp</h1>
        <h3 className="font-medium">By RELEVEL (UNACADEMY)</h3>
        <h4 className="font-extralight">DECEMBER 2021 - JUNE 2022 </h4>
        <button className="rounded-full border border-white px-2 py-1 text-2xl hover:bg-white hover:text-black">
          View Certificate
        </button>
      </div>
    </div>
  );
}
