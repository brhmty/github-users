import React from "react";

function TabTitle(props) {
  return (
    <div className="w-min h-5 p-4 rounded-tl-md rounded-tr-md bg-white lg:text-lg md:text-md sm:text-sm max-sm:text-sm text-gray-500 flex items-center hover:cursor-default">
      {props.title}
    </div>
  );
}

export default TabTitle;
