import React from "react";
import Grapic from "../../../images/icons/service1.png";
import web from "../../../images/icons/service3.png";
import Dev from "../../../images/icons/service4.png";
const Service = () => {
  return (
    <div className="mt-36 font-mono">
      <h1 className="text-center text-primary text-4xl font-semibold">
        Provide awesome <span className="text-green-600">services</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-36 px-20 mx-auto ">
        <div class="card w-11/12 md:md-0 md-8md:mt-0 mt-4">
          <figure>
            <img className="w-32" src={Grapic} alt="Shoes" />
          </figure>
          <div class="card-body">
            <h2 class="text-center text-xl font-semibold">
              Web & Mobile design{" "}
            </h2>
            <p className="text-center text-base">
              We craft stunning and amazing web UI, using a well drrafted UX to
              fit your product.
            </p>
          </div>
        </div>

        <div class="card w-11/12 bg-base-100 shadow-xl md:mt-0 mt-4">
          <figure>
            <img className="w-32" src={web} alt="Shoes" />
          </figure>
          <div class="card-body">
            <h2 class="text-center text-xl font-semibold">Graphic design</h2>
            <p className="text-center text-base">
              We craft stunning and amazing web UI, using a well drrafted UX to
              fit your product.
            </p>
          </div>
        </div>

        <div class="card w-11/12 md:mt-0 mt-4">
          <figure>
            <img className="w-32" src={Dev} alt="Shoes" />
          </figure>
          <div class="card-body">
            <h2 class="text-center text-xl font-semibold">Web development</h2>
            <p className="text-center text-base">
              Amazing flyers, social media posts and brand representations that
              would make your brand stand out.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
