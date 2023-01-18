import React, { useState } from "react";
import * as FiIcons from "react-icons/fi";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import "../Home.css";
import CartItemCard from "./CartItemCard";
import { useSelector } from "react-redux";
function Navbar() {
  // I use usestate to hoid the state of my cart menu
  //  add a link to "The Coffee Shop" back to home page
  const cart = useSelector((state) => state.cart);
  const [cartDisplay, setCartDisplay] = useState(false);
  const showCart = () => setCartDisplay(!cartDisplay);

  return (
    <nav className="xs:bg-black xs:w-full md:bg-transparent sticky top-1 w-full flex flex-row mb-[200px] p-5 ">
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
          className="text-[20px]  text-white hover:text-[#F1C38E] hover:text-[25px]"
          onClick={showCart}
        />
        {/* cartmenu display*/}
        <div className={cartDisplay ? "cartMenu active" : "cartMenu"}>
          <div className="w-full h-full flex flex-col">
            <div className="w-full h-[60px] flex justify-end items-center ">
              <FaIcons.FaTimes
                className="text-white text-[30px] hover:text-[#F1C38E] "
                onClick={showCart}
              />
            </div>
            <div className="w-full p-4  h-full flex flex-col">
              <h3 className="text-white md-10 text-center text-2xl font-extralight">
                Shopping Cart
              </h3>
              <div>
                {cart?.map((item, index) => (
                  <CartItemCard
                    key={item.index}
                    id={item.id}
                    image={item.image}
                    title={item.title}
                    price={item.price}
                    quantity={item.quantity}
                  />
                ))}
              </div>
              <div className="w-full p-2 flex justify-center items-center mt-40 text-white font-extralight text-lg">
                Total: $
                {cart.reduce((a, c) => Math.floor(a + c.price * c.quantity), 0)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
