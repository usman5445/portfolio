import React, { useContext, useEffect, useState } from "react";
import About from "../Pages/About";
import Education from "../Pages/Education";
import Experience from "../Pages/Experience";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import ContextStore from "../contextStore";
import Projects from "../Pages/Projects";
import Skills from "../Pages/Skills";
import Contact from "../Pages/Contact";

function PagesCarousel() {
  const [pagesCarousal, setPagesCarousal] = useState([
    About,
    Education,
    Experience,
    Projects,
    Skills,
    Contact,
  ]);
  const { activeSlide, setActiveSlide, docItems, setDocItems } =
    useContext(ContextStore);

  useEffect(() => {
    return () => {};
  }, []);

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
  return (
    <Splide
      options={{
        type: "loop",
        slideFocus: true,
      }}
      onMove={(Slide) => handleSlideChange(Slide)}
      className="mySwiper relative z-10 flex  h-full w-full items-center justify-center space-x-8   "
    >
      {pagesCarousal.map((Page, index) => (
        <SplideSlide
          key={`${Page.name}${index}`}
          className=" flex items-center  justify-center "
        >
          <Page />
        </SplideSlide>
      ))}
    </Splide>
  );
}

export default PagesCarousel;
