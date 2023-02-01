import React from "react";
import { HiMagnifyingGlass } from "react-icons/hi2";

const FormInput = () => {
  return (
    <>
      <form className="h-9 relative">
        <HiMagnifyingGlass className="lg:w-5 lg:h-5 lg:mt-2 w-4 h-4 mt-3 ml-1 absolute" />
        <input
          className="lg:w-3/4 md:w-8/12 w-full h-9 pl-8 pr-24 placeholder:text-black lg:placeholder:text-xl sm:placeholder:text-lg placeholder:text-xs "
          placeholder="Enter Github User"
        />
        <button className="lg:w-20 sm:w-20 w-16 h-7 bg-blue-500 lg:right-1/4 md:right-1/3 right-0 mt-1 mr-1 text-white lg:text-xl sm:text-lg text-xs absolute">
          Search
        </button>
      </form>
    </>
  );
};

export default FormInput;
