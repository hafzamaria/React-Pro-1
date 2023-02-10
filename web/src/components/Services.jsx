import React from 'react';
import {Carousel} from "react-responsive-carousel";//in terminal npm i react-responsive-carousel
import 'react-responsive-carousel/lib/styles/carousel.min.css';///css file of carosel
import img1 from "../assets/3.jpg";
import img2 from "../assets/4.jpg";
// import img3 from "../assets/about.webp";
const Services = () => {
  return (
    <div className='services'>
        <Carousel
        infiniteLoop
        autoPlay
        showArrows ={false}
        showStatus ={false}
        showThumbs={false}
        // showIndicators={false}
        interval={1500}>
     <div>
    <img src={img1} alt="item1" />
    <p className='legend'>Full Stack</p>
     </div>

     <div>
    <img src={img2} alt="item2" />
    <p className='legend'>Peer-to-peer Support</p>
     </div>

     {/* <div>
    <img src={img3} alt="item2" />
    <p className='legend'>Work with us</p>
     </div> */}

        </Carousel>
     
    </div>
  )
}

export default Services
