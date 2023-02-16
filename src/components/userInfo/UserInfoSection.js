import React from "react";
import UserInfoFollowers from "./UserInfoFollowers";
import UserInfoFollowing from "./UserInfoFollowing";
import UserInfoGists from "./UserInfoGists";
import UserInfoContainer from "./UserInfoRepos";
//InjectedIn--Dashboard.js

function UserInfoSection() {
  return (
    <div className="mt-7 flex justify-between max-sm:overflow-y-auto">
      <UserInfoContainer />
      <UserInfoFollowers />
      <UserInfoFollowing />
      <UserInfoGists />
    </div>
  );
}

export default UserInfoSection;
