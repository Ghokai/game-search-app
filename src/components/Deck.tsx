import React from "react";
import GameCard, { gameProps } from "./GameCard";

interface DeckProps {
  games: gameProps[];
}

const Deck = ({ games }: DeckProps) => {
  const gamelist = games.map((item: gameProps) => (
    <GameCard key={item.id} {...item} />
  ));
  return <div className="gameList">{gamelist}</div>;
};

export default Deck;
