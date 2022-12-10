import React from "react";
import "../Home.css";

function Banner() {
  return (
    <div className=" w-full h-[200px] flex justify-center items-center mb-[100px] ">
      <div className="xs:w-4/5 w-3/4 h-full border-y border-white flex justify-center items-center">
        <h1 className="banner xs:text-[50px] lg:text-[80px] text-white">
          "Humanity runs on coffee."
        </h1>
      </div>
    </div>
  );
}

export default Banner;
