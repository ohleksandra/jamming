import React, { useState, useCallback } from "react";


const SearchBar = ({onSearch}) => {
  const [term, setTerm] = useState("");

  const handleTermChange = useCallback((event) => {
    setTerm(event.target.value);
  }, []);

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault(); 
      onSearch(term); 
    },
    [onSearch, term]
  );

  return (
    <div className="container flex flex-ro p-6 backdrop-blur-sm gap-4">
      <form className="container flex flex-ro backdrop-blur-sm gap-4" onSubmit={handleSubmit}>
        <input
          type="text"
          id="searchInput"
          placeholder="What would you like to find?"
          className="min-w-72 min-h-12 rounded-full bg-slate-800 p-4" 
          onChange={handleTermChange}
          value={term}
        ></input>
        <button type="submit" className="text-slate-200"  onClick={handleSubmit}>
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
