import React from "react";
import first from "../../../images/carousel-1.png";
import Second from "../../../images/carousel-2.png";
import Third from "../../../images/carousel-3.png";
const RecentWorks = () => {
  return (
    <div className="bg-primary">
        <h1 className="text-center text-4xl text-white font-bold mt-20 py-12 font-mono">Here are some <span className="text-green-600">of our works</span></h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-16 mx-20">
        <img className="w-11/12 h-4/5" src={first} alt="" />
        <img className="w-11/12 h-4/5" src={Second} alt="" />
        <img className="w-11/12 h-4/5" src={Third} alt="" />
      </div>
    </div>
  );
};

export default RecentWorks;
