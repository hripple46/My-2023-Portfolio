import React from "react";

export default function Contact({ contactRef }) {
  return (
    <div
      ref={contactRef}
      className="text-white h-full w-full overflow-x-hidden"
    >
      <div className="flex flex-row justify-center content-center">
        <div className="mr-2 mt-4 w-1/3 border-t-8"></div>
        <h1 className="text-4xl text-white">Contact</h1>
        <div className="ml-2 mt-4 w-1/3 border-t-8"></div>
      </div>
      <div className="h-3/4 items-center flex flex-col justify-evenly">
        <div className="flex flex-col items-center">
          <h3 className="md:text-2xl text-xl">
            Shoot Me An Email/Give Me A Call:
          </h3>
          <h1 className="md:text-2xl text-xl text-center">
            hhripple@gmail.com
            <br />
            952-261-6457
          </h1>
        </div>
        <div>
          <h1 className="text-4xl">OR</h1>
        </div>
        <div className="flex flex-col items-center">
          <h3 className="text-xl">Find Me On Social Media:</h3>
          <a href="https://github.com/hripple46" target="_blank">
            <h1 className="text-2xl border-white border-2 rounded p-1 mb-4 mt-2">
              Github
            </h1>
          </a>
          <a
            href="https://www.linkedin.com/in/henry-ripple-5711b3155/"
            target="_blank"
          >
            <h1 className="text-2xl border-white border-2 rounded p-1">
              LinkedIn
            </h1>
          </a>
        </div>
      </div>
    </div>
  );
}
