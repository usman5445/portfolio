import React, { useEffect } from "react";

function BgBlobs() {
  useEffect(() => {
    blobsLogic();
    return () => {};
  }, []);
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
  return (
    <div className="blobs">
      <div className="blob1"></div>
      <div className="blob2"></div>
      <div className="blob3"></div>
    </div>
  );
}

export default BgBlobs;
