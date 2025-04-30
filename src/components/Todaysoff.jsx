import React, { useState, useEffect } from "react";
import Card from "./Card";
import axios from "axios";

const Todaysoff = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 20,
    minutes: 40,
    seconds: 24,
  });

  // Fetch products from API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("https://dummyjson.com/products");
        setProducts(res.data.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  // Flash sale countdown timer
  useEffect(() => {
    const countdown = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, minutes, seconds } = prev;
        if (seconds > 0) {
          seconds -= 1;
        } else if (minutes > 0) {
          minutes -= 1;
          seconds = 59;
        } else if (hours > 0) {
          hours -= 1;
          minutes = 59;
          seconds = 59;
        } else if (days > 0) {
          days -= 1;
          hours = 23;
          minutes = 59;
          seconds = 59;
        }
        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(countdown);
  }, []);

  return (
    <div className="bg-gray-900 text-white p-6 rounded-xl shadow-lg">
      {/* Section Title */}
      <h2 className="text-red-500 text-2xl font-bold flex items-center">
        <span className="mr-2 text-3xl">⏳</span> Today's Flash Sales
      </h2>

      {/* Countdown Timer */}
      <div className="flex justify-center space-x-6 text-center my-4">
        {Object.entries(timeLeft).map(([key, value]) => (
          <div key={key} className="bg-gray-800 px-4 py-2 rounded-lg">
            <span className="text-3xl font-bold text-yellow-400">
              {String(value).padStart(2, "0")}
            </span>
            <br />
            <span className="text-sm text-gray-400 capitalize">{key}</span>
          </div>
        ))}
      </div>

      {/* Display Products or Loading Message */}
      {loading ? (
        <p className="text-center text-gray-400">Loading products...</p>
      ) : (
        <div className="flex flex-wrap justify-center gap-6 mt-4">
          {products.slice(0, 4).map((item, i) => (
            <Card data={item} key={i} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Todaysoff;

