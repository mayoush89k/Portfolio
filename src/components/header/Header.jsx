import React from "react";
import "./header.css";
import logo from "../../assets/logo.png";

export default function Header() {
  const nav = [
    {name: "Hero Section" , href: '#heroSection'},
    { name: "About", href: "#aboutUs" },
    { name: "Cards", href: "#card" },
    { name: "Social Media", href: "#socialMedia" },
    { name: "Contact", href: "#contactUs" },
  ];

  return (
    <div id="header">
      <div>
        <img src={logo} alt="logo" id="logo" />
      </div>
      <div id="menu">
        {nav.map((link, index) => (
          <ul key={index} >
            <li>
              <a href={link.href} id="l">{link.name}</a>
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
}