import React from "react";
import heroimg from "../../assets/logoheroimg.png";

export default function Hero() {
  return (
    <div
      className="h-screen bg-cover bg-center relative"
      style={{ backgroundImage: `url(${heroimg})` }}
    >
      <div className="flex flex-col justify-center items-start h-full ml-5 gap-5 text-black">
        
        <div className="gap-5 flex flex-col w-1/2">
          
          <h1 className="text-6xl font-bold">
            Step Into <span className="text-blue-500">Style</span>
          </h1>

          
          <p className="text-lg leading-relaxed">
            Step into ultimate style and comfort with our premium sneakers. 
            Designed for performance, durability, and confidence — perfect for 
            every move and every moment in your journey.
          </p>

          
          
        </div>
        <div>
          <button className="text-white bg-black px-3 py-2  rounded hover:bg-black/70">
            Explore Now
          </button>
        </div>

      </div>
    </div>
  );
}
