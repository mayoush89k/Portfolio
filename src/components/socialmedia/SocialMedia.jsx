import React, { useState } from "react";
import "./socialMedia.css";
import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";

export default function SocialMedia() {
  const iconStyle = {
    color: "#f5c108",
    fontSize: "80px"
  }
  const socialMediaList = [
    {
      name: "phone",
      icon: <FaPhone style={iconStyle}/>,
      link: "+972 (0) 54 698 1800",
      id: "phone",
    },
    {
      name: "Email",
      icon: <FaEnvelope style={iconStyle}/>,
      link: "mayoush89k@gmail.com",
      id: "email",
    },
    {
      name: "Github",
      icon: <FaGithub style={iconStyle}/>,
      link: "www.github.com/mayoush89k",
      id: "github",
    },

    {
      name: "LinkedIn",
      icon: <FaLinkedin style={iconStyle}/>,
      link: "https://www.linkedin.com/in/may-karam-17190771/",
      id: "linkedIn",
    },
  ];
  return (
    <div id="socialMedia">
      {socialMediaList.map((item, index) => (
        <div id={item.id} key={index}>
          <a href={item.link} target="_blank">
            <h2>{item.name}</h2>
            <span id="icon">{item.icon}</span>
            <span id="link"></span>
          </a>
        </div>
      ))}
    </div>
  );
}
