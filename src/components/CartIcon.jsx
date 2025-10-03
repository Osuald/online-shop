import React from "react";
import { FaCartShopping } from "react-icons/fa6";

const CartIcon = ({ items }) => {
  return (
    <div className="fixed top-[15vh] right-4 border-1 p-2 rounded-full">
      <FaCartShopping className="text-3xl text-white hover:text-gray-300 cursor-pointer relative" />
      <span className="absolute flex justify-center items-center top-0 right-0 translate-x-1/3 -translate-y-1/3 bg-green-500 text-white rounded-full p-1 w-5 h-5">
        {items}
      </span>
    </div>
  );
};

export default CartIcon;
