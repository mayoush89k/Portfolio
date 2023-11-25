import React from "react";
import "./contactUs.css";

export default function ContactUs() {
  return (
    <div id="contactUs">
      <form action="contact" id="main-contactUs">
        <h1>Contact Me</h1>
        <Name/>
        <Email/>
        <Message/>
        <Submit/>
      </form>
    </div>
  );
}

function Name() {
  return <input type="text" name="name" placeholder="Enter your Name" />;
}
function Email() {
  return <input type="email" name="email" placeholder="Enter Your Email" />;
}
function Message() {
  return <textarea name="message" placeholder="Enter your message"></textarea>;
}
function Submit() {
  return <input type="submit" value="Send" id="submit" />;
}
