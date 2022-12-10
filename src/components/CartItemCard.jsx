import React from "react";

function CartItemCard() {
  // Every time i hit Add to Cart Button on the SinglePost comnponent i want create a Card item that will be map thorough my cart.
  return (
    <div className="w-full h-[100px] flex flex-row m-1">
      <div className="w-1/3 h-full bg-white">
        <h1>img</h1>
      </div>
      <div className="w-2/3 h-full flex flex-row bg-[#ffd59e] text-black">
        <div className="w-2/3 h-full flex  flex-col text-center">
          <h3>Product Name</h3>
          <h4>Q:4</h4>
        </div>
        <div className="w-1/3 h-full ">
          <h1>$40.00</h1>
        </div>
      </div>
    </div>
  );
}

export default CartItemCard;
