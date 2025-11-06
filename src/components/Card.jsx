import React from "react";
import "../styles/card.css";

const Card = ({ title, description, img }) => {
  return (
    <div className="card">
      <img src={img} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <button className="card-btn">Learn More</button>
    </div>
  );
};

export default Card;
