import React from "react";

const Contact = () => {
  return (
    <div id="/contact" className="font-mono bg-secondary mt-20 py-10">
      <h1 className="text-4xl font-semibold text-center text-secondary">
        Contact Us
      </h1>
      <h1 className="text-4xl font-semibold text-primary text-center">
        Stay connected with us
      </h1>
      <div className="flex flex-col md:px-0 px-20 md:w-4/12 mx-auto mt-8">
        <input
          className="mb-4 py-4 px-4 rounded"
          type="email"
          placeholder="Enter Your E-mail"
          name="email"
          id=""
        />
        <input
          className="mb-4 py-4 px-4 rounded"
          type="text"
          placeholder="Subject"
          name=""
          id=""
        />
        <textarea
          className="py-4 px-4 rounded"
          name="message"
          id="message"
          placeholder="Your Message"
          cols="30"
          rows="10"
        ></textarea>
        <button className="mt-10 rounded px-8 py-4 w-36 mx-auto bg-gradient-to-r from-primary to-secondary text-lg font-semibold text-white">
          Submit
        </button>
      </div>
    </div>
  );
};

export default Contact;
