import React from "react";
import UserContainer from "./UserContainer";
import { BtnVisitProfile } from "./Button";
import TabTitle from "./TabTitle";
//InjectedIn--URPreviewSection.js

function URPreviewContainer() {
  return (
    <div className="w-[48%] max-sm:w-full min-h-min">
      <TabTitle />
      <div className="w-full max-sm:w-full lg:h-72 sm:h-52 max-sm:h-52 flex justify-center items-center bg-white">
        <div className="mainContainer w-[90%] h-[80%]">
          <div className="userAndButtonContainer flex justify-between">
            <UserContainer />
            <BtnVisitProfile />
          </div>
          <p className="mt-5 lg:text-xl md:text-md sm:text-sm max-sm:text-sm font-light pointer-events-none">
            User Bio Info
          </p>
          <p className="mt-5 lg:text-xl md:text-md sm:text-sm max-sm:text-sm text-gray-600 pointer-events-none">
            User Bio Info
          </p>
          <p className="lg:text-xl md:text-md sm:text-sm max-sm:text-sm text-gray-600 pointer-events-none">
            User Bio Info
          </p>
          <p className="lg:text-xl md:text-md sm:text-sm max-sm:text-sm text-gray-600 pointer-events-none">
            User Bio Info
          </p>
        </div>
      </div>
    </div>
  );
}

export default URPreviewContainer;
