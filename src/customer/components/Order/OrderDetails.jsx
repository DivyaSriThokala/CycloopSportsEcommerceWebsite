import React, { useEffect } from 'react'
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { Grid } from '@mui/material';
import OrderSummaryCartItems from '../OrderSummary/OrderSummaryCartItems';
import { useParams } from 'react-router';
import { getOrderById } from '../../../State/Order/Action';
import { useDispatch, useSelector } from 'react-redux';

const OrderDetails = () => {

    //get the order from the orderId in the url
    //and map those elements
    const param = useParams();
    const orderId = param.orderId;
    console.log(orderId);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getOrderById(orderId))
    }, [orderId])
    const { order } = useSelector(store => store);
    console.log("order Id detail", order);
    const status = order.order?.orderStatus;
    const steps = [
        'Order Confirmed',
        'Shipped',
        'Delivered'
    ];


    let activeStep = 1;
    if (order.order?.orderStatus === 'SHIPPED') {
        activeStep = 2;
    } else if (order.order?.orderStatus === 'DELIVERED') {
        activeStep = 3;
    }



    const currentDate = new Date();
    const formattedDate = `${currentDate.getMonth() + 1}/${currentDate.getDate()}/${currentDate.getFullYear()}`;
    console.log(formattedDate);


    return (
        <div className='m-10'>
            <div>
                <h1 className='text-left text-2xl font-bold'>Order ID: {orderId}</h1>
                <div className='flex pt-5 '>
                    <div className='text-xs mt-2'><p>Order date:<b>{order.order?.orderDate}</b></p></div>
                    <div className='pl-8 pr-3'>
                        <LocalShippingIcon />
                    </div>
                    <div className='text-xs mt-2'>
                        {true && <p className='text-green-500'>Estimated Delivery: {formattedDate} </p>
                        }
                        {false && <p className='text-green-500'>Delievred On: May 16, 2022 </p>

                        }

                    </div>
                </div>
            </div>
            <div className='p-5 mt-10'>
                <Box sx={{ width: '100%' }}>
                    <Stepper activeStep={activeStep} alternativeLabel>
                        {steps.map((label) => (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                </Box>

            </div>
            <Grid container spacing={4} className='pt-10'>
                <Grid xs={12} lg={5} className='p-10 pb-10'>
                    <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)' }} className='border rounded-e-md shadow-md h-[10rem]  mb-20'>
                        {order.order?.orderItems.map((item) => <OrderSummaryCartItems item={item} />)}

                    </div>
                </Grid>
                <Grid item xs={12} lg={7}>
                    <Box className="border rounded-s-md shadow-md p-5 mx-20" style={{ backgroundColor: 'rgba(255, 255, 255, 10)', overflow: 'hidden' }}>
                        <Grid container spacing={4} >
                            <Grid item xs={12} lg={4} >
                                <h4 className='text-left font-semibold'>Payment</h4>
                                <p className='text-left text-xs'>Payment done by COD</p>
                            </Grid>
                            <Grid item xs={12} lg={8}>
                                <h4 className='text-left font-semibold '>Address</h4>
                                <p className='text-left '> <b>{order.order?.shippingAddress.firstName} {order.order?.shippingAddress.lastName}</b>, {order.order?.shippingAddress.streetAddress}, {order.order?.shippingAddress.city}, {order.order?.shippingAddress.state}, {order.order?.shippingAddress.mobile}</p>
                            </Grid>

                        </Grid>

                    </Box>
                </Grid>
            </Grid>
        </div>
    )
}

export default OrderDetails