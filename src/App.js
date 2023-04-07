import { useEffect, useRef, useState } from "react";

import "./App.css";
import Dock from "./Components/Dock";
import About from "./Pages/About";
import Experience from "./Pages/Experience";
import Education from "./Pages/Education";
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
  useEffect(() => {
    blobsLogic();

    return () => {};
  }, []);
  return (
    <div className="app  relative  flex h-screen w-screen items-center justify-center font-Poppins">
      <div className=" relative  flex h-full w-screen items-center justify-center space-x-8">
        <div className="flex items-center justify-center">
          {pagesCarousal.map((Page, index) => {
            return index == 0 ? <Page /> : null;
          })}
        </div>
        <div className="relative flex h-full w-4/5 items-center justify-center">
          {pagesCarousal.map((Page, index) => {
            return index == 1 ? <Page /> : null;
          })}
        </div>
        <div className="flex items-center justify-center">
          {pagesCarousal.map((Page, index) => {
            return index == 2 ? <Page /> : null;
          })}
        </div>
      </div>
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
