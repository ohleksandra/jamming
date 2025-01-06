import React from "react";
import Track from "./Track";

const TrackList = ({ tracks, onAddToPlaylist }) => {
  return (
    <div>
      {tracks.map((track) => (
        <Track track={track} key={track.id} onAddToPlaylist={onAddToPlaylist} />
      ))}
    </div>
  );
};

export default TrackList;
