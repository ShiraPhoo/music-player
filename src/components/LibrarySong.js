import React from "react";

function LibrarySong({
  song,
  setCurrentSong,
  songs,
  id,
  audioRef,
  isPlaying,
  setSongs,
}) {
  function selectedSongHangler() {
    const selectedSong = songs.filter((song) => song.id === id);
    setCurrentSong(selectedSong[0]);
    const newSongs = songs.map((song) => {
      if (song.id === id) {
        return {
          ...song,
          active: true,
        };
      } else {
        return {
          ...song,
          active: false,
        };
      }
    });
    setSongs(newSongs);

    if (isPlaying) {
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise.then((audio) => {
          audioRef.current.play();
        });
      }
    }
  }
  return (
    <div
      onClick={selectedSongHangler}
      className={`library-song ${song.active ? "selected" : ""}`}
    >
      <img src={song.cover} alt={song.name} />
      <div className="song-description">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
}

export default LibrarySong;
