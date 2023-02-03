import React from "react";
import RepoInfoContainer from "./RepoInfoContainer";
//InjectedIn--FormInput.js

function RepoInfoSection() {
  return (
    <div className="mt-7 flex justify-between max-sm:overflow-y-auto">
      <RepoInfoContainer />
      <RepoInfoContainer />
      <RepoInfoContainer />
      <RepoInfoContainer />
    </div>
  );
}

export default RepoInfoSection;
