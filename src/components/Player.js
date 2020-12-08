import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faAngleLeft,
  faAngleRight,
  faPause,
} from "@fortawesome/free-solid-svg-icons";

function Player({ isPlaying, setIsPlaying, audioRef, songTime, setSongTime }) {
  const getTimeFormat = (time) => {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
    // console.log(Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)));
  };

  function inputSliderDragHandler(e) {
    audioRef.current.currentTime = e.target.value;
    setSongTime({ ...songTime, currentTime: e.target.value });
  }

  function playButtonHandler() {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(!isPlaying);
    } else {
      audioRef.current.play();
      setIsPlaying(!isPlaying);
    }
  }
  return (
    <div className="player-container">
      <div className="time-control">
        <p>{getTimeFormat(songTime.currentTime)}</p>
        <input
          min={0}
          max={songTime.duration || 0}
          value={songTime.currentTime}
          onChange={inputSliderDragHandler}
          type="range"
        />
        <p>{songTime.duration ? getTimeFormat(songTime.duration) : "0:00"}</p>
      </div>

      <div className="play-control">
        <FontAwesomeIcon className="skip-back" size="2x" icon={faAngleLeft} />
        <FontAwesomeIcon
          onClick={playButtonHandler}
          className="play"
          size="2x"
          icon={isPlaying ? faPause : faPlay}
        />
        <FontAwesomeIcon
          className="skip-forward"
          size="2x"
          icon={faAngleRight}
        />
      </div>
    </div>
  );
}

export default Player;
