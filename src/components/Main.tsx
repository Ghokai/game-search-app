import React, { useContext } from "react";
import Deck from "./Deck";
import { GamesSearchContext, SET_SEARCH_TERM_ACTION } from "./GameStore";
import SearchPanel from "./SearchPanel";

const Main: React.FC = () => {
  const { games, searchTerm, dispatch } = useContext(GamesSearchContext);

  const searchEventHandler = (searchTerm: string) => {
    dispatch({ type: SET_SEARCH_TERM_ACTION, payload: searchTerm });
  };

  return (
    <div className="container">
      <SearchPanel searchTerm={searchTerm} onSearchEvent={searchEventHandler} />
      <Deck games={games} />
    </div>
  );
};

export default Main;
