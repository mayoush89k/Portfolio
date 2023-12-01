import React, { useRef, useState } from "react";
import "./contactUs.css";

export default function ContactUs({ formDetails, setFormDetails }) {
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef({
    name: formDetails.name,
    email: formDetails.email,
    message: formDetails.message,
  });

  function submitFormHandler(e) {
    e.preventDefault();
    setFormDetails(formRef.current);
    localStorage.setItem("contact", JSON.stringify(formRef.current));
    setSubmitted(true);
  }

  function inputHandler(e) {
    const { name, value } = e.target;
    formRef.current = { ...formRef.current, [name]: value };
  }

  return (
    <div id="contactUs">
      <form onSubmit={submitFormHandler} id="main-contactUs">
        <h1>Contact Me</h1>
        <Name inputHandler={inputHandler} formRef={formRef} />
        <Email inputHandler={inputHandler} formRef={formRef} />
        <Message inputHandler={inputHandler} formRef={formRef} />
        <Submit />
        {submitted && (
          <div>
            Thank you {formDetails.name} for contacting me <br />
            {setTimeout(() => {
              setSubmitted(false);
              setFormDetails({
                name: "",
                email: "",
                message: "",
              });
            }, 3000)}
          </div>
        )}
      </form>
    </div>
  );
}

function Name({ inputHandler, formRef }) {
  return (
    <input
      type="text"
      name="name"
      ref={formRef}
      placeholder="Enter your Name"
      value={formRef.name}
      onChange={inputHandler}
    />
  );
}
function Email({ inputHandler, formRef }) {
  return (
    <input
      type="email"
      name="email"
      ref={formRef}
      placeholder="Enter Your Email"
      value={formRef.email}
      onChange={inputHandler}
    />
  );
}
function Message({ inputHandler, formRef }) {
  return (
    <textarea
      name="message"
      placeholder="Enter your message"
      ref={formRef}
      value={formRef.message}
      onChange={inputHandler}
    ></textarea>
  );
}
function Submit() {
  return <input type="submit" value="Send" id="submit" />;
}
