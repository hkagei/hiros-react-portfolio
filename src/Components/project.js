import React from "react";
import { Link } from "react-router-dom";

function Project() {
  <>
    <article id="work" class="work">
      <h2>Work</h2>
      <a href="https://hkagei.github.io/run-buddy/" target="_blank">
        <img
          class="runbuddy-image"
          src="./assets/images/run-buddy.PNG"
          alt="run buddy"
        />
      </a>
      <a
        href="https://hkagei.github.io/hiro-s-code-refractor-challenge/"
        target="_blank"
      >
        <img
          class="SEO-image"
          src="./assets/images/HoriSEOn screenshot.PNG"
          alt="SEO"
        />
      </a>
      <a href="https://jacee94.github.io/national-mapper" target="_blank">
        <img
          class="national-mapper-image"
          src="./assets/images/national-mapper.PNG"
          alt="national-mapper"
        />
      </a>
    </article>
  </>;
}

export default Project;