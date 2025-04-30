import React from 'react'
import{ Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import Homepage from './pages/Homepage'
import Layout from './pages/Layout'
import Product from './pages/Product'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Cart from './pages/Cart'
import ProductView from './pages/ProductView'

const Myroute = () => {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Layout />} >
        <Route index element={<Homepage />} />
        <Route path='/product' element={<Product />} />
        <Route path='/productview/:product_id' element={<ProductView />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        </Route>
      </Routes>
    </Router>
      
    </>
  )
}

export default Myroute
