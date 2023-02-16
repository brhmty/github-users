import React from "react";

function PageError() {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <p className="lg:text-9xl md:text-7xl sm:text-5xl max-sm:text-4xl lg:font-black md:font-bold sm:font-medium max-sm:font-normal">
        404
      </p>
      <p className="lg:text-6xl md:text-4xl sm:text-2xl max-sm:text-xl">
        Page Not Found
      </p>
      <button className="lg:text-2xl mt-10">Back Home</button>
    </div>
  );
}

export default PageError;
