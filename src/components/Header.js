import React from "react";

function Header() {
  return (
    <div className="w-full h-20 bg-white">
      <div className="lg:w-4/12 md:w-2/4 sm:w-2/4 w-2/4 h-full mx-auto flex justify-between items-center">
        <div className="lg:w-10 sm:w-8 w-7 aspect-square rounded-full bg-purple-700 text-white text-xl flex justify-center items-center">
          N
        </div>
        <div className="w-min whitespace-nowrap lg:text-xl sm:text-lg text-xs">
          Welcome, <span className="font-bold">Name</span>
        </div>
        <div className="w-min font-normal text-gray-500 lg:text-xl sm:text-lg text-xs">
          Logout
        </div>
      </div>
    </div>
  );
}

export default Header;
