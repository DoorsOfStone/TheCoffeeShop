import React, { useEffect, useState } from "react";
import * as FiIcons from "react-icons/fi";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import "../Home.css";
import CartItemCard from "./CartItemCard";
import Cart from "../pages/cart"

function Navbar() {
  // I use usestate to hoid the state of my cart menu
  //  add a link to "The Coffee Shop" back to home page
  const [cartDisplay, setCartDisplay] = useState(false);
  const showCart = () => setCartDisplay(!cartDisplay);
  return (
    <nav className="xs:bg-black xs:w-full lg:bg-transparent sticky top-1 w-full flex flex-row mb-[200px] p-5 ">
      <div className="xs:w-1/2 w-1/2 h-full flex flex-row">
        <div className="w-1/12 h-10 flex justify-center items-center">
          <Link to="/">
            <FaIcons.FaCoffee className="text-white text-[20px] hover:text-[30px]" />
          </Link>
        </div>

        <h1 className="text-xl font-bold text-white m-1">The Coffee Shop</h1>
      </div>
      <div className=" w-1/2 h-full flex justify-end px-2">
        <FaIcons.FaShoppingCart
          className="text-[20px]  text-white hover:text-[#F1C38E]"
          onClick={showCart}
        />
        <div className={cartDisplay ? "cartMenu active" : "cartMenu"}>
          <div className="w-full h-full flex flex-col">
            <div className="w-full h-[60px] flex justify-end items-center ">
              <FaIcons.FaTimes
                className="text-white text-[30px] hover:text-[#F1C36E]"
                onClick={showCart}
              />
            </div>
            <div className="w-full p-1 h-full flex flex-col ">
              {/* ofcouse once i figure out of to pass the data from the single page component to display on the cart than i will just map through, this is only for a visual placehoder for now */}
              {/* <CartItemCard />
              <CartItemCard />
              <CartItemCard />
              <CartItemCard /> */}
              <Cart />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
