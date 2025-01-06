import "./App.css";
import React, { useState,useCallback } from "react";
import SearchBar from "./components/SearchBar";
import Tracklist from "./components/Tracklist";
import Spotify from "./Spotify";

function App() {
  const [playlist, setPlaylist] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  const addTrackToPlaylist = (track) => {
    const newTrack = { ...track, added: true };
    if (!playlist.some((t) => t.id === track.id)) {
      setPlaylist((prev) => [...prev, newTrack]);
    }
  };


  const search = useCallback((term) => {
    Spotify.search(term).then((results) => {
      setSearchResults(results);
    });
  }, []);

  return (
    <div className="flex flex-col">
      <SearchBar onSearch ={search}/>

      <div className="flex flex-row gap-3 m-6">
        <div className="bg-gray-800 h-[100%] p-9 rounded-lg flex-2 w-full">
          <div className="flex flex-row gap-6 h-full">
            <div className="flex-1 w-full h-full">
              <h3 className="text-2xl text-slate-100">
                Top results {searchResults.length}
              </h3>
              <Tracklist tracks={searchResults} onAddToPlaylist={addTrackToPlaylist} />
            </div>
          </div>
        </div>
        <div className="bg-gray-800 h-[100%] p-9 rounded-lg flex-2 w-full">
          <div className="flex flex-row">
            <div className="flex-1 w-full">
              <Tracklist tracks={playlist} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
