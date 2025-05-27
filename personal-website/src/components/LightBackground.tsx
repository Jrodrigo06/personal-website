import { useEffect, useState } from "react";
import Cloud from "../assets/Cloud.svg";

type Cloud = {
  id: number;
  size: number;
  x: number;
  y: number;
  duration: number;
};

export const LightBackground = () => {
  const [clouds, setClouds] = useState<Cloud[]>([]);

  useEffect(() => {
    const numberOfClouds = 6;
    const newClouds: Cloud[] = [];

    for (let i = 0; i < numberOfClouds; i++) {
      newClouds.push({
        id: i,
        size: Math.random() * 80 + 60, 
        x: Math.random() * 100,
        y: Math.random() * 40,
        duration: Math.random() * 20 + 25,
      });
    }

    setClouds(newClouds);
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none bg-gradient-to-b from-sky-200 to-sky-100 overflow-hidden">
      {/* Optional sun */}
      <div className="absolute top-10 left-10 w-24 h-24 rounded-full bg-yellow-300 opacity-90 shadow-lg animate-slow-spin animate-sun" />

      {/* Clouds */}
      {clouds.map((cloud) => (
        <img
          key={cloud.id}                               
          src={Cloud}
          alt="cloud"
          className="absolute opacity-80 drop-shadow-lg animate-cloud"
          style={{
            top: `${cloud.y}vh`,
            left: `${cloud.x}vw`,
            width: `${cloud.size}px`,
            animationDuration: `${cloud.duration}s`,
          }}
        />
      ))}

    </div>  
  );
};
