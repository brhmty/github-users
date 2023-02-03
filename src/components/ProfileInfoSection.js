import React from "react";
import ProfileInfoContainer from "./ProfileInfoContainer";
//InjectedInFormInput.js

function ProfileInfoSection() {
  return (
    <div className="flex justify-between">
      <ProfileInfoContainer />
      <ProfileInfoContainer />
      <ProfileInfoContainer />
      <ProfileInfoContainer />
    </div>
  );
}

export default ProfileInfoSection;
