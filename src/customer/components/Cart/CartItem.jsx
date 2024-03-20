import { Button, IconButton } from '@mui/material'
import React from 'react'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { useDispatch } from 'react-redux';
import { removeCartItem, updateCartItem } from '../../../State/Cart/Action';

const CartItem = ({ item }) => {

   
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

    return (
        <div className='p-5 shadow-lg border rounded-md'>
            <div className='flex items-center'>
                <div className='w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem] '>
                    <img className='e-full h-full object-contain object-top' alt='' src={item.product.imageUrl}></img>

                </div>
                <div className='ml-5 space-y-1'>

                    <p className='font-semibold'>{item.product.title}</p>
                    <p className='opacity-70 text-left'>Size:{item.size},{item.product.color}</p>
                    <div className='flex space-x-5 items-center  text-gray-900 pt-6'>
                        <p className='font-semibold '>{item.discountedPrice}/-</p>
                        <p className='opacity-50 line-through '>{item.price}/-</p>
                        <p className='text-green-600 font-semibold'>{item.product.discountPercent}%</p>
                    </div>
                </div>
                <div className='ml-auto space-y-1'>
                    <div className='flex justify-end pb-10' >

                        <Button onClick={handleRemoveCartItem} sx={{ color: "RGB(145 85 253)" }}>Remove</Button>
                    </div>
                    <IconButton onClick={() => handleUpdateCartItem(-1)} disabled={item.quantity <= 1}>
                        <RemoveCircleOutlineIcon />
                    </IconButton>
                    <span className='py-1 px-7 brder rounded-sm'>{item.quantity} </span>
                    <IconButton sx={{ color: "RGB(145 85 253)" }} onClick={() => handleUpdateCartItem(1)}>
                        <AddCircleOutlineIcon />
                    </IconButton>
                </div>


            </div>
        </div>

    )
}

export default CartItem