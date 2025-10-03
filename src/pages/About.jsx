import React from "react";

const About = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-20 p-4">
      <h1 className="text-3xl font-bold text-center">About Page</h1>
      <p className="text-center mt-4">
        This is a simple food ordering application built with React. It allows
        users to browse a menu, add items to their cart, and manage their
        orders.{" "}
        <span>We are always dedicated to giving you the best experience</span>
      </p>
      <div>
        <h2 className="text-2xl font-semibold mt-6">Features</h2>
        <ul className="list-disc list-inside mt-2">
          <li>Browse a variety of food items</li>
          <li>Add items to your cart</li>
          <li>Manage your orders</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
