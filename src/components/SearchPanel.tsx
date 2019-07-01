import React from "react";

interface SearchPanelProps {
  searchTerm: string;
  onSearchEvent: (Searchterm: string) => void;
}

const SearchPanel = ({ onSearchEvent, searchTerm }: SearchPanelProps) => {
  const onSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onSearchEvent(event.target.value);
  };

  return (
    <div className="search">
      <input
        className="searchInput"
        value={searchTerm}
        onChange={onSearchInputChange}
        type="text"
        placeholder="Search"
      />
    </div>
  );
};

export default SearchPanel;
