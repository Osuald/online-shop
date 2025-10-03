import { useState, useEffect } from "react";
import CircularLoadingIndicator from "../components/CircularLoadingIndicator";
import Cart from "../components/Cart";
import RevealOnScroll from "../components/RevealOnScroll";
import CartIcon from "../components/CartIcon";
import { FaPlus, FaMinus, FaShoppingCart } from "react-icons/fa";

export default function Home() {
  const [cartItems, setCartItems] = useState(() => {
    const saved = sessionStorage.getItem("cartItems");
    return saved ? JSON.parse(saved) : [];
  });
  const [isLoading, setIsLoading] = useState(true);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [shopItems, setShopItems] = useState([]);

  // derived count
  const itemsCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  // Load cart from sessionStorage at mount
  useEffect(() => {
    const savedCart = sessionStorage.getItem("cartItems");
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, []);

  // Save cart to sessionStorage whenever it changes
  useEffect(() => {
    sessionStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  // Add item (or increase quantity if exists)
  const handleOrder = (shopItem) => {
    setCartItems((prevItems) => {
      const existing = prevItems.find((item) => item.title === shopItem.title);
      if (existing) {
        return prevItems.map((item) =>
          item.title === shopItem.title
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevItems, { ...shopItem, quantity: 1 }];
    });
  };

  // Decrease or remove
  const handleDecrease = (shopItem) => {
    setCartItems((prevItems) =>
      prevItems
        .map((item) =>
          item.title === shopItem.title
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const handleRemove = (shopItem) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.title !== shopItem.title)
    );
  };

  // Fetch products
  useEffect(() => {
    const fetchData = async () => {
      try {
        const productRes = await fetch(
          "https://dummyjson.com/products?limit=20"
        );
        const productData = await productRes.json();
        setShopItems(productData.products);
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
    <div className="relative text-white p-10 top-20 text-center">
      {!isCartOpen && (
        <div
          onClick={() => setIsCartOpen(!isCartOpen)}
          className="absolute top-4 right-4 cursor-pointer"
        >
          <CartIcon items={itemsCount} />
        </div>
      )}

      <h1 className="text-2xl font-bold mb-8">Discover Our Menu</h1>

      {/* Product grid */}
      <div className="flex w-[1200px] max-w-full justify-center gap-8 items-center mb-4 flex-wrap">
        {shopItems.map((shopItem, i) => {
          const cartItem = cartItems.find(
            (item) => item.title === shopItem.title
          );
          return (
            <RevealOnScroll key={shopItem.id} custom={i}>
              <div className="bg-cover bg-center p-4 rounded-lg w-[240px] max-w-full bg-gray-800 shadow-xl cursor-pointer hover:scale-103 transition duration-200 flex flex-col justify-between">
                <div className="relative z-10">
                  <p>{shopItem.title}</p>
                </div>
                <div>
                  <img src={shopItem.thumbnail} alt={shopItem.title} />
                </div>

                {/* Order Button / Quantity Controls */}
                {cartItem ? (
                  <div className="flex items-center justify-center gap-2 bg-gray-800 rounded-2xl py-2">
                    <button
                      onClick={() => handleDecrease(shopItem)}
                      className="cursor-pointer px-1 py-1 border-1 bg-gray-700 rounded-full hover:bg-gray-800"
                    >
                      <FaMinus />
                    </button>
                    <span>{cartItem.quantity}</span>
                    <button
                      onClick={() => handleOrder(shopItem)}
                      className="cursor-pointer px-1 py-1 border-1 bg-gray-700 rounded-full hover:bg-gray-800"
                    >
                      <FaPlus />
                    </button>
                  </div>
                ) : (
                  <div className="flex justify-between gap-2 items-center">
                    <p className=" text-sm font-semibold text-red-400">
                      ${shopItem.price}
                    </p>
                    <button
                      onClick={() => handleOrder(shopItem)}
                      className="flex items-center justify-center gap-2 py-2 px-4 cursor-pointer text-white bg-gray-700 rounded-2xl shadow-lg hover:bg-gray-900"
                    >
                      <FaShoppingCart /> Add to Cart
                    </button>
                  </div>
                )}
              </div>
            </RevealOnScroll>
          );
        })}
      </div>

      {/* Cart */}
      {isCartOpen && (
        <div className="flex flex-col items-center justify-center right-0 bg-gray-700 rounded-lg">
          <Cart
            cartItems={cartItems}
            onRemove={handleRemove}
            onClose={() => setIsCartOpen(false)}
            onClearAll={() => setCartItems([])}
            itemsCount={itemsCount}
          />
        </div>
      )}
    </div>
  );
}
