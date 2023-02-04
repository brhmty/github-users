import React from "react";

function Header() {
  return (
    <div className="w-full max-md:h-16 sm-h:12 max-sm:h-12 h-20 bg-white">
      <div className="lg:w-4/12 md:w-2/4 sm:w-2/4 max-sm:w-3/4 h-full mx-auto flex justify-between items-center">
        <div className="lg:w-10 sm:w-8 w-7 aspect-square rounded-full bg-purple-700 text-white text-xl flex justify-center items-center pointer-events-none">
          N
        </div>
        <div className="w-min whitespace-nowrap lg:text-xl sm:text-lg text-xs pointer-events-none">
          Welcome, <span className="font-bold">Name</span>
        </div>
        <div className="w-min font-normal text-gray-500 lg:text-xl sm:text-lg text-xs hover:cursor-pointer">
          Logout
        </div>
      </div>
    </div>
  );
}

export default Header;
