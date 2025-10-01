// src/pages/Home.jsx
import { useState, useEffect } from "react";
import CircularLoadingIndicator from "../components/CircularLoadingIndicator";
import Cart from "../components/cart";
import RevealOnScroll from "../components/RevealOnScroll";
import CartIcon from "../components/CartIcon";
import { FaPlus, FaMinus, FaShoppingCart } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

export default function Home() {
  const [cartItems, setCartItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isCartOpen, setIsCartOpen] = useState(false);
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
      {!isCartOpen && (
        <div
          onClick={() => setIsCartOpen(!isCartOpen)}
          className="absolute top-4 right-4"
        >
          <CartIcon />
        </div>
      )}

      <div>
        <h1 className="text-2xl font-bold mb-8">Discover Our Menu</h1>
      </div>

      <div className="flex justify-center gap-8 items-center mb-4 flex-wrap">
        {images.map((img, i) => {
          const cartItem = cartItems.find((item) => item.title === img.title);
          return (
            <RevealOnScroll key={img.id || img.name} custom={i}>
              <div
                key={img.id}
                className="bg-cover bg-center p-4 rounded-lg bg-gray-800 shadow-xl flex flex-col justify-between"
              >
                <div className="relative z-10">
                  <p>{img.title}</p>
                </div>
                <div>
                  <img src={img.thumbnail} alt="Product image" />
                </div>
                {/* Order Button / Quantity Controls */}
                {cartItem ? (
                  <div className="flex items-center justify-center gap-2 bg-gray-800 rounded-2xl py-2">
                    <button
                      onClick={() => handleDecrease(img)}
                      className=" cursor-pointer px-1 py-1 border-1 bg-gray-700 rounded-full hover:bg-gray-800"
                    >
                      <FaMinus />
                    </button>
                    <span>{cartItem.quantity}</span>
                    <button
                      onClick={() => handleOrder(img)}
                      className="cursor-pointer px-1 py-1 border-1 bg-gray-700 rounded-full hover:bg-gray-800"
                    >
                      <FaPlus />
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => handleOrder(img)}
                    className="flex items-center justify-center gap-2 py-2 cursor-pointer font-semibold text-white bg-gray-800 rounded-2xl shadow-lg hover:bg-gray-900"
                  >
                    <FaShoppingCart /> Add to Cart
                  </button>
                )}
              </div>
            </RevealOnScroll>
          );
        })}
      </div>
      {}

      {isCartOpen && (
        <div className="flex flex-col items-center justify-center right-0 bg-gray-700 rounded-lg ">
          <Cart
            cartItems={cartItems}
            onRemove={handleDecrease}
            onClose={() => setIsCartOpen(false)}
          />
        </div>
      )}
    </div>
  );
}
