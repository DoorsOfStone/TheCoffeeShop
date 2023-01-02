import React from "react";
import * as FaIcons from "react-icons/fa";
import { useDispatch } from "react-redux";
import {
  incrementQuantity,
  decrementQuantity,
  removeItem,
} from "../Store/cartSlice";

function CartItemCard({ id, image, title, price, quantity = 0 }) {
  // Every time i hit Add to Cart Button on the SinglePost comnponent i want create a Card item that will be map thorough my cart.
  const dispatch = useDispatch();
  return (
    <div className="w-full h-[100px] flex flex-row my-5 ">
      <div className="text-white flex justify-center items-center mr-1  hover:text-[#f3913b]">
        <FaIcons.FaTrash onClick={() => dispatch(removeItem(id))} />
      </div>
      <div className="w-1/3 h-full bg-transparent">
        <img className="w-full h-full  " src={image} />
      </div>
      <div className="w-2/3 h-full flex flex-row bg-[#000] text-white">
        <div className="w-2/3 h-full flex  flex-col justify-center items-center text-md font-bold p-2">
          <h3>{title}</h3>
        </div>
        <div className="w-1/3 h-full flex justify-center items-center font-semibold ">
          <h1>{price}</h1>
        </div>
      </div>
      <div className="text-black w-1/14 text-lg mr-2 p-2 bg-[#ffd59e] ">
        <button
          className="text-xl"
          onClick={() => dispatch(decrementQuantity(id))}
        >
          -
        </button>
        <p>{quantity}</p>
        <button
          className="text-xl"
          onClick={() => dispatch(incrementQuantity(id))}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default CartItemCard;
