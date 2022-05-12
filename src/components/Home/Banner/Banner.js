import React from "react";
import "./Banner.css";
import banner from "../../../components/../images/logos/Frame.png";
const Banner = () => {
  return (
    <div className="Banner">
      <div className="md:flex justify-between px-20 items-center py-36">
        <div className="flex-1 md:ml-10 mb-10 md:mb-0 font-mono">
          <h1 className="text-5xl font-semibold">
            Let’s Grow Your Brand To The Next Level
        </h1>
          <p className="text-xl pl-2">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt,
            non.
          </p>
          <button className="mt-8 rounded px-10 py-4 bg-primary text-white text-lg font-semibold">
            HIRE US
          </button>
        </div>
        <div className="banner-image flex-1 ">
          <img src={banner} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
