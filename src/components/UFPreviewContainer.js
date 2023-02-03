import React from "react";
import UserContainer from "./UserContainer";
import TabTitle from "./TabTitle";
//InjectedIn--URPreviewSection.js

function UFPreviewContainer() {
  return (
    <div className="w-[48%] max-sm:w-full max-sm:mt-7">
      <TabTitle />
      <div className="w-full max-sm:w-full h-60 flex justify-center items-center bg-white">
        <div className="mainContainer w-[90%] h-[80%] overflow-x-auto overflow-y-auto">
          <UserContainer />
        </div>
      </div>
    </div>
  );
}

export default UFPreviewContainer;
