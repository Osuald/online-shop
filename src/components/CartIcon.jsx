import React from "react";
import { FaCartShopping } from "react-icons/fa6";

const CartIcon = () => {
  return (
    <div className="fixed top-[15vh] right-4 border-1 p-2 rounded-full">
      <FaCartShopping className="text-3xl text-white hover:text-gray-300 cursor-pointer relative" />
    </div>
  );
};

export default CartIcon;
