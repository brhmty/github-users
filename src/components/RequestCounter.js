import React from "react";
//injectedIn--FormInput.js

function RequestCounter() {
  return (
    <div className="w-[19%] h-12 lg:flex md:flex sm:flex hidden items-center absolute right-[6.5%]">
      <p className="w-full whitespace-nowrap text-gray-500 lg:text-3xl sm:text-[18px] font-normal flex justify-center ">
        Requests : 0 / 60
      </p>
    </div>
  );
}

export default RequestCounter;
