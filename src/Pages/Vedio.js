import React, { useEffect, useRef, useState } from "react";
import inaugurationVideo from "./inaugration/3D Countdown Timer 10 Seconds.mp4";

const Vedio = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const checkVideoStatus = async () => {
        try {
          const response = await fetch("https://bharat-techx.vercel.app/api/video-status");
          
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
      
          const data = await response.json();
          setIsPlaying(data.isPlaying);
        } catch (error) {
          console.error("Error fetching video status:", error);
        }
      };
      
    const interval = setInterval(checkVideoStatus, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (isPlaying && videoRef.current) {
      videoRef.current.play();
    }
  }, [isPlaying]);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "black",
      }}
    >
      <video
        ref={videoRef}
        width="100%"
        height="100%"
        controls
        style={{ objectFit: "cover" }}
      >
        <source src={inaugurationVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Vedio;