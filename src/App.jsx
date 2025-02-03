import Header from "./components/header/Header";
import ContactUs from "./components/contactUs/ContactUs";
import AboutUs from "./components/aboutUs/AboutUs";
import SocialMedia from "./components/socialMedia/SocialMedia";
import Cards from "./components/cards/Cards";
import HeroSection from "./components/heroSection/HeroSection";
import Footer from "./components/footer/Footer";
import "./App.css";
import { useState } from "react";
import logo from "./assets/hero.png";
import {
  FaGithub,
  FaLinkedin,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";

function App() {
  // Cards Props
  const cardsList = [
    {
      title: "MineCraft Game",
      description:
        "This game is building and create your own town, by moving objects, by some tools. each tool must remove specific objects",
      github: "https://github.com/mayoush89k/mineCraft",
      netlify: "https://mine-craft-23.netlify.app/",
    },
    {
      title: "Flight Ticket",
      description:
        "This is a website of booking a flight ticket. \nAt the first there will be a login page, with checkbox if the user is regular or an admin.\nIf the user is admin he can add more flights to the list, but the user only has the opportunity to look at the flights, sort them by price and search at them, also each flight has a button to add to cart, \nso the regular user can start booking by the first choose the suitable flight, and add it to his own cart.\nThen at the cart page he can book it with also opportunity adding number of travelers, and the system calculate the price and send him the confirmation alert",
      github: "https://github.com/mayoush89k/FlightTicket",
      netlify: "https://booking-flight-ticket.netlify.app/",
    },
    {
      title: "Snake Game",
      description:
        "This is a game that snake is moving toward food (the food built by random position) but the snake move by users arrow keys, the game finished when the snake hit itself or hit the border of the game",
      github: "https://github.com/mayoush89k/snakeGame",
      netlify: "https://snake-game-mk-js.netlify.app/",
    },
    {
      title: "Online Market",
      description:
        "This is a group project, using fetch api(get , pul , delete and post). we create an api file by mock website, that helps us to create an online store, with options of user or admin client. user can add product to cart, but admin can edit/delete product. there is a history of bought products for each user.",
      github: "https://github.com/zaid-kh/online-market",
      netlify: "https://online-market-appleseeds.netlify.app",
    },
  ];

  // form Props
  const [formDetails, setFormDetails] = useState({
    name: "",
    email: "",
    message: "",
  });

  // about us Props
  const [more, showMore] = useState(false);
  function getIsClickedButton() {
    return !more ? "more" : "hidden";
  }
  function getShowMore() {
    return more ? "more" : "hidden";
  }

  // headers Props
  const nav = [
    { name: "Hero Section", href: "#heroSection" },
    { name: "About", href: "#aboutUs" },
    { name: "Cards", href: "#card" },
    { name: "Social Media", href: "#socialMedia" },
    { name: "Contact", href: "#contactUs" },
  ];

  // social media Props
  const iconStyle = {
    color: "#f5c108",
    fontSize: "80px",
  };
  const socialMediaList = [
    {
      name: "phone",
      icon: <FaPhone style={iconStyle} />,
      link: "+972 (0) 54 698 1800",
      id: "phone",
    },
    {
      name: "Email",
      icon: <FaEnvelope style={iconStyle} />,
      link: "mayoush89k@gmail.com",
      id: "email",
    },
    {
      name: "Github",
      icon: <FaGithub style={iconStyle} />,
      link: "www.github.com/mayoush89k",
      id: "github",
    },

    {
      name: "LinkedIn",
      icon: <FaLinkedin style={iconStyle} />,
      link: "https://www.linkedin.com/in/may-karam-17190771/",
      id: "linkedIn",
    },
  ];

  return (
    <>
      <Header nav={nav} />
      <HeroSection firstName="May" lastName="Karam" logo={logo} />
      <AboutUs
        more={more}
        showMore={showMore}
        getShowMore={getShowMore}
        getIsClickedButton={getIsClickedButton}
      />
      <Cards cardsList={cardsList} />
      <p className="clickHere">For more projects, <a href="https://may-karam.netlify.app/" target="_blank">Click Here</a></p>
      <SocialMedia socialMediaList={socialMediaList} />
      <ContactUs formDetails={formDetails} setFormDetails={setFormDetails} />
      <Footer />
    </>
  );
}

export default App;
