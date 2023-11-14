import React, { useState, useEffect } from "react";
import gsap from "gsap";

const MachineGunText = ({ text }) => {
  const [visibleText, setVisibleText] = useState("");

  useEffect(() => {
    const tl = gsap.timeline({ onComplete: () => setVisibleText(text) });
    text.split("").forEach((char, index) => {
      tl.to("#char-" + index, {
        opacity: 1,
        duration: 0.05,
        delay: index * 0.01,

      });
    });
  }, [text]);

  return (
    <div className="machine-gun-text">
      {text.split("").map((char, index) => (
        <span
          key={index}
          id={"char-" + index}
          style={{ opacity: 0 }}
          className="machine-gun-char"
        >
          {char}
        </span>
      ))}

    </div>
  );
};

export default MachineGunText;