import React from "react";
import { data } from "../constant/constant";
import "../style/Home.css";

const Home = () => {
  const clickHandler = () => {
    document.getElementById("about").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      id="home"
      className="flex flex-col lg:flex-row items-center justify-between h-screen px-4 sm:px-6 lg:px-24 overflow-hidden"
    >
      {/* Right side content */}
      <div className="relative flex justify-center">
        <div className="w-96 h-96 lg:w-96 lg:h-96">
          <img
            alt="avatar"
            className="rounded-full w-full h-full object-cover border-8 border-white"
            src={data.image}
          />
        </div>

        {/* Floating Tech Icons */}
        <div className="absolute top-4 sm:top-6 right-6 lg:-right-12 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-white dark:bg-gray-50 rounded-full grid place-items-center hover:shadow-lg transition-shadow">
          <img
            alt="tech-stack"
            className="h-8 w-8 md:h-10 md:w-10 object-cover"
            src="https://dhruv-portfolio-mu.vercel.app/_next/image?url=https%3A%2F%2Fimg.icons8.com%2Fcolor%2F144%2Fnull%2Fnodejs.png&w=256&q=75"
          />
        </div>
        <div className="absolute bottom-6 sm:bottom-8 right-6 lg:bottom-10 lg:-right-12 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-white dark:bg-gray-50 rounded-full grid place-items-center hover:shadow-lg transition-shadow">
          <img
            alt="tech-stack"
            className="h-8 w-8 md:h-10 md:w-10 object-cover"
            src="https://dhruv-portfolio-mu.vercel.app/_next/image?url=https%3A%2F%2Fimg.icons8.com%2Fcolor%2F144%2Fnull%2Freact-native.png&w=256&q=75"
          />
        </div>

        {/* Additional Floating Icons */}
        <div className="relative">
  {/* <div className="absolute top-40  left-6 lg:left-5 w-14 h-14 sm:w-16 sm:h-10 md:w-18 md:h-18 bg-white dark:bg-gray-50 rounded-full grid place-items-center shadow-md hover:shadow-lg transition-shadow">
    <img
      alt="JavaScript"
      className="h-9 w-9 md:h-12 md:w-12 object-contain rounded-lg"
      src="data:image/jpeg;base64,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"
    />
  </div> */}
<div className="relative">
  <div className="absolute bottom-0 right-1/2  translate-y-1/5   lg:right-12 w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18 bg-white dark:bg-gray-50 rounded-full grid place-items-center shadow-md hover:shadow-lg transition-shadow">
    <img
      alt="CSS"
      className="h-8 w-8 md:h-12 md:w-12 object-contain"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs5w5ZoDFFhfKz4GAP1JD-hk8AZKu0RugRVw&s"/>
  </div>
</div>
</div>

      </div>

      {/* Left side content */}
      <div className="flex flex-col items-center lg:items-start w-full lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0">
        <div>
          <h1 className="text-xl sm:text-3xl mb-2 text-black">👋 Hey</h1>
          <h2 className="text-4xl sm:text-5xl font-bold mb-2 text-black">
            I'm Sachin Kumar
          </h2>
          <h3 className="text-xl sm:text-2xl md:text-2xl mb-6 mt-4 text-black">
            I am into{" "}
            <span className="text-purple-600 font-semibold">Full Stack Development</span>
          </h3>
          <div className="max-w-lg mx-auto">
            <p className="text-sm sm:text-base md:text-lg text-gray-800 leading-relaxed mb-6">
              I build innovative web applications with a focus on detail, scalability, and performance. I am passionate about building excellent software that improves the lives of those around me.
            </p>
          </div>
          <button
            onClick={clickHandler}
            className="bg-purple-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:bg-purple-700 transition duration-300"
          >
            About Me &rarr;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
