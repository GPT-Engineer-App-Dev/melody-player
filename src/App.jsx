import React, { useState } from "react";
import { FaPlay, FaPause, FaStepForward, FaStepBackward } from "react-icons/fa";

function App() {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleNext = () => {
    // Logic to go to the next song
  };

  const handlePrevious = () => {
    // Logic to go to the previous song
  };

  return (
    <div className="container mx-auto p-8">
      <div className="bg-base-100 shadow-xl card compact side bg-base-200">
        <div className="flex-row items-center space-x-4 card-body">
          <div className="flex-1">
            <h2 className="card-title">Song Title</h2>
            <p className="text-base-content text-opacity-40">Artist Name</p>
          </div>
          <div className="flex-none">
            <button className="btn btn-square btn-ghost" onClick={handlePrevious}>
              <FaStepBackward size={20} />
            </button>
            <button className="btn btn-square btn-ghost" onClick={handlePlayPause}>
              {isPlaying ? <FaPause size={20} /> : <FaPlay size={20} />}
            </button>
            <button className="btn btn-square btn-ghost" onClick={handleNext}>
              <FaStepForward size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
