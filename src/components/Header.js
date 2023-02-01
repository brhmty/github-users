import React from "react";

function Header() {
  return (
    <div className="w-full h-16 bg-white">
      <div className="lg:w-4/12 md:w-2/4 sm:w-2/4 w-2/4 h-full mx-auto flex justify-between items-center">
        <div className="lg:w-10 lg:h-10 sm:w-8 sm:h-8 w-7 h-7 rounded-full bg-purple-700"></div>
        <div className="w-min whitespace-nowrap lg:text-xl sm:text-lg text-xs">
          Welcome, Name
        </div>
        <div className="w-min font-medium text-gray-400 lg:text-xl sm:text-lg text-xs">
          Logout
        </div>
      </div>
    </div>
  );
}

export default Header;
