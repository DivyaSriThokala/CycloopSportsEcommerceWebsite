import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useSearchParams } from 'react-router-dom';
import { getOrderById } from '../../../State/Order/Action';
import { updatePayment } from '../../../State/Payment/Action';
import { Alert, AlertTitle, Box, Grid, Step, StepLabel, Stepper } from '@mui/material';
import OrderSummaryCartItems from '../OrderSummary/OrderSummaryCartItems';

const PaymentSuccess = () => {


    // useEffect(() => {
    //     dispatch(getOrderById(orderId))
    // }, [orderId])
    const steps = [
        'Order Confirmed',
        'Shipped',
        'Out For Delivery',
        'Shipped'
    ];



    const [paymentId, setPaymentId] = useState();
    const [refernceId, setRefernceId] = useState();
    const [paymentStatus, setPaymentStatus] = useState();
    const { orderId } = useParams();

    console.log("orderId", orderId)

    const dispatch = useDispatch();
    const { order } = useSelector(store => store);

    useEffect(() => {
        const urlParam = new URLSearchParams(window.location.search);
        setPaymentId(urlParam.get("razorpay_payment_link_id"))
        setPaymentStatus(urlParam.get("razorpay_payment_link_status"))

    }, [])

    useEffect(() => {
        const data = { orderId, paymentId };
        dispatch(getOrderById(orderId));
        dispatch(updatePayment(data))
    }, [orderId, paymentId])

    return (
        <div className='px-2 lg:px-36'>
            {order.order?.paymentDetails.status === "PENDING" ? <div> </div> : <div className='flex flex-col justify_center items-center'>
                <Alert variant="filled" severity="success" sx={{ mb: 6, width: "fit-content" }}>
                    <AlertTitle>Payment Success</AlertTitle>
                    Congratulations! your order get placed
                </Alert>
            </div>}

            <div>
                <div className='p-5 mt-10'>
                    <Box sx={{ width: '100%' }}>
                        <Stepper activeStep={1} alternativeLabel>
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
                        <Box className="border rounded-s-md shadow-md p-5 mx-10" style={{ backgroundColor: 'rgba(255, 255, 255, 10)', overflow: 'hidden' }}>
                            <Grid container spacing={4} >
                                <Grid item xs={12} lg={4} >
                                    <h4 className='text-left font-semibold'>Payment</h4>

                                    {order.order?.paymentDetails.status === "PENDING" ? <p className='text-left text-xs'>Payment Type selected as COD</p> : <p className='text-left text-xs'>Payment done by UPI</p>}

                                </Grid>
                                <Grid item xs={12} lg={8}>
                                    <h4 className='text-left font-semibold '>Address</h4>
                                    <div>
                                        <p className='text-left '>{order.order?.shippingAddress.firstName} {order.order?.shippingAddress.lastName}, {order.order?.shippingAddress.streetAddress} {order.order?.shippingAddress.city} {order.order?.shippingAddress.zipCode} {order.order?.shippingAddress.state},Mobile Number:{order.order?.shippingAddress.mobile}</p>
                                    </div>

                                </Grid>

                            </Grid>

                        </Box>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default PaymentSuccess