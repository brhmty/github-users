import React from "react";
import placeholderImage from "../assets/images/placeholder-image.png";
import mockUser from "../mockData/mockUser";
//injectedIn--URPreviewContainer.js

function UserContainer() {
  return (
    <div className="flex">
      <div className="w-[20%] aspect-square rounded-full bg-gray-300">
        <img
          src={mockUser.avatar_url}
          className="w-full h-full object-cover rounded-full"
        ></img>
      </div>
      <div className="nameContainer ml-5 flex flex-col justify-center">
        <p className="lg:text-lg md:text-md sm:text-sm max-sm:text-sm font-semibold pointer-events-none">
          {mockUser.name}
        </p>
        <p className="text-gray-600 lg:text-lg md:text-md sm:text-sm max-sm:text-sm pointer-events-none">
          @{mockUser.twitter_username}
        </p>
      </div>
    </div>
  );
}

export default UserContainer;
