import React, { useEffect } from 'react'
import CartItem from './CartItem'
import { Button } from '@mui/material'
import PriceDetails from './PriceDetails'
import { useNavigate } from 'react-router'
import Product_Navigation from '../Product_Navigation/Product_Navigation'
import Footer from '../Footer/Footer'
import { useDispatch, useSelector } from 'react-redux'
import { getCart } from '../../../State/Cart/Action'

const Cart = () => {
    const navigate=useNavigate();
    const {cart} =useSelector(store=>store);
    const dispatch=useDispatch();
    const handleCheckOut=()=>{
         navigate("/checkout/?step=1");
    }
 
    useEffect(()=>{
        dispatch(getCart())
    },[cart.updateCartItem,cart.deleteCartItem])

    return (
        <div>
            <Product_Navigation/>
            <div className='lg:grid grid-cols-3 lg:px-16 lg:py-10 relative'>
                <div className='col-span-2 '>
                   {cart.cart?.cartItems.map((item)=><CartItem item={item}/>)} 
                </div>
                <div className='px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0'>
                <div className='border'>
                        <p className='uppercase font-bold opacity-60 pb-4'>Price Details</p>
                        <hr />
                        <div className='space-y-3 mb-10 font-semibold'>
                            <div className='flex justify-between pt-3 text-black'>
                                <span>Price</span>
                                <span>{cart.cart?.totalPrice}/-</span>
                            </div>
                            <div className='flex justify-between pt-3 '>
                                <span>Discount</span>
                                <span className='text-green-600'>-{cart.cart?.discount}/-</span>
                            </div>
                            <div className='flex justify-between pt-3 '>
                                <span>Delivery Charge</span>
                                <span className='text-green-600'>Free</span>
                            </div>
                            <div className='flex justify-between pt-3  font-bold'>
                                <span>Total Amount</span>
                                <span className='text-green-600'>{cart.cart?.totalDiscountedPrice}</span>
                            </div>
                        </div>
                        <div className='mt-4 flex justify-start'>
                            <Button onClick={handleCheckOut} variant="contained"   sx={{ px: "2.5rem", py: "0.5rem" }}>CheckOut</Button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Cart