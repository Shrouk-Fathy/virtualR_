import React from "react";
import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

const HeroSection = () => {
  return (
      <div className="flex flex-col items-center mt-6 lg:mt-20">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide px-16">
          virtualR build tools{" "}
          <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
            for developers
          </span>
        </h1>
        <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl px-5">
          Empower your creativity and bring VR Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Accusantium molestias in quod
          exercitationem eum sit !
        </p>
        <div className="flex justify-center items-center space-x-6 my-10">
          <a
            href="#"
            className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-6 rounded-md my-5"
          >
            Start for free
          </a>
          <a href="#" className="py-2 px-3 border rounded-md my-5">
            Documentation
          </a>
        </div>
        <div className="flex flex-col lg:flex-row lg:space-x-6 space-x-0 justify-center items-center">
          <div className="rounded overflow-hidden lg:w-1/2 border border-orange-700 max-w-lg">
            <video loop muted autoPlay>
              <source src={video1} type="video/mp4" />
              Your browser does not support the  video tag.
            </video>
          </div>
          <div className="mt-4 lg:mt-0 rounded overflow-hidden lg:w-1/2 border border-orange-700 max-w-lg">
            <video loop muted autoPlay>
              <source src={video2} type="video/mp4" />
              Your browser does not support the  video tag.
            </video>
          </div>
        </div>
      </div>
  );
};

export default HeroSection;
