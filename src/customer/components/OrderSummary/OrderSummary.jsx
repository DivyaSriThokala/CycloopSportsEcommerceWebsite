import React, { useEffect } from 'react'
import OrderSummaryCartItems from './OrderSummaryCartItems'
import PriceDetails from '../Cart/PriceDetails'
import { Button } from '@mui/material'
import { getOrderById } from '../../../State/Order/Action'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router'

const OrderSummary = () => {
  const dispatch=useDispatch();
  const location=useLocation();
  const seacrhParams=new URLSearchParams(location.search);
  
  const {order}=useSelector(store=>store)
  const {cart}=useSelector(store=>store)
  console.log("cart data:",cart);
   console.log("Order data:",order)

// useEffect(()=>{
//    dispatch(getOrderById(orderId))
// },[orderId])


  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const giftCard={
        giftcardNo:data.get("giftCard")
    }
      console.log(giftCard);
  }
  return (
    <div>
      <form onClick={handleSubmit}>
      <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)' }} className='border rounded-e-md shadow-md h-[10rem] overflow-y-scroll mb-20'>
              {cart.cart?.cartItems.map((item) => <OrderSummaryCartItems item={item}/>)}

            </div>
            <div className='flex text-left pb-5 '>
            <input  type="text"  placeholder="Gift card/Discount Code" name="giftCard" style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' , width: '75%',marginRight: '5px' }} />
            <div className='flex-grow  pl-5'>
            <Button type='submit' variant='contained'> Apply</Button>
            </div>
           
            </div>
            <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)' }}  >
              <div className='p-4'>
            
              <PriceDetails/>
              </div>
             
            </div>
      </form>
           
          </div>
  )
}

export default OrderSummary