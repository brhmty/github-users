import React from "react";
import FollowerContainer from "./FollowerContainer";
import TabTitle from "./TabTitle";
import mockFollowers from "../mockData/mockFollowers";
//InjectedIn--URPreviewSection.js

function UFPreviewContainer() {
  return (
    <div className="w-[48%] max-sm:w-full max-sm:mt-7">
      <TabTitle title="Followers" />
      <div className="w-full max-sm:w-full lg:h-72 sm:h-52 max-sm:h-52 flex justify-center items-center bg-white">
        <div className="mainContainer w-[90%] h-[80%] overflow-x-auto overflow-y-auto">
          {mockFollowers.map((item) => {
            return (
              <FollowerContainer
                key={item.id}
                imgUrl={item.avatar_url}
                name={item.login}
                profileUrl={item.html_url}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default UFPreviewContainer;
