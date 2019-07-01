import React, { useReducer, useEffect } from "react";
import { gameProps } from "./GameCard";

const gamesResource = "games.json";

interface GamesContextState {
  searchTerm: string;
  games: gameProps[];
  dispatch: React.Dispatch<any>;
}

const getInitialState = () => ({
  searchTerm: "",
  games: []
});
const initalReducerState = getInitialState();

export const SET_SEARCH_TERM_ACTION = "setSearchTerm";
export const SET_GAMES_ACTION = "setGames";

export const GamesSearchContext = React.createContext({} as GamesContextState);

const gameReducer = function(state = initalReducerState, action: any) {
  switch (action.type) {
    case SET_SEARCH_TERM_ACTION:
      return { ...state, searchTerm: action.payload };
    case SET_GAMES_ACTION:
      return { ...state, games: action.payload };
    default:
      return state;
  }
};

interface GameSearchStoreProps {
  children?: React.ReactNode;
}

export default function GameStore(props: GameSearchStoreProps) {
  const [{ searchTerm, games }, dispatch] = useReducer(
    gameReducer,
    initalReducerState
  );

  useEffect(() => {
    fetch(gamesResource)
      .then(res => res.json())
      .then(data => {
        const filteredGames = data.filter(
          (item: gameProps) =>
            searchTerm === "" ||
            item.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        dispatch({
          type: SET_GAMES_ACTION,
          payload: filteredGames
        });
      });
  }, [searchTerm]);

  return (
    <GamesSearchContext.Provider value={{ searchTerm, games, dispatch }}>
      {props.children}
    </GamesSearchContext.Provider>
  );
}
