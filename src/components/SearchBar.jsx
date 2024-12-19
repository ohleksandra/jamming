import React from "react";

const SearchBar = () => {
  return (
    <div className="container flex flex-ro p-6 backdrop-blur-sm gap-4">
      <form className="container flex flex-ro backdrop-blur-sm gap-4">
        <input
          type="text"
          id="searchInput"
          placeholder="What would you like to find?"
          className="min-w-72 min-h-12 rounded-full bg-slate-800 p-4"
        ></input>
        <button type="submit" className="text-slate-200">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
