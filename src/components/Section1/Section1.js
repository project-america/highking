import React, { Component } from 'react'
import './Section1.css'
import InnerImg from '../../assects/images/section1-inner-img.png'
import Navbar from '../Navbar/Navbar'
import Section1Points from '../Section1Points/Section1Points'
import { Link } from 'react-router-dom'
export default class Section1 extends Component {
  render() {
    return (
      <div style={{backgroundColor:'#FBFEFF'}}>
          <div className='section1-container'>
          <div className='section1-bg-img-container'>
            <Navbar/>
            <div className='section1-main-container'>
            <div className='section1-inner-container'>
                <div  className='section1-inner1-container'>
                <div>
                     <div className='section1-text1'>Be prepared for the mountains and beyond.</div>
                     <div className='section1-text2'>Are you looking for amazing hiking <br></br>travel? Don’t worry! We got it for you!</div>
                     <div className='section1-buttons-container'>
                     <a href='#contact'>  <button className='section1-contact-button'>Contact Us</button></a>
                         <Link to="/videos" > <button className='section1-video-button'>Watch videos</button></Link>
                     </div>
                 </div>
                 <div>
                     <img className='section1-img' src={InnerImg}></img>
                 </div>
                </div>
                <div >
                  <Section1Points/>
                  </div>
                  <div className='section1-last-text'>Don’t hesitate to contact us to get better Information.<snap className="section1-last-subtext">EXPLORE ALL TREKKING.</snap></div>     
             </div>
            
            </div>
          </div>
          </div>
      </div>
    )
  }
}
