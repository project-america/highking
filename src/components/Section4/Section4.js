import React, { Component } from 'react'
import './Section4.css'
import Section4Img from '../../assects/images/section4-img.png'
export default class Section4 extends Component {
  render() {
    return (
      <div className='section4-container'>
          <div>
              <div className='section4-bg-container'>
                 <div className='section4-bg-inner-container'>
                 <div className='section4-content-container'>
                         <div className='section4-content-header'>Enjoy Your Life With Us Now!</div>
                         <div className='section4-content-text'>Volunteers are available to assist you, particularly for beginners.Start your hiking adventure with our beginner's programme and start enjoying life by hiking. </div>
                         <a href='#contact'>  <button className='section1-contact-button'>Contact Us</button></a>

                     </div>
                     <div>
                         <img className='section4-img'  src={Section4Img}></img>
                     </div>
                 </div>
              </div>
          </div>
      </div>
    )
  }
}
