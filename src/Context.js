import React, { useState } from "react";
import { AiFillHome, AiFillHeart, AiFillAppstore } from "react-icons/ai";
import { IoDocument } from "react-icons/io5";
import { MdOutlineWork } from "react-icons/md";
import { RiMessage3Fill } from "react-icons/ri";
import ContextStore from "./contextStore";

export default function Context({ children }) {
  const [activeSlide, setActiveSlide] = useState(0);
  const [docItems, setDocItems] = useState([
    { isActive: true, icon: AiFillHome, lable: "About me" },
    { isActive: false, icon: IoDocument, lable: "Education" },
    { isActive: false, icon: MdOutlineWork, lable: "Experience" },
    { isActive: false, icon: AiFillAppstore, lable: "Projects" },
    { isActive: false, icon: AiFillHeart, lable: "Skills" },
    { isActive: false, icon: RiMessage3Fill, lable: "Contact" },
  ]);

  return (
    <ContextStore.Provider
      value={{ activeSlide, setActiveSlide, docItems, setDocItems }}
    >
      {children}
    </ContextStore.Provider>
  );
}
