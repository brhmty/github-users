import React from "react";
import placeholderImage from "../assets/images/placeholder-image.png";
//injectedIn--URPreviewContainer.js

function UserContainer() {
  return (
    <div className="flex">
      <div className="w-[20%] aspect-square rounded-full bg-gray-300">
        <img
          src={placeholderImage}
          className="w-full h-full object-cover"
        ></img>
      </div>
      <div className="nameContainer ml-5 flex flex-col justify-center">
        <p className="text-lg font-semibold">John Doe</p>
        <p className="text-gray-600 text-lg">@j_doe</p>
      </div>
    </div>
  );
}

export default UserContainer;
