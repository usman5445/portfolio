import { useEffect, useRef, useState } from "react";
import "@splidejs/react-splide/css";
import "./index.css";
import Dock from "./Components/Dock";
import About from "./Pages/About";
import Experience from "./Pages/Experience";
import Education from "./Pages/Education";
import { Splide, SplideSlide } from "@splidejs/react-splide";
function App() {
  const [pagesCarousal, setPagesCarousal] = useState([
    Education,
    About,
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
  function handleSlideChange(Slide) {}
  useEffect(() => {
    blobsLogic();

    return () => {};
  }, []);
  return (
    <div className="app  relative  flex h-screen w-screen items-center justify-center font-Poppins">
      <Splide
        onMove={(Slide) => handleSlideChange(Slide)}
        className="mySwiper relative z-10 flex  h-full w-full items-center justify-center space-x-8 bg-transparent  "
      >
        {pagesCarousal.map((Page, index) => (
          <SplideSlide className=" flex items-center  justify-center bg-transparent   ">
            <Page />
          </SplideSlide>
        ))}
      </Splide>
      <Dock />
      <div className="bolobs">
        <div className="blob1"></div>
        <div className="blob2"></div>
        <div className="blob3"></div>
      </div>
    </div>
  );
}

export default App;
