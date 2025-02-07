import React, { useState, useEffect } from "react";
import axios from "axios";

const Tome = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchVideoStatus = async () => {
      try {
        const response = await axios.get(
          "https://bharat-tech-backend.vercel.app/api/video-status"
        );
        setIsPlaying(response.data.isPlaying);
      } catch {
        setError("Failed to fetch video status.");
      }
    };

    fetchVideoStatus();
  }, []);

  const handleButtonClick = async () => {
    setLoading(true);
    try {
      const newStatus = !isPlaying;
      await axios.post(
        "https://bharat-tech-backend.vercel.app/api/update-video-status",
        {
          isPlaying: newStatus,
        }
      );

      setIsPlaying(newStatus);
      setError("");
    } catch {
      setError("Failed to update video status.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[100vh] p-10 text-center text-white">
      <div id="stars"></div>
      <h2 className="text-4xl font-bold mb-6">Inauguration</h2>
      <p className="text-lg mb-4">
        🔥 Tap below to kick off the National Hackathon! 🚀
      </p>

      {error && <p className="text-red-500 mb-4">{error}</p>}

      <button
        onClick={handleButtonClick}
        className={`relative w-full h-16 flex justify-center items-center uppercase tracking-wide text-[rgba(0,214,252,0.5)] border border-[rgba(0,214,252,0.3)] bg-transparent font-roboto transition-all duration-300 ease-in-out outline-none group hover:shadow-lg hover:text-[rgba(0,214,252,1)] hover:text-shadow-glow ${
          loading ? "animate-pulse cursor-wait" : ""
        }`}
        disabled={loading}
      >
        {loading ? (
          <div className="flex items-center space-x-2">
            <div className="w-5 h-5 border-4 border-t-transparent border-blue-500 rounded-full animate-spin"></div>
            <span>Processing...</span>
          </div>
        ) : isPlaying ? (
          "Stop Inauguration"
        ) : (
          "Start Inauguration"
        )}
        <span className="absolute top-0 left-[10%] w-14 h-[1px] bg-[rgba(0,214,252,1)] transition-all duration-300 ease-in-out group-hover:left-0 group-hover:w-5" />
        <span className="absolute bottom-0 right-[10%] w-14 h-[1px] bg-[rgba(0,214,252,1)] transition-all duration-300 ease-in-out group-hover:right-0 group-hover:w-5" />
        <span className="absolute bottom-[30%] right-0 w-[1px] h-5 bg-[rgba(0,214,252,1)] transition-all duration-300 ease-in-out group-hover:bottom-0" />
        <span className="absolute top-[30%] left-0 w-[1px] h-5 bg-[rgba(0,214,252,1)] transition-all duration-300 ease-in-out group-hover:top-0" />
      </button>
    </div>
  );
};

export default Tome;
