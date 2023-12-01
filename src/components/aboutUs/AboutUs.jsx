import React, { useState } from "react";
import "./aboutUs.css";
import personal from "../../assets/personal.jpg";
import { FaAngleUp, FaAngleDown } from "react-icons/fa6";

export default function About({
  more,
  showMore,
  getShowMore,
  getIsClickedButton,
}) {
  return (
    <div id="aboutUs">
      <div id="main-aboutUs">
        <h1>About Me</h1>
        <p>
          <b>
            Highly motivated, ability to solve problems, ability to work in a
            team. Available for full time.
            <br />
            <br />
            Worked as Web Developer(front-end),
          </b>
          I success in self-learning new courses or to advance the coding
          project, responsibility gives me ability to manage time and jumping to
          any opportunity to improve myself, being helpfulness makes me go
          through teamwork easily and supportive.
        </p>
        <h3>Web Developer Experiences</h3>
        <ul>
          3 months: <b> Web & App Developer, Willing, Tel-Aviv. (Internship)</b>
          <li>
            Development and design of websites and applications using Front-End
          </li>
          <li> Needed for Self learning, and Willingness to learn</li>
        </ul>
        <ul>
          2 years:
          <b> Technical Support, Primo 099, Jerusalem. (full time)</b>
          <li> Technical Support</li>
          <li>
            Web Developer and designer (HTML, CSS, JavaScript) (Dreamweaver
            program & FileZilla) & Graphic Designer (Photoshop)
          </li>
          <li>
            First career I had to improve myself. Teamwork and Communication
            skills
          </li>
        </ul>
        <button
          id="btn"
          className={getIsClickedButton()}
          onClick={() => showMore(true)}
        >
          <FaAngleDown style={{ backgroundColor: "#8e7006" }} /> show more
        </button>
        <div id="more" className={getShowMore()}>
          <ul>
            Tools & Technologies
            <li>
              C, C++, C#, Java, Python, (JavaScript, HTML & CSS), Assembly.
            </li>
            <li>React, Redux & API</li>
            <li>
              Dreamweaver, Eclipse, netBeans, MySQL, FileZilla, VS.Code, Visual
              Basic & Microsoft Office
            </li>
          </ul>
          <ul>
            Soft Skills:
            <li>Mind-tech, Teamwork </li>
            <li>Responsibility, Helpfulness</li>
            <li>Goal Oriented, Self-Learn</li>
            <li>Time Management</li>
          </ul>
          <button
            id="btn"
            className={getShowMore()}
            onClick={() => showMore(false)}
          >
            <FaAngleUp style={{ backgroundColor: "#8e7006" }} /> show less
          </button>
        </div>
      </div>
      <div id="personal-img">
        <img src={personal} alt="" />
      </div>
    </div>
  );
}
