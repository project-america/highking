import React, { Component } from 'react';
import './Section7.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ProfileImg from '../../assects/images/profileimage.png'
import StarImg from '../../assects/icons/Star.svg'
export default class Section7 extends Component {
    
  render() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1.6,
        slidesToScroll: 1,
        centerMode: true,
        arrows:false
      };
    return (
      <div style={{backgroundColor:' #FBFEFF'}}> 
        <div style={{paddingBottom:100,backgroundColor:' #FBFEFF'}}>
        <div className='section7-container'>
            <div className='section7-content'>
                <div className='section7-text1'>Happy Hikers</div>
                <div className='section7-text2'>Client’s Say About Us</div>
            </div>
          </div>
          <div className='section7-slide-container'>
          <Slider {...settings}>
           
      <div>
        <div className='section7-card-container'>
          <div className='section7-card'>
             <div>
             <img src={ProfileImg}></img>
              <div className='section7-card-text1'>Omar Gouse</div>
              <div className='section7-card-text2'>Happy Client</div>
             </div>
              </div>  
        <div className='section7-card-text3'>“Everyone working in the office is very knowledgeable about all types of dental work and options for your individual needs.”</div>
         <div className='section7-star-main-container'>
         <div className='section7-star-container'>
           <div><img src={StarImg}></img></div>
           <div><img src={StarImg}></img></div>
           <div><img src={StarImg}></img></div>
           <div><img src={StarImg}></img></div>
           <div><img src={StarImg}></img></div>
         </div>
         </div>
        </div>

      </div>
      <div>
        <div className='section7-card-container'>
          <div className='section7-card'>
             <div>
             <img src={ProfileImg}></img>
              <div className='section7-card-text1'>Omar Gouse</div>
              <div className='section7-card-text2'>Happy Client</div>
             </div>
              </div>  
        <div className='section7-card-text3'>“Everyone working in the office is very knowledgeable about all types of dental work and options for your individual needs.”</div>
         <div className='section7-star-main-container'>
         <div className='section7-star-container'>
           <div><img src={StarImg}></img></div>
           <div><img src={StarImg}></img></div>
           <div><img src={StarImg}></img></div>
           <div><img src={StarImg}></img></div>
           <div><img src={StarImg}></img></div>
         </div>
         </div>
        </div>

      </div>
      <div>
        <div className='section7-card-container'>
          <div className='section7-card'>
             <div>
             <img src={ProfileImg}></img>
              <div className='section7-card-text1'>Omar Gouse</div>
              <div className='section7-card-text2'>Happy Client</div>
             </div>
              </div>  
        <div className='section7-card-text3'>“Everyone working in the office is very knowledgeable about all types of dental work and options for your individual needs.”</div>
         <div className='section7-star-main-container'>
         <div className='section7-star-container'>
           <div><img src={StarImg}></img></div>
           <div><img src={StarImg}></img></div>
           <div><img src={StarImg}></img></div>
           <div><img src={StarImg}></img></div>
           <div><img src={StarImg}></img></div>
         </div>
         </div>
        </div>

      </div>
    </Slider>
          </div>
        </div>
           </div>
    );
  }
}
