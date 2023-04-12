import { useContext, useEffect, useRef, useState } from "react";
import "@splidejs/react-splide/css";
import "./index.css";
import Dock from "./Components/Dock";
import About from "./Pages/About";
import Experience from "./Pages/Experience";
import Education from "./Pages/Education";
import { Splide, SplideSlide } from "@splidejs/react-splide";

import Context, { ContextStore } from "./Context";
function App() {
  const { activeSlide, docItems } = useContext(ContextStore);
  const [pagesCarousal, setPagesCarousal] = useState([
    About,
    Education,
    Experience,
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
  }
  function handleSlideChange(Slide) {
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
    <Context>
      <div className="app  relative  flex h-screen w-screen items-center justify-center font-Poppins">
        <Splide
          options={{
            type: "loop",
            pagination: false,
            focus: activeSlide,
            slideFocus: true,
          }}
          onMove={(Slide) => handleSlideChange(Slide)}
          className="mySwiper relative z-10 flex  h-full w-full items-center justify-center space-x-8   "
        >
          {pagesCarousal.map((Page, index) => (
            <SplideSlide
              key={`${Page.name}${index}`}
              className=" flex items-center  justify-center    "
            >
              <Page />
            </SplideSlide>
          ))}
        </Splide>
        <Dock />
        <div className="blobs">
          <div className="blob1"></div>
          <div className="blob2"></div>
          <div className="blob3"></div>
        </div>
      </div>
    </Context>
  );
}

export default App;
