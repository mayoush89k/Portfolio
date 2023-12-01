import React from "react";
import "./socialMedia.css";

export default function SocialMedia({socialMediaList}) {
  
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
