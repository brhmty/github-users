import React from "react";
import RequestCounter from "./RequestCounter";
import { HiMagnifyingGlass } from "react-icons/hi2";

const FormInput = () => {
  return (
    <div className="flex">
      <div className="w-8 h-12 absolute flex justify-center items-center z-10">
        <HiMagnifyingGlass className="lg:w-4 lg:h-4 w-4 h-4" />
      </div>
      <form className="w-[74%] h-12 bg-white relative flex items-center">
        <input
          className="lg:w-[82%] md:w-8/12 w-full h-8 ml-10 rounded focus:outline-2 focus:outline-[#e0f8fa] placeholder:text-gray-600 placeholder:font-medium lg:placeholder:text-xl sm:placeholder:text-lg placeholder:text-xs"
          placeholder="Enter Github User"
        />
        <div className="w-24 h-12 absolute mr-2 lg:right-0 md:right-1/3 right-0 flex justify-center items-center ">
          <button className="lg:w-24 sm:w-20 w-16 h-8 rounded bg-[#2caeba] hover:bg-[#88EBF2]">
            <p className="lg:w-24 sm:w-20 w-16 h-8 text-white lg:text-xl sm:text-lg text-xs font-semibold">
              Search
            </p>
          </button>
        </div>
      </form>
      <RequestCounter />
    </div>
  );
};

export default FormInput;
