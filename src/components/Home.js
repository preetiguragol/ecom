import React, {  useEffect } from 'react';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../firebase';

import { useNavigate } from 'react-router-dom';
import './Home.css';
import Navbar from './NavBar';
import ImageSlider from './ImageSlider';
import { SliderData } from './SliderData';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Product from './Product';
import { productData, productData2,productData3 } from './data';
import { responsive } from './data';
import Footer from './Footer';

const Home = () => {
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
             
              const uid = user.uid;
            
              console.log("uid", uid)
            } else {
              
              console.log("user is logged out")
            }
          });
         
    }, [])
    const navigate = useNavigate();
    
   
    
    const product= productData.map((item)=>(
      <Product name={item.name} url={item.imageurl} price={item.price} description={item.description}/>
    ));
    const product2= productData2.map((item)=>(
      <Product name={item.name} url={item.imageurl} price={item.price} description={item.description}/>
    ));
    const product3= productData3.map((item)=>(
      <Product name={item.name} url={item.imageurl} price={item.price} description={item.description}/>
    ));
   


  return (
    <div >
    
       <Navbar/>
       
        <div>
          
            <ImageSlider slides={SliderData} />
            
            <h1 className='category-heading'>Cardigans/Jackets</h1>
            <Carousel   showDots={true}  responsive={responsive}  >
              {product}
              </Carousel>
              <h1 className='category-heading'>Casuals</h1>
              <Carousel   showDots={true}  responsive={responsive}  >
              {product2}
              </Carousel>
              <h1 className='category-heading'>Flat 50% OFF</h1>
              <Carousel   showDots={true}  responsive={responsive}  >
              {product3}
              </Carousel>
              <Footer/>
      </div>
      
    </div>
    
    
  )
}

export default Home