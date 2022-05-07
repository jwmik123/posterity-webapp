import React, { useRef, useEffect } from "react";

const Canvas = (props) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const html = document.documentElement;
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    const frameCount = 160;
    const currentFrame = (index) =>
      `https://posterity.mypinata.cloud/ipfs/QmSkQM4P54rsCc21HNJvsMcSzXrnmk4ifVLJV3owjRPNsK/frame_${index
        .toString()
        .padStart(4, "0")}.png`;

    const preloadImages = () => {
      for (let i = 1; i < frameCount; i++) {
        const img = new Image();
        img.src = currentFrame(i);
      }
    };

    const img = new Image();
    img.src = currentFrame(1);
    canvas.width = 1920;
    canvas.height = 1080;
    canvas.fillStyle = "#0000ff";
    img.onload = function () {
      context.drawImage(img, 0, 0);
    };

    const updateImage = (index) => {
      img.src = currentFrame(index);
      context.drawImage(img, 0, 0);
    };
    window.addEventListener("scroll", () => {
      const scrollTop = html.scrollTop;
      const maxScrollTop = html.scrollHeight - window.innerHeight;
      const scrollFraction = scrollTop / maxScrollTop;
      const frameIndex = Math.min(
        frameCount - 1,
        Math.ceil(scrollFraction * frameCount)
      );

      requestAnimationFrame(() => updateImage(frameIndex + 1));
    });
    preloadImages();
  }, []);

  return <canvas ref={canvasRef} {...props} />;
};

export default Canvas;
