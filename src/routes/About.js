import React from "react";
import "./About.css";

function About(props) {
  console.log(props);
  return (
    <div className="about__container">
      <span>
        “this website is introduce about movies. hope you enjoy it.”
      </span>
      <div>
      <a href="https://github.com/daeukii">https://github.com/daeukii</a>
      </div>
    </div>
  );
}

export default About;