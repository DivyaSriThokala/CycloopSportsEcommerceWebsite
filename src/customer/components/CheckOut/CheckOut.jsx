import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useLocation, useNavigate } from 'react-router-dom';
import Address from './Address';
import Delivery from './Delivery';
import Payment from './Payment';
import '../Product_Navigation/Product_Navigation.css';
import { Grid } from '@mui/material';
import Cart from '../Cart/Cart';
import CartItem from '../Cart/CartItem';
import OrderSummary from '../OrderSummary/OrderSummary';
import PriceDetails from '../Cart/PriceDetails';
import OrderSummaryCartItems from '../OrderSummary/OrderSummaryCartItems';
import { useEffect } from 'react';
import { getOrderById } from '../../../State/Order/Action';
import { useDispatch, useSelector } from 'react-redux';
import { createPayment } from '../../../State/Payment/Action';


const steps = ['Shipping', 'Delivery', 'Payment'];

export default function CheckOut() {
  const [activeStep, setActiveStep] = React.useState(0);
  const dispatch = useDispatch();
  const location = useLocation();
  const querySearch = new URLSearchParams(location.search)
  const step = querySearch.get("step")
  const navigate = useNavigate();

  // const orderId=querySearch.get("order_id");
  const { order } = useSelector(store => store)
  console.log("step-value", step);
  const { cart } = useSelector(state => state);
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const searchParams = new URLSearchParams(location.search);
  const deliveryType = searchParams.get("deliveryType");


  return (
    <div className='px-10 lg:px-20 pt-20 bg-sea-green'>
      <Grid container spacing={4} className='pt-10'>
        <Grid xs={12} lg={5} className='pb-10'>
          <OrderSummary deliveryType={deliveryType} />



          {/* <div xs={12} lg={5}className='border rounded-e-md shadow-md h-[10rem] overflow-y-scroll '>
              <div   style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)' }}>
              {order.order?.orderItems.map((item)=><CartItem item={item}/>)} 
             
              </div>
              <OrderSummary/>
             </div> */}
        </Grid>
        <Grid item xs={12} lg={7}>
          <Box sx={{ width: '100%' }}>
            <Stepper activeStep={step} sx={{ "& .MuiStepConnector-line": { border: "1px solid #fff" } }}>
              {steps.map((label, index) => {
                const stepProps = {};
                const labelProps = {};
                return (
                  <Step key={label} {...stepProps}>
                    <StepLabel {...labelProps}>{label}</StepLabel>
                  </Step>
                );
              })}
            </Stepper>
            {step === steps.length ? (
              <React.Fragment>
                <Typography sx={{ mt: 2, mb: 1 }}>
                  All steps completed - you&apos;re finished
                </Typography>
              </React.Fragment>
            ) : (
              <React.Fragment>

                <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                  <Button
                    color="inherit"
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    sx={{ mr: 1 }}
                  >
                    Back
                  </Button>
                  <Box sx={{ flex: '1 1 auto' }} />


                </Box>
                <div>
                  {step === "1" ? <Address /> : step === "2" ? <Delivery /> : <Payment />}
                </div>
              </React.Fragment>
            )}
          </Box>


        </Grid>
      </Grid>


    </div>

  );
}