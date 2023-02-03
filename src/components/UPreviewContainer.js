import React from "react";
import UserContainer from "./UserContainer";
import { BtnVisitProfile } from "./Button";
import TabTitle from "./TabTitle";
//InjectedIn--URPreviewSection.js

function URPreviewContainer() {
  return (
    <div className="w-[48%] max-sm:w-full min-h-min">
      <TabTitle />
      <div className="w-full max-sm:w-full min-h-min flex justify-center items-center bg-white">
        <div className="mainContainer w-[90%] min-h-min">
          <div className="userAndButtonContainer flex justify-between">
            <UserContainer />
            <BtnVisitProfile />
          </div>
          <p className="mt-5 text-xl font-light">User Bio Info</p>
          <p className="mt-5 text-lg text-gray-600">User Bio Info</p>
          <p className="text-lg text-gray-600">User Bio Info</p>
          <p className="text-lg text-gray-600">User Bio Info</p>
        </div>
      </div>
    </div>
  );
}

export default URPreviewContainer;
