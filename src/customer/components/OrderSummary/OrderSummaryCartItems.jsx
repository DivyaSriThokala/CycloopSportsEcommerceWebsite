import { Button, IconButton } from '@mui/material'
import React, { useEffect } from 'react'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { useDispatch, useSelector } from 'react-redux';
import { getCart, removeCartItem, updateCartItem } from '../../../State/Cart/Action';

const OrderSummaryCartItems = ({item}) => {
    const {cart} =useSelector(store=>store);
    const dispatch = useDispatch();
    const handleUpdateCartItem = (num) => {
        const data = {
            data: { quantity: item.quantity + num }, cartItemId: item?.id
        }
        console.log("sending to action.js",data);
        dispatch(updateCartItem(data));
    }

    const handleRemoveCartItem = () => {
        dispatch(removeCartItem(item.id));
    }

    useEffect(()=>{
        dispatch(getCart())
    },[cart.updateCartItem,cart.deleteCartItem])

    return (
        <div className='p-5 shadow-lg mb-3 border rounded-md'>
            <div className='flex items-center'>
                <div className='w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem] '>
                    <img className='e-full h-full object-contain object-top' alt='' src={item.product?.imageUrl}></img>

                </div>
                <div className=' space-y-1'>
                    <div>
                        <p className='font-semibold text-left '>{item.product?.brand}</p>
                        <p className='opacity-70 text-left'>Size: {item.size},{item.product?.color}</p>
                    </div>
                    <div>
                        
                        <div className='flex items-center space-y-1'>
                            <div>
                            <IconButton onClick={() => handleUpdateCartItem(-1)} disabled={item.quantity <= 1} >
                                <RemoveCircleOutlineIcon />
                            </IconButton>
                            <span className='py-1 px-7 brder rounded-sm'>{item.quantity} </span>
                            <IconButton sx={{ color: "RGB(145 85 253)" }} onClick={() => handleUpdateCartItem(1)}>
                                <AddCircleOutlineIcon />
                            </IconButton>
                            </div>
                            
                            <div className='ml-auto  space-y-1' >

                            <div className='flex justify-end' >
                    
                    <Button onClick={handleRemoveCartItem} sx={{ color: "RGB(145 85 253)" }}>Remove</Button>
                </div>
                            </div>
                        </div>
                    </div>

                    {/* <div className='flex space-x-5 items-center  text-gray-900 pt-6'>
                <p className='font-semibold '>199/-</p>
                <p className='opacity-50 line-through '>221/-</p>
                <p className='text-green-600 font-semibold'>5%</p>
            </div> */}
                </div>



            </div>
        </div>
    )
}

export default OrderSummaryCartItems