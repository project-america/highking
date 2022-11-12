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
        slidesToShow:2.2,
        slidesToScroll: 1,
        // centerMode: true,
        arrows:false,
        responsive:[
          {
            breakpoint:1500,
            settings:{
              slidesToShow:1.6,
              // centerMode:true
            }
          },
          {
            breakpoint:1320,
            settings:{
              slidesToShow:1.6,
              centerMode:false
            }
          },
          {
            breakpoint:1250,
            settings:{
              slidesToShow:1.5,
            }

          },
          {
            breakpoint:1100,
            settings:{
              slidesToShow:1,
              centerMode:true
            }

          }
        ]
      };
    return (
      <div style={{backgroundColor:' #FBFEFF'}} id='testimonials'> 
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
        <div className='section7-card-text3'>“Never follow someone else’s path unless you’re in the woods and you’re lost, and you see a path. By all means, you should follow that.” </div>
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
              <div className='section7-card-text1'>Andria olivia</div>
              <div className='section7-card-text2'>Satisfied Client</div>
             </div>
              </div>  
        <div className='section7-card-text3'>“Two roads diverged in a wood, and I — I took the one less traveled by, and that has made all the difference.”</div>
         <div className='section7-star-main-container'>
         <div className='section7-star-container'>
           <div><img src={StarImg}></img></div>
           <div><img src={StarImg}></img></div>
           <div><img src={StarImg}></img></div>
           <div><img src={StarImg}></img></div>
           {/* <div><img src={StarImg}></img></div> */}
         </div>
         </div>
        </div>

      </div>
      <div>
        <div className='section7-card-container'>
          <div className='section7-card'>
             <div>
             <img src={ProfileImg}></img>
              <div className='section7-card-text1'>Emma Watson</div>
              <div className='section7-card-text2'>Happy Client</div>
             </div>
              </div>  
        <div className='section7-card-text3'>“Me thinks that the moment my legs begin to move, my thoughts begin to flow.”</div>
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
