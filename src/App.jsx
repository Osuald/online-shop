// App.jsx
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import CircularLoadingIndicator from "./components/CircularLoadingIndicator";
import About from "./pages/About";

function App() {
  const [loading, setLoading] = useState(true);

  // This effect handles the initial full-app loading delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Signal that the delay is over
    }, 1000);

    return () => clearTimeout(timer); // Cleanup function
  }, []);

  // Show the full-page loader until the initial delay is over
  if (loading) {
    return (
      <div className="bg-gray-900 text-white p-10 text-center border rounded-lg h-screen flex justify-center items-center">
        <CircularLoadingIndicator />
      </div>
    );
  }

  // Once loading is complete, render the full application
  return (
    <div className="relative  bg-gray-700 text-white min-h-screen">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
