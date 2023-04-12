import React, { createContext, useState } from "react";
import { AiFillHome, AiFillHeart, AiFillAppstore } from "react-icons/ai";
import { IoDocument } from "react-icons/io5";
import { MdOutlineWork } from "react-icons/md";
import { RiMessage3Fill } from "react-icons/ri";





export const ContextStore = createContext({
  activeSlide:0,
  docItems:[
    { isActive: true, icon: AiFillHome, lable: "About me" },
    { isActive: false, icon: IoDocument, lable: "Education" },
    { isActive: false, icon: MdOutlineWork, lable: "Experience" },
    { isActive: false, icon: AiFillAppstore, lable: "Projects" },
    { isActive: false, icon: AiFillHeart, lable: "Skills" },
    { isActive: false, icon: RiMessage3Fill, lable: "Contact" },
  ],
});

export default function Context({ children }) {
  const [activeSlide, setActiveSlide] = useState();
  const [docItems, setDocItems] = useState();

  return (
    <ContextStore.Provider
      
    >
      {children}
    </ContextStore.Provider>
  );
}
