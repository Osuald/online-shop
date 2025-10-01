import { FaXmark } from "react-icons/fa6";

const Cart = ({ cartItems, onRemove, onClose }) => {
  return (
    <div className="fixed top-[15vh] h-fit right-4 z-50 flex flex-col border-3 rounded-lg  bg-gray-600">
      <div className=" flex  flex-col max-h-[75vh] max-w-[25vw] overflow-y-auto gap-4 p-4">
        <button
          className="self-end cursor-pointer text-white hover:text-gray-300"
          onClick={onClose}
        >
          <FaXmark className="text-2xl" />
        </button>
        {cartItems.length === 0 ? (
          <p>Your Cart is empty </p>
        ) : (
          <>
            <p>Your Cart ( {cartItems.length} )</p>
            {cartItems.map((item) => (
              <div
                key={item.title}
                className="flex  border-2 rounded-lg p-2 items-center justify-between bg-gray-500"
              >
                <p className="mr-4">{item.title}</p>
                <p className="mr-4">{item.quantity}</p>
                <button
                  className="cursor-pointer bg-red-300 border-2 rounded-full p-1 hover:bg-red-400 hover:font-semibold"
                  onClick={() => onRemove(item)}
                ></button>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};
export default Cart;
