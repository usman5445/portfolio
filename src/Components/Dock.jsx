import React, { useContext, useEffect, useRef, useState } from "react";

import VanillaTilt from "vanilla-tilt";
import ContextStore from "../contextStore";

function Dock() {
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
    setActiveSlide(docItems.findIndex((el) => el.isActive == true));
  }

  useEffect(() => {}, [activeSlide, docItems]);

  return (
    <div className="fixed bottom-2 z-20 flex h-10 w-fit items-end justify-center       ">
      {docItems.map((item, index) => {
        if (item.isActive == true)
          return (
            <div
              key={index + item.lable}
              className={` group flex  h-fit flex-col items-center  `}
            >
              <item.icon className="text-4xl font-bold " />
              <p
                className={`${
                  item.isActive || "hidden w-0 "
                }   select-none  font-bold  transition-all group-hover:block group-hover:w-fit`}
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
