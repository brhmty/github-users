import React from "react";

//InjectedIn--FormInput.js
export function BtnSearch() {
  return (
    <button className="lg:w-24 sm:w-16 max-sm:w-12 lg:h-8 sm:h-6 max-sm:h-6 rounded bg-primary hover:bg-secondary">
      <p className="lg:w-24 max-sm:w-12 h-min text-white lg:text-xl sm:text-base text-xs font-semibold flex justify-center self-center">
        Search
      </p>
    </button>
  );
}

//InjectedIn--URPreviewContainer.js
export function BtnVisitProfile() {
  return (
    <button className="w-min lg:h-10 sm:h-8 max-sm:h-8 lg:px-3 sm:px-1 max-sm:px-1 border-2 rounded-l-full rounded-r-full border-secondary hover:border-primary hover:bg-primary text-primary lg:text-xl sm:text-xs max-sm:text-sm max-sm:font-light hover:text-white whitespace-nowrap flex self-center items-center">
      Visit Profile
    </button>
  );
}
