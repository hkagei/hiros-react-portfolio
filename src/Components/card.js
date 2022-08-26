import React from "react";
import "./card.css"
// import { BrowserRouter } from "react-router-dom";



function Card() {
    return (
        <footer className="responsive-blog-footer">
  <div className="row">
    <div className="medium-8 columns small-order-2 medium-order-1 about-container">
      <div className="row">
        <div className="about-me">
          <img src="./1658159099879.jpeg" alt="" />
          <article id="about-me">
          <h4> About Me</h4>
          <p>Full-stack web developer leveraging psychology background to build a more intuitive user experience on the web. Recently earned a certificate in full stack development from the University of Utah Coding Bootcamp, with newly developed skills in JavaScript, CSS, React.js, and responsive web design. As an innovative problem solver passionate about developing apps, I have a focus on mobile-first design and development. With each project, my aim is to best engage my audience for an impactful user experience. I applied aspects of UX and agile development in a recent project. I worked on a team of five to develop a multi-page MERN app that helps users search for movies, and bookmark their favorites. I’m excited to leverage my newly acquired skills as part of a fast-paced, quality-driven team to build better experiences on the web.</p>
          </article>
        </div>
        {/* <div className="medium-8 columns about-section">
          
        </div>
      </div> */}
      </div>
    </div>
    
  </div>
  {/* <div className="row tag-search">
    <div className="columns">
      <h4>My Work</h4>
      <ul className="menu simple tag-section">
        <li><a href="https://hkagei.github.io/run-buddy/" target="_blank" rel="noreferrer">Run Buddy (Basic HTML)</a></li>
        <li><a href="https://jacee94.github.io/national-mapper" target="_blank" rel="noreferrer">National Mapper (Front End Project)</a></li>
        <li><a href="" target="_blank">Pizza Hunt (Intro to MongoDB)</a></li>
        <li><a href="https://hkagei.github.io/food-festival/" target="_blank" rel="noreferrer">Food Festival (Progressive Web Application/PWA)</a></li>
      </ul>
    </div>
  </div> */}
  {/* <div className="row columns flex-container align-justify">
     <p> all rights reserved</p>
    <div className="up-arrow">
      <a href="#top"><i className="fa fa-chevron-circle-up" aria-hidden="true"></i></a>
    </div>
  </div> */}
</footer>
    )

}

export default Card;