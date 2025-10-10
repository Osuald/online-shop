import { useEffect, useState } from "react";

const About = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Get the API base URL from our .env file
    const Url = import.meta.env.VITE_API_URL;

    // Fetch data from the backend
    fetch(`${Url}/`)
      .then((res) => res.text())
      .then((data) => setMessage(data))
      .catch((err) => {
        console.error("Error fetching data:", err);
        setMessage("Failed to connect to backend");
      });
  }, []);

  return (
    <div className="flex flex-col justify-center items-center mt-20 p-4">
      <h1 className="text-3xl font-bold text-center">About Us</h1>
      <p className="text-center mt-4 max-w-2xl">
        This is a simple food ordering application built with React. It allows
        users to browse a menu, add items to their cart, and manage their
        orders.{" "}
        <span className="italic bg-gradient-to-r from-green-500 via-pink-600 to-green-700 bg-clip-text text-transparent font-bold">
          We are always dedicated to giving you the best experience
        </span>
      </p>
      <div className="flex justify-around items-start mt-6 w-full max-w-4xl">
        <h2 className="text-2xl font-semibold mt-6">Features</h2>
        <ul className="list-none list-inside mt-2">
          <li>Browse a variety of food items</li>
          <li>Add items to your cart</li>
          <li>Manage your orders</li>
        </ul>
      </div>
      <div className="mt-8 p-4 border rounded-lg bg-gray-500 w-full max-w-2xl">
        <p className="font-bold">
          This is the message from the backend:{" "}
          <span className="text-cyan-500">{message}</span>
        </p>
      </div>
    </div>
  );
};

export default About;
