import React, { useState, useEffect } from 'react';
import Offer from '../components/Offer';
import Todaysoff from '../components/Todaysoff';
import Card from '../components/Card';
import axios from 'axios';

const Product = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get('https://dummyjson.com/products')
      .then((res) => setProducts(res.data.products))
      .catch((err) => console.log('kuch to gadbad hai daya'));
  }, []); // ✅ Runs only once when the component mounts

  return (
    <>
      <Offer />
      <Todaysoff />
      <div className="text-center">
            <h1 className="text-teal-300 font-bold text-5xl m-10">All Products</h1>
        </div>
      <div className="flex flex-wrap justify-center gap-4" id="products">
        {products.map((item, i) => (
          <Card data={item} key={i} />
        ))}
      </div>
    </>
  );
};

export default Product;
