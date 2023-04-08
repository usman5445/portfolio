import { useEffect, useRef, useState } from "react";
import "@splidejs/react-splide/css";
import "./index.css";
import Dock from "./Components/Dock";
import About from "./Pages/About";
import Experience from "./Pages/Experience";
import Education from "./Pages/Education";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AiFillHome, AiFillHeart, AiFillAppstore } from "react-icons/ai";
import { IoDocument } from "react-icons/io5";
import { MdOutlineWork } from "react-icons/md";
import { RiMessage3Fill } from "react-icons/ri";
function App() {
  const [pagesCarousal, setPagesCarousal] = useState([
    About,
    Education,
    Experience,
  ]);
  const [activeSlide, setActiveSlide] = useState(0);
  const [docItems, setDocItems] = useState([
    { isActive: true, icon: AiFillHome, lable: "About me" },
    { isActive: false, icon: IoDocument, lable: "Education" },
    { isActive: false, icon: MdOutlineWork, lable: "Experience" },
    { isActive: false, icon: AiFillAppstore, lable: "Projects" },
    { isActive: false, icon: AiFillHeart, lable: "Skills" },
    { isActive: false, icon: RiMessage3Fill, lable: "Contact" },
  ]);
  function blbShapeGen() {
    let num = `${Math.ceil(Math.random() * 100)}% ${Math.ceil(
      Math.random() * 100
    )}% ${Math.ceil(Math.random() * 100)}% ${Math.ceil(Math.random() * 100)}% `;

    return `${num} / ${num}`;
  }
  function blobsLogic() {
    const bodyEl = document.querySelector(".app");
    let changeInterval;
    function intervalStart() {
      changeInterval = setInterval(() => {
        bodyEl.style.setProperty(
          "--size",
          `${Math.ceil(Math.random() * (40 - 10) + 10)}rem`
        );
        bodyEl.style.setProperty("--blbShape", `${blbShapeGen()}`);
        bodyEl.style.setProperty(
          "--xPos",
          `${Math.ceil(Math.random() * (bodyEl.clientHeight - 100) + 100)}px`
        );
        bodyEl.style.setProperty(
          "--yPos",
          `${Math.ceil(Math.random() * (bodyEl.clientWidth - 100) + 100)}px`
        );
      }, 1000);
    }

    changeInterval || intervalStart();
    // bodyEl.addEventListener("mouseenter", (e) => {
    //   changeInterval || intervalStart();
    // });
    // bodyEl.addEventListener("mousemove", (e) => {
    //   bodyEl.style.setProperty("--xPos", `${e.pageX}px`);
    //   bodyEl.style.setProperty("--yPos", `${e.pageY}px`);
    //   bodyEl.style.setProperty("--size", `20rem`);
    // });
    // bodyEl.addEventListener("mouseleave", (e) => {
    //   // clearInterval(changeInterval);
    //   // bodyEl.style.setProperty("--size", `0rem`);
    //   bodyEl.style.setProperty(
    //     "--xPos",
    //     `${Math.ceil(Math.random() * (bodyEl.clientHeight - 100) + 100)}px`
    //   );
    //   bodyEl.style.setProperty(
    //     "--yPos",
    //     `${Math.ceil(Math.random() * (bodyEl.clientWidth - 100) + 100)}px`
    //   );
    // });
  }
  function handleSlideChange(Slide) {
    console.log(Slide.index);
    setDocItems(
      docItems.map((el, i) =>
        i == Slide.index
          ? { ...el, isActive: true }
          : { ...el, isActive: false }
      )
    );
  }
  useEffect(() => {
    blobsLogic();

    return () => {};
  }, []);
  return (
    <div className="app  relative  flex h-screen w-screen items-center justify-center font-Poppins">
      <Splide
        options={{
          type: "loop",
          pagination: false,
          focus: activeSlide,
        }}
        onMove={(Slide) => handleSlideChange(Slide)}
        className="mySwiper relative z-10 flex  h-full w-full items-center justify-center space-x-8 bg-transparent  "
      >
        {pagesCarousal.map((Page, index) => (
          <SplideSlide className=" flex items-center  justify-center bg-transparent   ">
            <Page />
          </SplideSlide>
        ))}
      </Splide>
      <Dock
        docItems={docItems}
        setDocItems={setDocItems}
        activeSlide={activeSlide}
        setActiveSlide={setActiveSlide}
      />
      <div className="bolobs">
        <div className="blob1"></div>
        <div className="blob2"></div>
        <div className="blob3"></div>
      </div>
    </div>
  );
}

export default App;
