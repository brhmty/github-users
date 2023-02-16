import React from "react";
import UserContainer from "./UserContainer";
import { BtnVisitProfile } from "./Button";
import TabTitle from "./TabTitle";
import mockUser from "../mockData/mockUser";
import { BiBuilding } from "react-icons/bi";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FiLink2 } from "react-icons/fi";
//InjectedIn--URPreviewSection.js

function URPreviewContainer() {
  return (
    <div className="w-[48%] max-sm:w-full min-h-min">
      <TabTitle title="User" />
      <div className="w-full max-sm:w-full lg:h-72 sm:h-52 max-sm:h-52 flex justify-center items-center bg-white">
        <div className="mainContainer w-[90%] h-[80%]">
          <div className="userAndButtonContainer flex justify-between">
            <UserContainer />
            <BtnVisitProfile />
          </div>
          <p className="mt-5 lg:text-xl md:text-md sm:text-sm max-sm:text-sm font-normal pointer-events-none">
            {mockUser.bio}
          </p>
          <p className="mt-5 lg:text-xl md:text-md sm:text-sm max-sm:text-sm text-gray-600 pointer-events-none flex items-center">
            <BiBuilding className="mr-2" />
            {mockUser.company}
          </p>
          <p className="lg:text-xl md:text-md sm:text-sm max-sm:text-sm text-gray-600 pointer-events-none flex items-center">
            <FaMapMarkerAlt className="mr-2" />
            {mockUser.location}
          </p>
          <div className="lg:text-xl md:text-md sm:text-sm max-sm:text-sm flex items-center">
            <FiLink2 className="mr-2" />
            <a
              href={`http://${mockUser.blog}`}
              target="_blank"
              rel="noreferrer"
              className="text-primary hover:text-secondary"
            >
              {mockUser.blog}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default URPreviewContainer;
