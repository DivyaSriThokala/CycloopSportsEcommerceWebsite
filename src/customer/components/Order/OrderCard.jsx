import { Avatar, AvatarGroup, Grid } from '@mui/material'
import React from 'react'
import AdjustIcon from '@mui/icons-material/Adjust';
import { useNavigate } from 'react-router';

const OrderCard = (props) => {
    const { item } = props;

    const navigation = useNavigate();
    const handleClick = (orderId) => {
        navigation(`/account/order/${orderId}`);
    }

    console.log("item", item);
    return (
        <div className='p-5 shadow-lg hover:shadow-2xl ' onClick={() => handleClick(item.id)}>
            <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>
                <Grid item xs={6}>
                    <div className='flex cursor-pointer'>
                        <div className='w-[10rem]'><AvatarGroup max={3} sx={{ justifyContent: "start" }}>{item.orderItems.map((orderItem) => <Avatar src={orderItem.product.imageUrl}></Avatar>)}</AvatarGroup></div>

                        <div className='ml-5 space-y-2'>
                            <p className='opcatity-50 text-s font-semibold text-left'>Order Id: {item.id}</p>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={2}>
                    <p>Rs.{item.totalPrice}</p>

                </Grid>
                <Grid item xs={4}>
                    {true &&
                        <div>
                            <p>
                                <AdjustIcon sx={{ width: "15px", height: "15px" }} className='text-green-600 mr-2 text-sm' />
                                <span>
                                    Delivered  within 7 days
                                </span>
                            </p>
                            <p className='text-xs'>Your item has been {item.orderStatus}</p>
                        </div>
                    }
                    {false &&
                        <p>
                            <AdjustIcon sx={{ width: "15px", height: "15px" }} className='text-blue-600 mr-2 text-sm' />
                            <span>Expected Delievery on Mar 03</span>
                        </p>
                    }


                </Grid>
            </Grid>
        </div>
    )
}

export default OrderCard