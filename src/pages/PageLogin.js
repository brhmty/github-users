import React from "react";
import userLogin from "../assets/images/user-login.svg";

function PageLogin() {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <img src={userLogin} className="w-[40%] h-[40%]" />
      <p className="lg:text-9xl md:text-7xl sm:text-5xl max-sm:text-4xl lg:font-black md:font-bold sm:font-medium max-sm:font-normal">
        Github Users
      </p>
      <button className="mt-10">Login/Sign Up</button>
    </div>
  );
}

export default PageLogin;
