import { Box, Button } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router'
import { getOrderById } from '../../../State/Order/Action';
import { createPayment } from '../../../State/Payment/Action';

const Payment = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  //const { order } = useSelector(store => store)
  //const orderId = order.order?.id;
  const location = useLocation();
  const querySearch = new URLSearchParams(location.search)
  const orderId = querySearch.get("order_Id");



  useEffect(() => {
    dispatch(getOrderById(orderId));
  }, [orderId])

  
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const personalDetails = {
      paymentType: data.get("paymentType")
    }
    console.log(personalDetails);
   
    if(personalDetails.paymentType==="pod"){
      navigate(`/payment/${orderId}`);
    }
    else{
       navigate(`/checkout/?step=3&order_Id=${orderId}`);
       dispatch(createPayment(orderId));
    }
    

  }



  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Box className="border rounded-s-md shadow-md p-5 mx-20" style={{ backgroundColor: 'rgba(255, 255, 255, 10)' }}>
          <h1 className='text-left font-bold pb-4'>Delivery Options</h1>
          {/* <div className='flex flex-col justify-start items-start'></div> */}
          <div className='flex justify-between w-full p-3'>
            <div className='flex flex-col justify-start items-start'>
              <div >
                <input type="radio" id="pod" name="paymentType" value="pod" />
                <label className='px-2 font-bold' for='pod'>Pay On Delivery</label>
              </div>
              <p className='pl-6 text-sm'>Pay with cash on delivery</p>
            </div>
          </div>
          <div className='flex justify-between w-full p-3'>
            <div className='flex flex-col justify-start items-start'>
              <div >
                <input type="radio" id="upi" name="paymentType" value="upi" />
                <label className='px-2 font-bold' for='upi'>Scan UR Code and Pay</label>
              </div>
              <h6 className='pl-6 text-sm'>Make Payment Through Gpay,Paytm,Phonepe</h6>
            </div>
            <div className='flex'>
              <div className='w-[8rem] h-[3rem]' style={{ backgroundColor: 'white' }}>
                <img style={{ backgroundColor: 'white' }} className='e-full h-full object-cover object-full' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSySKclNigk-ebYYVUVi_syhuoC-EpEW7To_Q&usqp=CAU' alt="" />
              </div>

            </div>

          </div>
        </Box>
        <div style={{ display: 'flex', justifyContent: 'flex-end' }} className='p-5 px-20'>
          <Button variant="contained"
            type='submit' sx={{ px: "2.5rem", py: "0.5rem" }}>Pay Amount</Button>
        </div>
      </form>
    </div>
  )
}

export default Payment