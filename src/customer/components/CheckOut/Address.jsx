import { Box, Button, Grid, TextField } from '@mui/material'
import React from 'react'
import './Address.css';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { createOrder } from '../../../State/Order/Action';

const DeliveryAddressForm = () => {
      const dispatch = useDispatch();
      const navigate = useNavigate();

      const handleSubmit = (e) => {
            e.preventDefault();
            console.log("Address ")
            const data = new FormData(e.currentTarget);
            const address = {
                  houseNo: data.get("houseNo"),
                  streetAddress: data.get("address"),
                  city: data.get("city"),
                  state: data.get("state"),
                  zipcode: data.get("postalCode"),
                  landmark: data.get("landmark"),
            }
            const personalDetails = {
                  firstName: data.get("firstName"),
                  lastName: data.get("lastName"),
                  email: data.get("email"),
                  mobile: data.get("phoneNumber")
            }

            const combinedData = {
                  ...address,
                  ...personalDetails
            };
            const orderData = {
                  combinedData, navigate
            }
            dispatch(createOrder(orderData))

            console.log("Personal details", personalDetails);
            console.log("address:", address);
            console.log("combined data", combinedData);
            console.log("orderData:", orderData);

            navigate("/checkout/?step=2");
      }

      return (
            <div className='mb-10' >
                  <form onSubmit={handleSubmit}>
                        <div>

                              <Box className="border rounded-s-md shadow-md p-5" style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)' }}>
                                    <h1 className='text-left font-bold pb-4'>Contact Details</h1>

                                    <Grid container spacing={3}>
                                          <Grid item xs={12} sm={6} className="rounded-textfield">
                                                <TextField required id="firstName" className="rounded-textfield" InputProps={{ sx: { borderRadius: 20 } }} name="firstName" label="First Name" fullWidth autoComplete='given-name' style={{ backgroundColor: 'white' }} />

                                          </Grid>
                                          <Grid item xs={12} sm={6} className="rounded-textfield">
                                                <TextField className="rounded-textfield" InputProps={{ sx: { borderRadius: 20 } }} required id="lastName" name="lastName" label="Last Name" fullWidth autoComplete='given-name' style={{ backgroundColor: 'white' }} />

                                          </Grid>
                                          <Grid item xs={12} sm={12} className="rounded-textfield">
                                                <TextField required id="email" className="rounded-textfield" InputProps={{ sx: { borderRadius: 20 } }} name="email" label="Email" fullWidth autoComplete='given-name' style={{ backgroundColor: 'white' }} />

                                          </Grid>
                                          <Grid item xs={6} sm={2} className="rounded-textfield">
                                                <TextField id="country_code" name="country_code" className="rounded-textfield" label="" defaultValue="  +  91" InputProps={{ readOnly: true, sx: { borderRadius: 20 } }} style={{ backgroundColor: 'white' }} variant="outlined" />

                                          </Grid>

                                          <Grid item xs={12} sm={10} className="rounded-textfield">
                                                <TextField required id="phoneNumber" className="rounded-textfield" InputProps={{ sx: { borderRadius: 20 } }} name="phoneNumber" label="Phone Number" fullWidth autoComplete='given-name' style={{ backgroundColor: 'white' }} />

                                          </Grid>
                                    </Grid>
                              </Box>
                        </div>
                        <div className='pt-10'>
                              <Box className="border rounded-s-md shadow-md p-5" style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)' }}>
                                    <h1 className='text-left font-bold pb-4'>Shipping Details</h1>

                                    <Grid container spacing={3}>
                                          <Grid item xs={12} sm={12} className="rounded-textfield">
                                                <TextField required className="rounded-textfield" InputProps={{ sx: { borderRadius: 20 } }} id="houseNo" name="houseNo" label="Flat/House no" fullWidth autoComplete='given-name' style={{ backgroundColor: 'white' }} />

                                          </Grid>
                                          <Grid item xs={12} >
                                                <TextField required id="address" name="address" label="address" fullWidth autoComplete='given-name' multiline rows='5' style={{ backgroundColor: 'white' }} />

                                          </Grid>
                                          <Grid item xs={12} sm={6} className="rounded-textfield">
                                                <TextField required className="rounded-textfield" InputProps={{ sx: { borderRadius: 20 } }} id="city" name="city" label="City" fullWidth autoComplete='given-name' style={{ backgroundColor: 'white' }} />

                                          </Grid>
                                          <Grid item xs={12} sm={6} className="rounded-textfield">
                                                <TextField required className="rounded-textfield" InputProps={{ sx: { borderRadius: 20 } }} id="state" name="state" label="State/Region" fullWidth autoComplete='given-name' style={{ backgroundColor: 'white' }} />

                                          </Grid>
                                          <Grid item xs={12} sm={6} className="rounded-textfield">
                                                <TextField required className="rounded-textfield" InputProps={{ sx: { borderRadius: 20 } }} id="postalCode" name="postalCode" label="Postal code" fullWidth autoComplete='given-name' style={{ backgroundColor: 'white' }} />

                                          </Grid>
                                          <Grid item xs={12} sm={6} className="rounded-textfield">
                                                <TextField required className="rounded-textfield" InputProps={{ sx: { borderRadius: 20 } }} id="landmark" name="landmark" label="LandMark" fullWidth autoComplete='given-name' style={{ backgroundColor: 'white' }} />

                                          </Grid>
                                          <Grid item xs={12} sm={6} >
                                                <div className='flex justify-end'>
                                                      <Button sx={{ py: 1, mt: 2 }} size='large' variant='contained' type='submit' >Save Address</Button>
                                                </div>

                                          </Grid>

                                    </Grid>

                              </Box>
                        </div>
                  </form>



            </div>
      )
}

export default DeliveryAddressForm