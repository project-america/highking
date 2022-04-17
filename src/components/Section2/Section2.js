import React, { Component } from 'react'
import './Section2.css'
import Section2Img from '../../assects/images/section2Img.png'
export default class Section2 extends Component {
  render() {
    return (
      <div className='section2-container'>
          <div>
              <div className='section2-bg-container'>
                 <div className='section2-bg-inner-container'>
                     <div>
                         <img src={Section2Img}></img>
                     </div>

                     <div className='section2-content-container'>
                         <div className='section2-content-header'>Safe, Affordable, And Trusted</div>
                         <div className='section2-content-text'>Volunteer trail stewardship projects in America’s parks and forests designed specifically for college student groups and young professionals.</div>
                         <button className='section1-contact-button'>Contact Us</button>

                     </div>
                 </div>
              </div>
          </div>
      </div>
    )
  }
}
