import React, { useState, useRef } from "react";
import Song from "./components/Song";
import Player from "./components/Player";
import "./styles/app.scss";
import data from "./util";
import Library from "./components/Library";
import Nav from "./components/Nav";

function App() {
  // Select All Songs
  const [songs, setSongs] = useState(data());
  // Select Current Songs
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);

  const audioRef = useRef(null);

  const [songTime, setSongTime] = useState({
    currentTime: 0,
    duration: 0,
  });

  const [libraryToggle, setLibraryToggle] = useState(false);

  function timeUpdateHandler(e) {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    setSongTime({ ...songTime, currentTime: current, duration });
  }
  return (
    <div className="App">
      <Nav libraryToggle={libraryToggle} setLibraryToggle={setLibraryToggle} />
      <Song currentSong={currentSong} />
      <Player
        currentSong={currentSong}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        audioRef={audioRef}
        songTime={songTime}
        setSongTime={setSongTime}
      />

      <Library
        songs={songs}
        setCurrentSong={setCurrentSong}
        audioRef={audioRef}
        isPlaying={isPlaying}
        setSongs={setSongs}
        libraryToggle={libraryToggle}
      />
      <audio
        onTimeUpdate={timeUpdateHandler}
        onLoadedMetadata={timeUpdateHandler}
        ref={audioRef}
        src={currentSong.audio}
      ></audio>
    </div>
  );
}

export default App;
