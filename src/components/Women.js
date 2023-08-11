import React from 'react'
import './Women.css';
import Carousel from 'react-multi-carousel';
import NavBar from '../components/NavBar';
import {  productData6,productData7, responsive } from './data';
import Product from './Product';
import Footer from './Footer';
const Women = () => {
    const product6= productData6.map((item)=>(
        <Product name={item.name} url={item.imageurl} price={item.price} description={item.description}/>
      ));
      const product7= productData7.map((item)=>(
        <Product name={item.name} url={item.imageurl} price={item.price} description={item.description}/>
      ));
  return (
    <div><NavBar/>
    <div className='women-header'>
        <p>WOMEN</p>
    </div>
    <div className='men-header2'>
        <p  >CASUALS</p>
    </div>
    
    <Carousel   showDots={true}  responsive={responsive}  >
    {product6}
    </Carousel>
    <div className='men-header2'>
        <p >UPTO 25% OFF</p>
    </div>
   
    <Carousel   showDots={true}  responsive={responsive}  >
    {product7}
    </Carousel>
    <Footer/>
    </div>
  )
}

export default Women