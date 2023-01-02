import React from "react";
import { Link } from "react-router-dom";

function ProductCard({ image, name, slug, price, description }) {
  return (
    <div className="my-40 w-3/5 h-[600px]  bg-[#ffd59e] xs:flex-col flex md:flex-row justify-center items-center md:rounded-3xl">
      <div className="xs:w-full xs:h-1/3 md:w-1/2 md:h-full flex justify-center ">
        <img className="w-full bg-transparent md:rounded-l-2xl" src={image} />
      </div>
      <div className=" xs:w-full xs:h-2/3  md:w-1/2 md:h-full flex flex-col justify-center p-2 text-white bg-black md:rounded-r-2xl ">
        <div className="xs:w-full xs:h-1/4 md:w-full md:h-1/3 flex flex-col justify-start items-start p-5">
          <h1 className="xs:text-xl md:text-3xl font-extrabold mb-2">{name}</h1>
          <h3 className="xs:text-xl md:text-xl font-bold">${price}</h3>
        </div>
        <div className="xs:w-full xs:h-2/4 flex flex-col md:w-full md:h-2/3  mt-20">
          <div className="flex justify-center items-center w-full h-2/3 p-3 font-extralight text-lg">
            {description}
          </div>
          <div className="xs-h-1/4 md:w-full md:h-1/3 flex justify-end items-end p-2">
            <Link to={"/" + slug.current} key={slug.current}>
              <button className="xs:w-[80px] xs:h-[30px] md:w-[120px] md:h-[60px] text-black text-lg font-bold  bg-[#ffd59e] hover:bg-[#f3913b] hover:text-white md:rounded-md">
                See More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
