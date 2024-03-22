import React from 'react'
import { Route, Routes } from 'react-router'
import Cart from '../customer/components/Cart/Cart'
import Product_Navigation from '../customer/components/Product_Navigation/Product_Navigation'
import Product from '../customer/components/Product/Product'
import ProductDetails from '../customer/components/ProductDetails/ProductDetails'
import CheckOut from '../customer/components/CheckOut/CheckOut'
import OrderDetails from '../customer/components/Order/OrderDetails'
import Order from '../customer/components/Order/Order'
import Signup from '../customer/components/Signup/Signup'
import Login from '../customer/components/Login/Login'
import ProductHomePage from '../customer/components/Pages/HomePage/ProductHomePage'
import ProductMain from '../customer/components/ProductMain/ProductMain'
import HomePage from '../customer/components/HomePage/HomePage'
import PaymentSuccess from '../customer/components/Payment/PaymentSuccess'

const CustomerRouters = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Signup />} ></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/HomePage' element={<HomePage />}></Route>
        <Route path='/productsHomePage' element={<ProductMain />}></Route>
        <Route path='/:lavelOne/:lavelTwo/:lavelThree' element={<Product />}></Route>
        <Route path='/product/:productId' element={<ProductDetails />}></Route>
        <Route path='/cart' element={<Cart />}></Route>
        <Route path='/checkout' element={<CheckOut />}></Route>
        <Route path='/account/order' element={<Order />}></Route>
        <Route path='/account/order/:orderId' element={<OrderDetails />}></Route>
        <Route path='/payment/:orderId' element={<PaymentSuccess />}></Route>
      </Routes>
    </div>
  )
}

export default CustomerRouters