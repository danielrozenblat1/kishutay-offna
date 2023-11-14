import React, { useEffect } from "react";
import "./FadingText.css"
import gsap from "gsap";

const FadingText = ({ text }) => {
  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      ".fading-text",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: "power2.out"}
    );
  }, []);

  return (
    <div className="fading-text">
      {text.split("").map((word, index) => (
        <span key={index} className="fading-word">
          {word}
        </span>
      ))}
    </div>
  );
};

export default FadingText;