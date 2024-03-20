import React from 'react'
import './Product_Card.css';
import { useNavigate } from 'react-router';

const Product_Card = ({product}) => {
  const navigate=useNavigate();
  return (
    <div onClick={()=>navigate(`/product/${product.id}`)} className="productCard w-[15rem] m-3 transition-all cursor-pointer" >
           <div className='h-[13rem]'>
            <img className='h-full w-full object-left-top' src={product.imageUrl} alt=""/>
            </div>
            <div className='textPart bg-white p-3'>
                   <h3 className='font-bold opacity-60'>{product.brand}</h3>
                   <p>{product.title}</p>
            </div>
            <div className='flex justify-between pb-3'>
              <div className='flex'>
              <img className='h-6 w-6' src='https://img.icons8.com/?size=48&id=qdQpy48X3Rjv&format=png'/> 
                <p >5.0(10 Reviews)</p>
              </div>
              <div>
              <h1 className='StockStatus text-green-500 font-semibold pr-10' >Instock</h1>
              </div>
               
              </div>
            <div className='flex items-center space-x-2'>
                <p className='Rate font-bold px-6'>Rs.{product.discountedPrice}</p>
                <p className='line-through opacity-50'>Rs.{product.price}</p>
              </div>
    </div>
  )
}

export default Product_Card