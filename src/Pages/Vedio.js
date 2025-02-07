import React, { useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";
import inaugurationVideo from "./inaugration/3D Countdown Timer 10 Seconds.mp4";

const Vedio = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const socket = io("https://bharat-tech-backend.vercel.app"); // Your backend URL

    socket.on("video-status", (data) => {
      setIsPlaying(data.isPlaying);
    });

    return () => {
      socket.disconnect();
    };
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
