import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full min-h-screen bg-gradient-to-b from-black to-gray-800 p-8 text-white"
    >
      <div className="flex flex-col justify-center max-w-screen-lg mx-auto h-full space-y-8">
        <div className="pb-4 text-center">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-4">Submit the form below to get in touch with me</p>
        </div>

        <div className="flex justify-center items-center">
          <form
            action="https://getform.io/f/bpjjmzrb"
            method="POST"
            className="flex flex-col w-full md:w-1/2 space-y-6"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-3 bg-transparent border-2 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="p-3 bg-transparent border-2 rounded-md text-white focus:ring-2 focus:ring-pink-500"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="6"
              className="p-3 bg-transparent border-2 rounded-md text-white focus:ring-2 focus:ring-pink-500"
            ></textarea>

            <button
              type="submit"
              className="text-white bg-gradient-to-b from-pink-600 to-pink-500 px-6 py-3 mx-auto rounded-md hover:scale-105 transition-transform duration-300"
            >
              Let's talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
