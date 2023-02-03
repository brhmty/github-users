import React from "react";
import UFPreviewContainer from "./UFPreviewContainer";
import UPreviewContainer from "./UPreviewContainer";

function URPreviewSection() {
  return (
    <div className="mt-7 flex justify-between max-sm:flex-col">
      <UPreviewContainer />
      <UFPreviewContainer />
    </div>
  );
}

export default URPreviewSection;
