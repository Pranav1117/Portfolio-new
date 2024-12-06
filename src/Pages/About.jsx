import React from "react";
import { useState, useEffect } from "react";
const About = () => {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const options = {
      root: null, // Use the viewport as the root
      rootMargin: "0px", // No margin
      threshold: 0.5, // Trigger when 50% of the target is visible
    };

    const callback = (entries) => {
      entries.forEach((entry) => {
        setIsIntersecting(entry.isIntersecting);
      });
    };

    const observer = new IntersectionObserver(callback, options);

    // You can directly pass the callback function to observe a target
    observer.observe(document.getElementById("about"));

    return () => {
      observer.disconnect(); // Disconnect the observer when the component unmounts
    };
  }, []);

  return (
    <div className="about" id="about">
      <div className="about-me-header">
        <p className={`hello ${isIntersecting ? "s" : ""}`}>
          Hello! I'm Pranav.
        </p>
        <p className={`me ${isIntersecting ? "s" : ""}`}>
          <span className={`ti ${isIntersecting ? "s" : ""}`}>I</span>
          <span className={`ti ${isIntersecting ? "s" : ""}`}>m </span>
          <span className={`ti ${isIntersecting ? "s" : ""}`}>a </span>
          <span>web </span>
          <span className={`ti ${isIntersecting ? "s" : ""}`}>d</span>
          <span className={`ti ${isIntersecting ? "s" : ""}`}>e</span>
          <span className={`ti ${isIntersecting ? "s" : ""}`}>v</span>
          <span className={`ti ${isIntersecting ? "s" : ""}`}>e</span>
          <span className={`ti ${isIntersecting ? "s" : ""}`}>l</span>
          <span className={`ti ${isIntersecting ? "s" : ""}`}>o</span>
          <span className={`ti ${isIntersecting ? "s" : ""}`}>p</span>
          <span className={`ti ${isIntersecting ? "s" : ""}`}>e</span>
          <span className={`ti ${isIntersecting ? "s" : ""}`}>r </span>
        </p>
        <hr className={`line ${isIntersecting ? "s" : ""}`} />
      </div>

      <div className={`about-content ${isIntersecting ? "s" : ""}`}>
        <p className={`info ${isIntersecting ? "s" : ""}`}>
          After my graduation (BSc aviation) I enrolled in full stack
          development course. During that course I learn about React,
          Javascript, Node, ExpressJs, HTML, CSS, Mongoose, MongoDB. During the
          course I completed couple of projects you can check that out in
          project's section. I can create visually apealing, responsive,
          user-friendly websites. when I'm not coding I play games, I try to
          learn new tricks in web development.
        </p>
      </div>
    </div>
  );
};

export default About;
