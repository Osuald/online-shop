// src/pages/Home.jsx
import { useState, useEffect } from "react";
import CircularLoadingIndicator from "../components/CircularLoadingIndicator";
import Cart from "../components/cart";
import { FaPlus, FaMinus } from "react-icons/fa";

export default function Home() {
  const [cartItems, setCartItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [images, setImages] = useState([]);

  // Add item (or increase quantity if already in cart)
  const handleOrder = (img) => {
    setCartItems((prevItems) => {
      const existing = prevItems.find((item) => item.title === img.title);
      if (existing) {
        return prevItems.map((item) =>
          item.title === img.title
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevItems, { ...img, quantity: 1 }];
    });
  };

  // Decrease quantity or remove if reaches 0
  const handleDecrease = (img) => {
    setCartItems((prevItems) => {
      return prevItems
        .map((item) =>
          item.title === img.title
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0); // remove if 0
    });
  };

  // Fetch users (menu items)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const productRes = await fetch(
          "https://dummyjson.com/products?limit=20"
        );
        const productData = await productRes.json();
        setImages(productData.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  if (isLoading) {
    return (
      <div className="bg-gray-900 text-white p-10 text-center border rounded-lg h-screen flex justify-center items-center">
        <CircularLoadingIndicator />
      </div>
    );
  }

  return (
    <div className="relative text-white p-10 top-20 text-center ">
      <div>
        <h1 className="text-2xl font-bold mb-8">Discover Our Menu</h1>
      </div>

      <div className="flex justify-center gap-8 items-center mb-4 flex-wrap">
        {images.map((img) => {
          const cartItem = cartItems.find((item) => item.title === img.title);
          return (
            <div
              key={img.id}
              className="bg-cover bg-center p-4 rounded-lg w-60 h-60 shadow-lg flex flex-col justify-between"
              style={{ backgroundImage: `url(${img.thumbnail})` }}
            >
              <div className="relative z-10">
                <p>{img.title}</p>
              </div>

              {/* Order Button / Quantity Controls */}
              {cartItem ? (
                <div className="flex items-center justify-center gap-3">
                  <button
                    onClick={() => handleDecrease(img)}
                    className=" cursor-pointer px-2 py-1 bg-gray-700 rounded-full hover:bg-gray-800"
                  >
                    <FaMinus />
                  </button>
                  <span>{cartItem.quantity}</span>
                  <button
                    onClick={() => handleOrder(img)}
                    className="cursor-pointer px-2 py-1 bg-gray-700 rounded-full hover:bg-gray-800"
                  >
                    <FaPlus />
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => handleOrder(img)}
                  className="px-3 py-2 text-xs font-semibold text-white bg-gray-800 rounded-2xl shadow-lg hover:bg-gray-900"
                >
                  Order Now
                </button>
              )}
            </div>
          );
        })}
      </div>

      {/* Cart */}
      <div className="flex flex-col items-center justify-center right-0 bg-gray-700 rounded-lg ">
        <Cart cartItems={cartItems} onRemove={handleDecrease} />
      </div>
    </div>
  );
}
