import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { debounce } from "lodash";

const Tome = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [error, setError] = useState("");
  // Fetch video status once when component mounts
  useEffect(() => {
    const fetchVideoStatus = async () => {
      try {
        const response = await axios.get("https://bharat-techx.vercel.app/api/video-status");
        setIsPlaying(response.data.isPlaying);
      } catch (error) {
        console.error("Error fetching video status:", error);
        setError("Failed to fetch video status.");
      }
    };

    fetchVideoStatus();
  }, []);

  // Debounced API call to prevent spamming
  const handleButtonClick = useCallback(
    debounce(async () => {
      try {
        const newStatus = !isPlaying;
        const response = await axios.post(
          "https://bharat-techx.vercel.app/api/update-video-status",
          { isPlaying: newStatus },
          { headers: { "Content-Type": "application/json" } }
        );

        if (response.status === 200) {
          setIsPlaying(newStatus);
          setError("");
          console.log("Video status updated successfully!", newStatus);
        } else {
          throw new Error("Failed to update video status");
        }
      } catch (error) {
        console.error("Error updating video status:", error);
        setError("Too many requests. Please wait.");
      }
    }, 3000), // Prevents API calls more than once every 3 seconds
    [isPlaying]
  );

  return (
    <div className="min-h-[100vh] p-10 text-center text-white">
      <div id="stars"></div>
      <h2 className="text-3xl md:text-6xl font-medium title-font mb-16 text-animation">
        Inauguration_
      </h2>
      <h2 className="text-sm md:text-sm font-medium title-font mb-14 text-animation">
        🔥 The Moment is Here! 🔥

        Tap below to kick off the most anticipated National Hackathon of the year! 🚀💡
        A battleground where brilliant minds from 30+ top institutes converge under one roof, pushing the limits of innovation, skill, and creativity to claim the ultimate hacker supremacy! 🏆💻

        Are you ready to witness history in the making? Let’s ignite the future—NOW! 🚀🔥
      </h2>

      {error && <p className="text-red-500">{error}</p>}

      <button
        onClick={handleButtonClick}
        className="relative w-full h-16 uppercase tracking-wide text-[rgba(0,214,252,0.5)] border border-[rgba(0,214,252,0.3)] bg-transparent font-roboto transition-all duration-300 ease-in-out outline-none group hover:shadow-lg hover:text-[rgba(0,214,252,1)] hover:text-shadow-glow"
        disabled={error}
      >
        <span className="absolute top-0 left-[10%] w-14 h-[1px] bg-[rgba(0,214,252,1)] transition-all duration-300 ease-in-out group-hover:left-0 group-hover:w-5" />
        <span className="absolute bottom-0 right-[10%] w-14 h-[1px] bg-[rgba(0,214,252,1)] transition-all duration-300 ease-in-out group-hover:right-0 group-hover:w-5" />
        {isPlaying ? "Stop Inauguration" : "Start Inauguration"}
        <span className="absolute bottom-[30%] right-0 w-[1px] h-5 bg-[rgba(0,214,252,1)] transition-all duration-300 ease-in-out group-hover:bottom-0" />
        <span className="absolute top-[30%] left-0 w-[1px] h-5 bg-[rgba(0,214,252,1)] transition-all duration-300 ease-in-out group-hover:top-0" />
      </button>
    </div>
  );
};

export default Tome;