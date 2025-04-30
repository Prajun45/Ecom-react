import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import Rating from '../components/Rating';

const ProductView = () => {
  const { product_id } = useParams();
  const [product, setProduct] = useState({});
  const [qty, setQty] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${product_id}`)
      .then(res => {
        setProduct(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, [product_id]);

  const decreaseQty = () => {
    if (qty > 1) {
      setQty(qty - 1);
    } else {
      Swal.fire({
        title: 'Quantity too low',
        text: 'You must add at least 1 item.',
        icon: 'warning',
        confirmButtonText: 'OK',
      });
    }
  };

  const addToCart = () => {
    const cartItems = JSON.parse(localStorage.getItem('cartItem')) || [];
    const productData = {
      id: product.id,
      title: product.title,
      catagory: product.category,
      price: product.price,
      image: product.images?.[0],
      quantity: qty,
      discount: product.discountPercentage,
    };

    const exists = cartItems.find(item => item.id === product.id);

    if (exists) {
      Swal.fire({
        title: 'Already in Cart',
        text: 'This product is already in your cart.',
        icon: 'info',
        confirmButtonText: 'OK',
      });
    } else {
      cartItems.push(productData);
      localStorage.setItem('cartItem', JSON.stringify(cartItems));
      Swal.fire({
        title: 'Added to Cart',
        text: 'Product has been added to your cart.',
        icon: 'success',
        confirmButtonText: 'OK',
      });
    }
  };

  if (loading) {
    return <div className="text-center py-10 text-gray-500 text-lg">Loading product...</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden md:flex hover:shadow-2xl transition duration-300">
        {/* Product Image */}
        <div className="md:w-1/2 bg-gray-100 flex items-center justify-center p-6">
          {product.images?.length > 0 && (
            <img
              src={product.images[0]}
              alt={product.title}
              className="rounded-xl w-full max-h-[400px] object-contain"
            />
          )}
        </div>

        {/* Product Info */}
        <div className="md:w-1/2 p-8 space-y-4">
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500">
            <Link to="/" className="hover:underline">Home</Link> /
            <Link to="/products" className="hover:underline"> Products</Link> /
            <span className="font-medium"> {product.title}</span>
          </nav>

          <h2 className="text-3xl font-bold text-gray-800">{product.title}</h2>
          <p className="text-gray-500 text-sm capitalize">{product.category}</p>

          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-green-600">Rs. {product.price}</span>
            {product.discountPercentage && (
              <span className="text-sm text-red-500">
                Save {product.discountPercentage}%
              </span>
            )}
          </div>

          {/* Rating */}
          {product.rating && <Rating rating={product.rating} />}

          {/* Quantity Controller */}
          <div className="flex items-center gap-3 pt-3">
            <button onClick={decreaseQty} className="bg-gray-300 hover:bg-gray-400 rounded px-3 py-1 font-bold text-xl">-</button>
            <input
              type="text"
              readOnly
              value={qty}
              className="w-12 text-center border border-gray-300 rounded"
            />
            <button onClick={() => setQty(qty + 1)} className="bg-gray-300 hover:bg-gray-400 rounded px-3 py-1 font-bold text-xl">+</button>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 pt-5">
            <button
              onClick={addToCart}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Add to Cart
            </button>
            <button className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition">
              Buy Now
            </button>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="mt-8 bg-white p-6 rounded-xl shadow">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Description</h3>
        <p className="text-gray-600">{product.description}</p>
      </div>
    </div>
  );
};

export default ProductView;
