import React from "react";
import person from '../../../images/customer-1.png'
import person1 from '../../../images/customer-2.png'
import person2 from '../../../images/customer-3.png'
const Reviews = () => {
  return (
    <div className="mt-32 font-mono">
      <h1 className="text-center text-4xl text-primary font-bold">
        Clients <span className="text-green-600">Feedback</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 px-20 lg:grid-cols-3 gap-5 mt-20">
        <div class="card w-11/12 bg-base-100 shadow-xl">
          <div class="card-body">
            <p className="text-justify">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex facilis itaque earum neque. Repellendus, incidunt.</p>
            <div class="card-actions justify-between mt-5 items-center">
              <img
                className="rounded-full w-28 ring ring-secondary ring-offset-base-100 ring-offset-2"
                src={person}
                alt=""
              />
              <div>
                <h2 class="card-title">Nash Patrik</h2>
                <p>CEO, Manpol</p>
              </div>
            </div>
          </div>
        </div>
        <div class="card w-11/12 bg-base-100 shadow-xl">
          <div class="card-body">
            <p className="text-justify">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex facilis itaque earum neque. Repellendus, incidunt.</p>
            <div class="card-actions justify-between mt-5 items-center">
              <img
                className="rounded-full w-28 ring ring-secondary ring-offset-base-100 ring-offset-2"
                src={person1}
                alt=""
              />
              <div>
                <h2 class="card-title">Miriam Barron</h2>
                <p>CEO, Manpol</p>
              </div>
            </div>
          </div>
        </div>
        <div class="card w-11/12 bg-base-100 shadow-xl">
          <div class="card-body">
            <p className="text-justify">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex facilis itaque earum neque. Repellendus, incidunt.</p>
            <div class="card-actions justify-between mt-5 items-center">
              <img
                className="rounded-full w-28 ring ring-secondary ring-offset-base-100 ring-offset-2"
                src={person2}
                alt=""
              />
              <div>
                <h2 class="card-title">Bria Malone</h2>
                <p>CEO, Manpol</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
