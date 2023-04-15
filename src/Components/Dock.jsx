import React, { useContext, useEffect, useRef, useState } from "react";

import VanillaTilt from "vanilla-tilt";
import ContextStore from "../contextStore";

function Dock() {
  const dockRef = useRef();
  const { activeSlide, setActiveSlide, docItems, setDocItems } =
    useContext(ContextStore);
  async function handleDockClick(index) {
    setDocItems(
      docItems.map((item, i) => {
        return index == i
          ? { ...item, isActive: true }
          : { ...item, isActive: false };
      })
    );
  }

  useEffect(() => {
    VanillaTilt.init(dockRef.current);
  }, [activeSlide, docItems]);

  return (
    <div
      ref={dockRef}
      className="fixed bottom-8 z-20 flex h-10 w-fit items-end justify-around  space-x-6 rounded-[60px_60px_20px_20px]  border border-white/70  bg-white/30 px-4  backdrop-blur-2xl  "
    >
      {docItems.map((item, index) => {
        return (
          <div
            onClick={() => handleDockClick(index)}
            key={index + item.lable}
            className={`${
              item.isActive
                ? "hidden text-yellow-400 md:flex"
                : "hidden text-gray-300 md:flex"
            } group  flex h-fit flex-col items-center   hover:text-yellow-400`}
          >
            <item.icon className="text-6xl font-bold " />
            <p
              className={`${
                item.isActive || "hidden w-0 "
              }   select-none text-2xl  font-bold  transition-all group-hover:block group-hover:w-fit group-hover:text-yellow-400`}
            >
              {item.lable}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default Dock;
