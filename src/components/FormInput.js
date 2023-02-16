import React from "react";
import RequestCounter from "./RequestCounter";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { BtnSearch } from "./Button";
//InjectedIn--Dashboard.js

const FormInput = () => {
  return (
    <div className="flex lg:justify-start md:justify-start sm:justify-start justify-center items-center">
      <div className="w-8 h-8 absolute max-lg:left-[7%] flex justify-center items-center z-10">
        <HiMagnifyingGlass className="w-5 h-5 max-sm:w-4" />
      </div>
      <form className="lg:w-[74%] md:w-[74%] sm:w-[74%] max-sm:w-[95%] lg:h-12 sm:h-8 max-sm:h-8 bg-white relative flex items-center">
        <input
          className="lg:w-[82%] md:w-[82%] sm:w-[73%] max-sm:w-[65%] lg:h-8 sm:h-6 max-sm:h-6 lg:ml-10 md:ml-8 sm:ml-12 max-sm:ml-7 rounded focus:outline-2 focus:outline-[#e0f8fa] placeholder:text-gray-600 placeholder:font-medium lg:placeholder:text-xl max-sm:placeholder:text-base placeholder:leading-[40px]"
          placeholder="Enter Github User"
        />
        <div className="w-24 h-12 absolute lg:mr-2 sm:-mr-3 max-sm:-mr-5 right-0 flex justify-center items-center">
          <BtnSearch />
        </div>
      </form>
      <RequestCounter />
    </div>
  );
};

export default FormInput;
