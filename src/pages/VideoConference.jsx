import React, { useState } from "react";
import ParticlesBackground from "../ParticlesBackground";

const VideoConference = () => {
  const [isMicOn, setIsMicOn] = useState(true);
  const [isCamOn, setIsCamOn] = useState(true);

  return (
    
      <div className="w-full bg-gray-900/50 text-white rounded-2xl shadow-2xl p-8 border border-gray-800 m-6">
        <h2 className="text-4xl font-bold text-center text-orange-500 mb-6 drop-shadow-lg">
          Video Conference
        </h2>

        <div className="video-grid grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
          {[...Array(8)].map((_, index) => (
            <div
              key={index}
              className="w-full bg-gray-900/50 text-white rounded-2xl shadow-2xl p-8 border border-gray-800 m-6"
            >
              User {index + 1}
            </div>
          ))}
        </div>

        {/* Controls */}
        <div className="controls flex justify-center gap-6">
          <button
            className={`px-6 py-3 rounded-lg text-white font-semibold shadow-lg transition-transform transform hover:scale-105 ${isMicOn ? "bg-red-600" : "bg-green-500"}`}
            onClick={() => setIsMicOn(!isMicOn)}
          >
            {isMicOn ? "Mute Mic" : "Unmute Mic"}
          </button>

          <button
            className={`px-6 py-3 rounded-lg text-white font-semibold shadow-lg transition-transform transform hover:scale-105 ${isCamOn ? "bg-red-600" : "bg-green-500"}`}
            onClick={() => setIsCamOn(!isCamOn)}
          >
            {isCamOn ? "Turn Off Camera" : "Turn On Camera"}
          </button>

          <button className="px-6 py-3 bg-gray-700 text-white rounded-lg font-semibold shadow-lg transition-transform transform hover:scale-105 hover:bg-gray-800">
            Leave Call
          </button>
        </div>
      </div>
   
  );
};

export default VideoConference;
