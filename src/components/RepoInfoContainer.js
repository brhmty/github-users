import React from "react";
import { RiBookMarkFill } from "react-icons/ri";
//InjectedIn--RepoInfoSection.js

function RepoInfoContainer() {
  return (
    <div className="w-[22%] max-sm:w-full h-20 max-sm:mr-2 bg-white flex justify-around items-center">
      <div className="w-10 max-sm:w-6 h-10 max-sm:h-6 max-sm:ml-8 max-sm:mr-5 rounded-full flex justify-center items-center bg-red-300">
        <RiBookMarkFill className="w-6 max-sm:w-4 h-6 max-sm:h-4 text-red-500" />
      </div>
      <div className="mr-12 max-md:mr-4 max-sm:mr-8 flex flex-col items-center">
        <p className="font-bold text-3xl max-md:text-xl max-sm:text-lg">0</p>
        <p className="text-gray-600 font-semibold">Repos</p>
      </div>
    </div>
  );
}

export default RepoInfoContainer;
