import React from "react";
import { SlPeople } from "react-icons/sl";
import mockUser from "../../mockData/mockUser";
import { infoText } from "../../utils/data";

function UserInfoFollowers() {
  return (
    <div className="w-[22%] max-sm:w-full h-20 max-sm:mr-2 bg-white flex justify-around items-center">
      <div className="w-10 max-sm:w-8 h-10 ml-4 max-sm:h-8 max-sm:ml-8 max-sm:mr-5 rounded-full flex justify-center items-center bg-blue-300">
        <SlPeople className="w-6 max-sm:w-4 h-6 max-sm:h-4 text-blue-500" />
      </div>
      <div className="mr-4 max-md:mr-4 max-sm:mr-8 flex flex-col items-center pointer-events-none">
        <p className="font-bold text-3xl max-md:text-xl max-sm:text-lg">
          {mockUser.followers}
        </p>
        <p className="text-gray-600 font-semibold text-lg max-md:text-sm max-sm:text-xs">
          {infoText.textFollowers}
        </p>
      </div>
    </div>
  );
}

export default UserInfoFollowers;
