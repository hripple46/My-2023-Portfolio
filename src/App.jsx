import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <>
      <div className="w-full h-full bg-blue-900">
        <div className="text-white fixed h-12 pt-2 pl-2 pr-2 top-0 left-0 w-full flex justify-between">
          <h1 className="text-2xl">Projects</h1>
          <h1 className="text-2xl">Skills</h1>
          <h1 className="text-2xl">Contact</h1>
        </div>
        <div className="w-full h-full pt-14 flex flex-col items-center md:justify-center">
          <h1 className="text-white text-3xl">Henry Ripple</h1>
          <h2 className="text-white">Full Stack Engineer</h2>
          <div className="relative w-full h-1/2 md:h-1/3 lg:h-1/2 md:w-1/3 md:rounded-lg overflow-hidden">
            <img
              src="../src/assets/profile_pic.png"
              alt="Description"
              className="absolute -top-12 left-0 w-full  h-auto object-cover"
            />
          </div>
          <p className="text-white pl-2 pr-2 md:w-1/3">
            I'm Henry, a Full-Stack Web Developer skilled in JavaScript, React,
            CSS, HTML, Node.js, and Express. Passionate about crafting
            pixel-perfect solutions, I'm ready to turn your ideas into digital
            reality.
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
