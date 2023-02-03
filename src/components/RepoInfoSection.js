import React from "react";
import RepoInfoContainer from "./RepoInfoContainer";
//InjectedInFormInput.js

function RepoInfoSection() {
  return (
    <div className="flex justify-between max-sm:overflow-y-auto">
      <RepoInfoContainer />
      <RepoInfoContainer />
      <RepoInfoContainer />
      <RepoInfoContainer />
    </div>
  );
}

export default RepoInfoSection;
