import React from 'react'

import Carousel from 'react-multi-carousel';
import NavBar from '../components/NavBar';
import {  productData4,productData5, responsive } from './data';
import Product from './Product';
import './Men.css';
import Footer from './Footer';
const Men = () => {
    const product4= productData4.map((item)=>(
        <Product name={item.name} url={item.imageurl} price={item.price} description={item.description}/>
      ));
      const product5= productData5.map((item)=>(
        <Product name={item.name} url={item.imageurl} price={item.price} description={item.description}/>
      ));
  return (
    <div><NavBar/>
    <div className='men-header'>
        <p  >MEN</p>
    </div>
    <div className='men-header2'>
        <p  >TEES</p>
    </div>
    
    
    <Carousel   showDots={true}  responsive={responsive}  >
    {product5}
    </Carousel>
    <div className='men-header2'>
        <p  >40% OFF</p>
    </div>
   
    <Carousel   showDots={true}  responsive={responsive}  >
    {product4}
    </Carousel>
   <Footer/>
    </div>
  )
}

export default Men