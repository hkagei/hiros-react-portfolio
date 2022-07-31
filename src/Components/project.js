import React from "react";
// import { Link } from "react-router-dom";

function Project() {
  return (
  <>
    <article id="work" className="work">
      <h2>Work</h2>
      <a href="https://hkagei.github.io/run-buddy/" target="_blank" rel="noreferrer">
        <img
          className="runbuddy-image"
          src="./assets/images/run-buddy.PNG"
          alt="run buddy"
        />
      </a>
      <a href="https://hkagei.github.io/hiro-s-code-refractor-challenge/" target="_blank" rel="noreferrer">
        <img
          className="SEO-image"
          src="./assets/images/HoriSEOn screenshot.PNG"
          alt="SEO"
        />
      </a>
      <a href="https://jacee94.github.io/national-mapper" target="_blank" rel="noreferrer">
        <img
          className="national-mapper-image"
          src="./assets/images/national-mapper.PNG"
          alt="national-mapper"
        />
      </a>
      <a href="https://github.com/CalebLawver/Bit-Trail" target="_blank" rel="noreferrer">
        <img
          className="bit-trail-image"
          src="./assets/images/national-mapper.PNG"
          alt="bit-trail"
        />
      </a>
      <a href="https://hkagei.github.io/food-festival/" target="_blank" rel="noreferrer">
        <img
          className="food-festival"
          src="./assets/images/national-mapper.PNG"
          alt="food-festival"
        />
      </a>
      <a href="https://jacee94.github.io/national-mapper" target="_blank" rel="noreferrer">
        <img
          className="national-mapper-image"
          src="./assets/images/national-mapper.PNG"
          alt="national-mapper"
        />
      </a>
    </article>
  </>
  );
}

export default Project;