import React from 'react'
import Carousel from '../../Carousel/Carousel'
import Product_Navigation from '../../Product_Navigation/Product_Navigation'
import { ProductCarouselData } from '../../Carousel/ProductCarouselData'
import { ProductComponentData } from '../../Pages/HomePage/ProductComponentData'
import HomeMainFooter from '../../../../static/HomeMainFooter.png';
import '../HomePage/ProductHomePage.css';
import { Button, Input, TextField } from '@mui/material'
import MailIcon from '@mui/icons-material/Mail';
import '../../Product_Navigation/Product_Navigation.css';
import Footer from '../../Footer/Footer'
import { useNavigate } from 'react-router'

const ProductHomePage = () => {
  const navigate=useNavigate();
  const handleProduct=(title)=>{
    navigate(`/Sports/Collections/${title}`);
  }
  return (
    <div>

      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2>

          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
            {ProductComponentData().map((product) => (
              <div className="group relative">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img onClick={()=>handleProduct(product.title)}
                    src={product.image}
                    alt=""
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />

                </div>
                <p className='text-gray-500'>{product.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    
    </div>
  )
}

export default ProductHomePage