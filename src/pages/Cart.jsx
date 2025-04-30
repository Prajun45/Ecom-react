import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

const Cart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem('cartItem')) || [];
    setCart(cartItems);
  }, []);

  const updateQuantity = (id, quantity) => {
    if (quantity < 1) return;
    const updatedCart = cart.map(item =>
      item.id === id ? { ...item, quantity } : item
    );
    setCart(updatedCart);
    localStorage.setItem('cartItem', JSON.stringify(updatedCart));
  };

  const removeItem = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You want to remove this item?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        const newCart = cart.filter(item => item.id !== id);
        setCart(newCart);
        localStorage.setItem('cartItem', JSON.stringify(newCart));
        Swal.fire('Removed!', 'Item has been removed.', 'success');
      }
    });
  };

  const getTotal = () => cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const getGrandTotal = () => cart.reduce((acc, item) => {
    const discount = item.price * (item.discount || 0) / 100;
    return acc + (item.price - discount) * item.quantity;
  }, 0);

  return (
    <div className="min-h-screen p-6 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {
        cart.length === 0 ? (
          <div className="text-center mt-20">
            <h1 className="text-4xl font-bold mb-4">Your Cart is Empty</h1>
            <img src="https://img.freepik.com/free-photo/person-shopping_1048-1695.jpg" alt="Empty Cart" className="mx-auto w-72" />
            <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-full">Continue Shopping</button>
          </div>
        ) : (
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-semibold text-center mb-8">Your Cart</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-2 space-y-4">
                {
                  cart.map((item, i) => (
                    <div key={item.id} className="flex items-center bg-gray-800 p-4 rounded-lg shadow-lg">
                      <img src={Array.isArray(item.image) ? item.image[0] : item.image} alt={item.title} className="w-24 h-24 object-cover rounded mr-4" />
                      <div className="flex-grow">
                        <h4 className="text-xl font-semibold">{item.title}</h4>
                        <p className="text-sm text-gray-400">{item.catagory}</p>
                        <p className="mt-1">${item.price} x {item.quantity}</p>
                        <div className="flex items-center mt-2">
                          <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="px-2 py-1 bg-gray-700 rounded">-</button>
                          <span className="mx-3">{item.quantity}</span>
                          <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="px-2 py-1 bg-gray-700 rounded">+</button>
                        </div>
                      </div>
                      <button onClick={() => removeItem(item.id)} className="text-red-500 ml-4"><i className="bi bi-trash"></i></button>
                    </div>
                  ))
                }
              </div>

              <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-4">Cart Summary</h3>
                <p className="mb-2">Total Items: <span className="text-green-400 font-bold">{cart.reduce((acc, item) => acc + item.quantity, 0)}</span></p>
                <p className="mb-2">Total Price: <span className="text-green-400 font-bold">${getTotal().toFixed(2)}</span></p>
                <p className="mb-2">Discount: <span className="text-yellow-300 font-bold">{cart.reduce((acc, item) => acc + (item.discount || 0), 0)}%</span></p>
                <p className="mb-4">Grand Total: <span className="text-red-400 font-bold">${getGrandTotal().toFixed(2)}</span></p>
                <button className="w-full bg-green-600 hover:bg-green-700 py-2 rounded text-white font-bold">Proceed to Checkout</button>
              </div>
            </div>
          </div>
        )
      }
    </div>
  );
};

export default Cart;
