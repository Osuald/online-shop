import { FaXmark } from "react-icons/fa6";

const Cart = ({ cartItems, onRemove, onClose, onClearAll, itemsCount }) => {
  return (
    <div className="fixed top-[15vh] h-fit right-4 z-50 flex flex-col border-3 rounded-2xl  bg-gray-600">
      <div className=" flex  flex-col max-h-[75vh] max-w-[25vw] overflow-y-auto gap-4 p-4">
        <div className="flex justify-between">
          <p>Your Cart ({itemsCount})</p>
          <button
            className="self-end cursor-pointer text-white hover:text-gray-300"
            onClick={onClose}
          >
            <FaXmark className="text-2xl border-1 bg-red-500 hover:bg-red-700 rounded-lg p-1" />
          </button>
        </div>

        {cartItems.length === 0 ? (
          <>
            <p>Your Cart is empty </p>
          </>
        ) : (
          <>
            {cartItems.map(
              (item) =>
                item.quantity > 0 && (
                  <div
                    key={item.title}
                    className="flex  border-1 rounded-lg p-2 items-center justify-between bg-gray-500"
                  >
                    <p className="mr-4 text-sm">{item.title}</p>
                    <p className="mr-4">{item.quantity}</p>
                    <button
                      className="cursor-pointer bg-red-500 border-2 rounded-full p-1 hover:bg-red-600 hover:font-semibold"
                      onClick={() => onRemove(item)}
                    >
                      <FaXmark />
                    </button>
                  </div>
                )
            )}
            <div className="flex justify-between ">
              <button className="border-1 bg-gray-700 text-sm rounded-full hover:bg-gray-800 cursor-pointer font-bold p-2">
                Checkout
              </button>
              <button
                onClick={onClearAll}
                className="border-1 bg-gray-700 text-sm rounded-full hover:bg-gray-800 font-semibold p-2 cursor-pointer"
              >
                Clear All
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
export default Cart;
