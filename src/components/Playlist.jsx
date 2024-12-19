import React from "react";
import Track from "./Track";

const Playlist = ({ playlist }) => {
  return (
    <div className="bg-gray-800 h-[100%] p-9 rounded-lg flex-2 w-full">
      <div className="flex flex-row">
        <div className="flex-1">
          <h3 className="text-2xl text-slate-100">Playlist</h3>
          <div>
            {playlist.map((track) => (
              <Track track={track} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Playlist;
