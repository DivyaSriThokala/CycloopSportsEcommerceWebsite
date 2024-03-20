import { Button } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'

const PriceDetails = () => {
    const {cart}=useSelector(store=>store)
  return (
    <div>
        <div className='border'>
                        <p className='uppercase font-bold opacity-60 pb-4'>Price Details</p>
                        <hr />
                        <div className='space-y-3 mb-10 font-semibold'>
                            <div className='flex justify-between pt-3 text-black'>
                                <span>Sub Total</span>
                                <span>{cart.cart?.totalPrice}/-</span>
                            </div>
                            <div className='flex justify-between pt-3 text-black'>
                                <span>Sales Tax(6.5%)</span>
                                <span>57/- </span>
                            </div>
                            <div className='flex justify-between pt-3 '>
                                <span>Discount</span>
                                <span className='text-green-600'>-{cart.cart?.discount}/- </span>
                            </div>
                            <div className='flex justify-between pt-3 '>
                                <span>Delivery Charge</span>
                                <span className='text-green-600'>Free</span>
                            </div>
                            <div className='flex justify-between pt-3  font-bold'>
                                <span>Total Amount</span>
                                {/* +57tax */}
                                <span className='text-green-600'>{cart.cart?.totalDiscountedPrice+0}/-</span>
                            </div>
                        </div>
                        
                    </div>
    </div>
  )
}

export default PriceDetails


        