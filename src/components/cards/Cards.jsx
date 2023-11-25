import React from "react";
import "./cards.css";

export default function Cards() {
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
  return (
    <div id="card">
        <h2>Some of My work</h2>
      <div id="main-card">
        {cardsList.map((card) => (
          <a id="item" href={card.netlify} target="_blanc">
            <b>{card.title}</b>
            <p>{card.description}</p>
            <a href={card.github}>for Code</a><br />
          </a>
        ))}
      </div>
    </div>
  );
}
