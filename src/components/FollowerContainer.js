import React from "react";
import mockUser from "../mockData/mockUser";

function FollowerContainer({ imgUrl, name, profileUrl }) {
  return (
    <div className="overflow-auto mb-4 flex">
      <div className="w-[10%] aspect-square rounded-full bg-gray-300">
        <img
          src={imgUrl}
          className="w-full h-full object-cover rounded-full"
        ></img>
      </div>
      <div className="nameContainer ml-5 flex flex-col justify-center">
        <p className="lg:text-lg md:text-md sm:text-sm max-sm:text-sm font-semibold pointer-events-none">
          {name}
        </p>
        <p className="text-gray-600 lg:text-lg md:text-md sm:text-sm max-sm:text-sm pointer-events-none">
          {profileUrl}
        </p>
      </div>
    </div>
  );
}

export default FollowerContainer;
