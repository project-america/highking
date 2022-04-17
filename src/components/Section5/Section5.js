import React, { Component } from 'react'
import './Section5.css'
import section5Img from '../../assects/images/section5-img.png'
export default class section5 extends Component {
  render() {
    return (
      <div className='section5-container'>
          <div>
              <div className='section5-bg-container'>
                 <div className='section5-bg-inner-container'>
                     <div>
                         <img src={section5Img}></img>
                     </div>

                     <div className='section5-content-container'>
                         <div className='section5-content-header'>Let’s Enjoy Nature With Us</div>
                         <div className='section5-content-text'>Volunteer trail stewardship projects in America’s parks and forests designed specifically for college student groups and young professionals.</div>
                         <button className='section1-contact-button'>Learn More</button>

                     </div>
                 </div>
              </div>
          </div>
      </div>
    )
  }
}
