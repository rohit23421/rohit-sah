import React from "react";
import "./about.css";
import avatar from "../../img/AvatarMaker.png";

const About = () => {
  return (
    <div className="a" id="about">
      <div className="a-bg"></div>
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img src={avatar} alt="" className="a-img" />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          “It is important to doubt and that the doubt is not a fearful thing,
          but a thing of great value.”
          <p className="a-sub-author">Richard P. Feynman</p>
        </p>
        <p className="a-desc">
          Hello there, I am a 3rd year Engineering student, Backend developer
          and DevOps and Cloud Enthusiast and learning, building and improving
          myself one step at a time A passionate Backend developer, Cloud and
          DevOps enthusiast and working on DevOps tools and CI/CD pipelines also
          have some knowledge on AWS. Have a knack for working in different
          fields and still learning more
        </p>
        <div className="a-award">
          <a href="https://rohit23421.github.io/resume">
            <button>Resume</button>
          </a>
          <div className="a-award-tag">
            <a
              href="https://www.instagram.com/rohit23421/"
              className="a-awardtags"
            >
              <i class="fab fa-instagram fa-2x"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/rohit-sah-74989a19a"
              className="a-awardtags"
            >
              <i class="fab fa-linkedin fa-2x"></i>
            </a>
            <a href="https://github.com/rohit23421" className="a-awardtags">
              <i class="fab fa-github fa-2x"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
