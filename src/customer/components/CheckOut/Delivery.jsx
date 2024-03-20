import { Box, Button, FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup, TextField } from '@mui/material'
import React from 'react'
import { useLocation, useNavigate } from 'react-router';

const Delivery = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const querySearch = new URLSearchParams(location.search)
  const orderId = querySearch.get("order_Id");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Address ")
    const data = new FormData(e.currentTarget);

    const personalDetails = {

      deliveryType: data.get("deliveryType")
    }
    console.log(personalDetails);

    navigate(`/checkout/?step=3&order_Id=${orderId}`);
  }


  return (
    <div className='mb-10' >
      <form onSubmit={handleSubmit}>
        <div>

          <Box className="border rounded-s-md shadow-md p-5 mx-20" style={{ backgroundColor: 'rgba(255, 255, 255, 10)' }}>
            <h1 className='text-left font-bold pb-4'>Delivery Options</h1>
            <div className='flex flex-col justify-start items-start'>
              <div className='flex justify-between w-full p-3'>
                <div>
                  <input type="radio" id="standard_delivery" name="deliveryType" value="standard" />
                  <label className='px-2' for='standard_delivery'>Standard 5-7 business days</label>
                </div>

                <div>Free</div>
              </div>
              <div className='flex justify-between w-full p-3'>
                <div>
                  <input type="radio" id="basic_delivery" name="deliveryType" value="basic_delivery" />
                  <label className='px-2' for='basic_delivery'>2-4 business days</label>
                </div>

                <div>Rs.50</div>
              </div>
              <div className='flex justify-between w-full p-3'>
                <div>
                  <input type="radio" id="premeium_delivery" name="deliveryType" value="premeium_delivery" />
                  <label className='px-2' for='premeium_delivery'>Same day Delivery</label>
                </div>

                <div>Rs.100</div>
              </div>
            </div>

          </Box>
          <div style={{ display: 'flex', justifyContent: 'flex-end' }} className='p-5 px-20'>
            <Button variant="contained" type='submit' sx={{ px: "2.5rem", py: "0.5rem" }}>Continue</Button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Delivery