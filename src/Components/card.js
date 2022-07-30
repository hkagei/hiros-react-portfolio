import React from "react";
import "./card.css"
// import { BrowserRouter } from "react-router-dom";



function Card() {
    return (
        <footer className="responsive-blog-footer">
  <div className="row">
    <div className="medium-8 columns small-order-2 medium-order-1 about-container">
      <div className="row">
        <div className="hide-for-small-only medium-4 columns about-section">
          <img src="https://placehold.it/250x250"/>
        </div>
        <div className="medium-8 columns about-section">
          <article id="about-me">
          <h4> About Me</h4>
          <p>paragraph about how amazing and awesome i am paragraph about how amazing and awesome i am paragraph about how amazing and awesome i am</p>
          </article>
        </div>
      </div>
    </div>
    <div className="small-12 medium-4 columns small-order-1 medium-order-2 mailing-container">
      <h4 className="mailing-list">Join my mailing list</h4>
      <input type="text" placeholder="Email Address"/>
      <a className="button expanded subscribe-button" href="#">Subscribe Now</a>
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