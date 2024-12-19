import React from "react";
import Track from "./Track";

const SearchResults = ({ tracks, onAddToPlaylist }) => {
  return (
    <div>
      {tracks.map((track) => (
        <Track track={track} key={track.id} onAddToPlaylist={onAddToPlaylist} />
      ))}
    </div>
  );
};

export default SearchResults;
