import React from "react";
//injectedInFormInput.js

function RequestCounter() {
  return (
    <div className="w-[19%] h-12 lg:flex md:flex hidden items-center absolute right-[6.5%]">
      <p className="w-full whitespace-nowrap text-gray-500 text-3xl font-normal flex justify-center ">
        Requests : 0 / 60
      </p>
    </div>
  );
}

export default RequestCounter;
