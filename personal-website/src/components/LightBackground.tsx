import { useEffect, useState } from "react";

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
        y: Math.random() * 40 + 10,
        duration: Math.random() * 20 + 25,
      });
    }

    setClouds(newClouds);
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none bg-gradient-to-b from-sky-200 to-sky-100 overflow-hidden">
      {/* Optional sun */}
      <div className="absolute top-10 left-10 w-24 h-24 rounded-full bg-yellow-300 opacity-90 shadow-lg animate-slow-spin" />

      {/* Clouds */}
      {clouds.map((cloud) => (
        <div
          key={cloud.id}
          className="cloud animate-cloud"
          style={{
            width: `${cloud.size}px`,
            height: `${cloud.size * 0.6}px`,
            top: `${cloud.y}vh`,
            left: `${cloud.x}vw`,
            animationDuration: `${cloud.duration}s`,
          }}
        />
      ))}
    </div>
  );
};
