import "./App.css";
import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import Tracklist from "./components/Tracklist";
import tracks from "./Tracks";

function App() {
  const [playlist, setPlaylist] = useState([]);

  const addTrackToPlaylist = (track) => {
    const newTrack = { ...track, added: true };
    if (!playlist.some((t) => t.id === track.id)) {
      setPlaylist((prev) => [...prev, newTrack]);
    }
  };

  return (
    <div className="flex flex-col">
      <SearchBar />

      <div className="flex flex-row gap-3 m-6">
        <div className="bg-gray-800 h-[100%] p-9 rounded-lg flex-2 w-full">
          <div className="flex flex-row gap-6 h-full">
            <div className="flex-1 w-full h-full">
              <h3 className="text-2xl text-slate-100">
                More results {tracks.length}
              </h3>
              <Tracklist tracks={tracks} onAddToPlaylist={addTrackToPlaylist} />
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
