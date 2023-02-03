import React from "react";
import { RiBookMarkFill } from "react-icons/ri";
//InjectedInProfileInfoSection.js

function ProfileInfoContainer() {
  return (
    <div className="w-[22%] h-20 mt-7 bg-white flex justify-around items-center">
      <div className="w-10 h-10 rounded-full flex justify-center items-center bg-red-300">
        <RiBookMarkFill className="w-6 h-6 text-red-500" />
      </div>
      <div className="mr-10 flex flex-col items-center">
        <p className="font-bold text-3xl">0</p>
        <p className="text-gray-600 font-semibold">Repos</p>
      </div>
    </div>
  );
}

export default ProfileInfoContainer;
