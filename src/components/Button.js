import React from "react";

//InjectedIn--FormInput.js
export function BtnSearch() {
  return (
    <button className="lg:w-24 sm:w-16 max-sm:w-12 lg:h-8 sm:h-6 max-sm:h-6 rounded bg-[#2caeba] hover:bg-[#88EBF2]">
      <p className="lg:w-24 max-sm:w-12 h-min text-white lg:text-xl sm:text-base text-xs font-semibold flex justify-center self-center">
        Search
      </p>
    </button>
  );
}

//InjectedIn--URPreviewContainer.js
export function BtnVisitProfile() {
  return (
    <button className="w-min h-10 px-3 border-2 rounded-l-full rounded-r-full border-[#88EBF2] hover:border-[#2caeba] hover:bg-[#2caeba] text-[#2caeba] hover:text-white whitespace-nowrap flex self-center items-center">
      Visit Profile
    </button>
  );
}