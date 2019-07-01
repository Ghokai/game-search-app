import React from "react";

export interface gameProps {
  id: string;
  title: string;
  description: string;
  image: string;
}
const imagesPath = "images/";

const GameCard = (props: gameProps) => {
  const { title, description, image } = props;
  return (
    <div className="game">
      <img className="game-pic" alt={title} src={imagesPath + image} />
      <div className="game-title">{title}</div>
      <div className="game-description">{description}</div>
    </div>
  );
};

export default GameCard;
