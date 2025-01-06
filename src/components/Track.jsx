import React from "react";

const Track = ({ track, onAddToPlaylist }) => {
  console.log(track.albumCover)
  return (
    <div className="w-full h-full flex flex-row items-center p-2 gap-2 hover:bg-gray-700 rounded-xl">
      <img
        alt={track.album}
        src={track.albumCover}
        className="rounded-xl w-16 h-16"
      ></img>
      <div className="flex flex-col flex-4 w-full">
        <h4 className="text-lg text-gray-50 ">{track.title}</h4>
        <h6 className="text-sm text-gray-400 ">
          {track.artist} | {track.album}
        </h6>
      </div>
      <p className=" text-sm text-gray-400">{track.duration}</p>
      {!track.added && (
        <button
          onClick={() => onAddToPlaylist(track)}
          className="rounded-full text-gray-50 text-2xl p-4"
        >
          +
        </button>
      )}
    </div>
  );
};

export default Track;
