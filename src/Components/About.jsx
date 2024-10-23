import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-10">
          I'm an IT student specializing in Information and Communication
          Engineering, with a passion for building modern web applications.
          Currently, I’m diving deep into full-stack development and working
          with technologies such as React, Node.js, Express, MongoDB, Next.js,
          and TypeScript.
        </p>

        <br />

        <p className="text-xl">
          Beyond academics, I enjoy taking on real-world projects, such as
          developing a university field booking system. Whether it's working
          with Firebase authentication or integrating Google login in React
          apps, I thrive on solving complex problems.
        </p>
      </div>
    </div>
  );
};

export default About;
