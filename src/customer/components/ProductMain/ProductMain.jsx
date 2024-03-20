import React from 'react'
import Product_Navigation from '../Product_Navigation/Product_Navigation.jsx';
import Carousel from '../Carousel/Carousel.jsx';
import ProductHomePage from '../Pages/HomePage/ProductHomePage.jsx';
import FooterImageHome from '../Footer/FooterImageHome.jsx';
import Footer from '../Footer/Footer.jsx';
const ProductMain = () => {
  return (
    <div>
        <Product_Navigation/>
        <Carousel/>
        <ProductHomePage/>
        <FooterImageHome/>
        <Footer/>
    </div>
  )
}

export default ProductMain