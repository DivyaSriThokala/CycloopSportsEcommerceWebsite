import { Button } from '@mui/base'
import { Grid, Typography } from '@mui/material'
import React from 'react';
import FooterCardImage from '../../../../src/static/footer_cards-Photoroom.png-Photoroom.png';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
const Footer = () => {
    return (
        <div>
            <Grid className='text-white text-center mt-10 p-20' container sx={{ bgcolor: '#66cdaa', color: 'white', py: 3 }} style={{ backgroundColor: '#66cdaa' }}>
                <Grid item xs={12} sm={6} md={3} lg={6} className='text-left' style={{ paddingRight: '20px' }}>
                    <Typography className='pb-5' variant='h6'>ABOUT US</Typography>
                    <div>
                        <p>Cycloop is one of the  </p>
                        <p>leading sports e-commerce website</p>
                        <p>that serves all the customer needs.</p>
                        <div className='pt-10 flex flex-row'>

                            <FacebookOutlinedIcon className='mr-2' />
                            <WhatsAppIcon className='mr-2' />
                            <InstagramIcon className='mr-2' />
                            <YouTubeIcon />
                        </div>
                    </div>

                </Grid>
                <Grid item xs={12} sm={6} md={3} lg={2} className='text-left'>
                    <Typography className='pb-7' variant='h6'>INFORMATION</Typography>
                    <div>
                        <Button className='pb-2' variant='h6' gutterBottom>About</Button>
                    </div>
                    <div>
                        <Button className='pb-2' variant='h6' gutterBottom>Delivery information</Button>
                    </div>
                    <div>
                        <Button className='pb-2' variant='h6' gutterBottom>Privacy Policy</Button>
                    </div>
                    <div>
                        <Button className='pb-2' variant='h6' gutterBottom>Sales</Button>
                    </div>
                    <div>
                        <Button className='pb-2' variant='h6' gutterBottom>Terms & Conditions</Button>
                    </div>
                    <div>
                        <Button className='pb-2' variant='h6' gutterBottom>EMI Payment</Button>
                    </div>
                </Grid>
                <Grid item xs={12} sm={6} md={3} lg={2} className='text-left'>
                    <Typography className='pb-7' variant='h6'>ACCOUNT</Typography>
                    <div>
                        <Button className='pb-2' variant='h6' gutterBottom>My Account</Button>
                    </div>
                    <div>
                        <Button className='pb-2' variant='h6' gutterBottom>My Orders</Button>
                    </div>
                    <div>
                        <Button className='pb-2' variant='h6' gutterBottom>Returns</Button>
                    </div>
                    <div>
                        <Button className='pb-2' variant='h6' gutterBottom>Shipping</Button>
                    </div>
                    <div>
                        <Button className='pb-2' variant='h6' gutterBottom>Wishlist</Button>
                    </div>
                    <div>
                        <Button className='pb-2' variant='h6' gutterBottom>Account Details</Button>
                    </div>
                </Grid>
           
                <Grid item xs={12} sm={6} md={3} lg={2} className='text-left'>
                    <Typography className='pb-7' variant='h6'>STORE</Typography>
                    <div>
                        <Button className='pb-2' variant='h6' gutterBottom>Affiliate</Button>
                    </div>
                    <div>
                        <Button className='pb-2' variant='h6' gutterBottom>Discounts</Button>
                    </div>
                    <div>
                        <Button className='pb-2' variant='h6' gutterBottom>Sale</Button>
                    </div>
                    <div>
                        <Button className='pb-2' variant='h6' gutterBottom>Contact</Button>
                    </div>
                    <div>
                        <Button className='pb-2' variant='h6' gutterBottom>All Collections</Button>
                    </div>
                </Grid>
                <Grid className='pt-20' item xs={12}>
                    <hr className='pb-10'/>
                    <div style={{ display: 'flex', justifyContent: 'center' }}><img src={FooterCardImage} alt=''/></div>
                    <Typography variant="body2" component="p" align='center'>
                        &copy; Copyright.2022.All Rights Reserved
                    </Typography>
                </Grid>
            </Grid>
        </div>
    )
}

export default Footer