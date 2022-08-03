import React from "react";
// import { Link } from "react-router-dom";

function Project() {
  return (
  <>
    <article id="work" className="work">
      <h2>My Projects</h2>
      <a href="https://hkagei.github.io/run-buddy/" target="_blank" rel="noreferrer">
        <img
          className="runbuddy-image"
          src={"run-buddy.PNG"}
          alt="run buddy"
        />
      </a>
      <a href="https://hkagei.github.io/hiro-s-code-refractor-challenge/" target="_blank" rel="noreferrer">
        <img
          className="SEO-image"
          src={"HoriSEOn screenshot.PNG"}
          alt="SEO"
        />
      </a>
      <a href="https://jacee94.github.io/national-mapper" target="_blank" rel="noreferrer">
        <img
          className="national-mapper-image"
          src={"national-mapper.PNG"}
          alt="national-mapper"
        />
      </a>
      <a href="https://github.com/CalebLawver/Bit-Trail" target="_blank" rel="noreferrer">
        <img
          className="bit-trail-image"
          src={"bit-trail.PNG"}
          alt="bit-trail"
        />
      </a>
      <a href="https://hkagei.github.io/food-festival/" target="_blank" rel="noreferrer">
        <img
          className="food-festival"
          src={"food-festival.PNG"}
          alt="food-festival"
        />
      </a>
      <a href="https://github.com/hkagei/workday-scheduler" target="_blank" rel="noreferrer">
        <img
          className="workday-scheduler"
          src={"workday scheduler.PNG"}
          alt="national-mapper"
        />
      </a>
    </article>
  </>
  );
}

export default Project;