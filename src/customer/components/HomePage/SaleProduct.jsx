import React from 'react'
import JerseyImage from '../../../static/jerset_Home_Image.png';
import { useNavigate } from 'react-router';
const SaleProduct = () => {
    const navigate=useNavigate();
    return (
        <div onClick={()=>navigate(`/shoes/${5}`)}>

            <div className=' w-[26rem] h-[18rem] p-10 m-20 bg-gray-100'>
                <div className='bg-red-500 w-[3rem]' style={{ borderRadius: "10px" }}>-10%</div>
                <div className='center-container object-cover'>
                    <img src={JerseyImage} alt='' />
                </div>

            </div>
        </div>
    )
}

export default SaleProduct