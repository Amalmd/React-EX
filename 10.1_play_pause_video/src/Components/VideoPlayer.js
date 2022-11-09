import React, { useRef } from "react";

const VideoPlayer = () => {
  const videoRef = useRef();

  const handlePlay = () => {
    videoRef.current.play();
  };
  const handlePause = () => {
    videoRef.current.pause();
  };

  return (
    <div className="App-header">
      <div className="btn">
        <button className="play-btn" onClick={handlePlay}>
          Play
        </button>
        <button className="pause-btn" onClick={handlePause}>
          Pause
        </button>
      </div>
      <video width="520" height="240" ref={videoRef}>
        <source src="./Videos/surfing.mp4" />
      </video>
    </div>
  );
};

export default VideoPlayer;
