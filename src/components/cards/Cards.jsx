import React from "react";
import "./cards.css";

export default function Cards({cardsList}) {
  
  return (
    <div id="card">
        <h2>Some of My work</h2>
      <div id="main-card">
        {cardsList.map((card,index) => (
          <a key={index} id="item" href={card.netlify} target="_blanc">
         

            <b>{card.title}</b>
            <p>{card.description}</p>
            <p className="forCode" onClick={()=>window.open(card.github, "_blank") } >for Code</p><br />
          
          </a>
        ))}
      </div>
    </div>
  );
}
