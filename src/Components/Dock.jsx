import React, { useEffect, useRef, useState } from "react";
import { AiFillHome, AiFillHeart, AiFillAppstore } from "react-icons/ai";
import { IoDocument } from "react-icons/io5";
import { MdOutlineWork } from "react-icons/md";
import { RiMessage3Fill } from "react-icons/ri";
import VanillaTilt from "vanilla-tilt";

function Dock() {
  const dockRef = useRef();
  const [docItems, setDocItems] = useState([
    { isActive: true, icon: AiFillHome, lable: "About me" },
    { isActive: false, icon: IoDocument, lable: "Education" },
    { isActive: false, icon: MdOutlineWork, lable: "Experience" },
    { isActive: false, icon: AiFillAppstore, lable: "Projects" },
    { isActive: false, icon: AiFillHeart, lable: "Skills" },
    { isActive: false, icon: RiMessage3Fill, lable: "Contact" },
  ]);

  function handleDockClick(index) {
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
  }, []);

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
