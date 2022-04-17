import React, { Component } from 'react'
import './Footer.css'
import Logo from '../../assects/icons/logo.svg'
import FacebookIcon from '../../assects/icons/facebook.svg'
import TwitterIcon from '../../assects/icons/twitter.svg'
import InstagramIcon from '../../assects/icons/insta.svg'
export default class Footer extends Component {
  render() {
    return (
      <div className='footer-main-container'>
       <div className='footer-container'>
          <div className='footer-inner-container'>
          <div>
               <div><img src={Logo}></img></div>
               <div className='footer-text'>We envision a world where everyone feels welcome in the American hiking community.</div>
               <div className='footer-icons'>
                  <img src={FacebookIcon}></img>
                  <img src={TwitterIcon}></img>
                  <img src={InstagramIcon}></img>
               </div>
           </div>
           <div className='footer-link-container'>
               <div>
                   <div className='footer-link-header'>Location</div>
                   <div className='footer-link'>America</div>
                   <div  className='footer-link'>Asia</div>
                   <div  className='footer-link'>Europe</div>
                   <div  className='footer-link'>Africa</div>
               </div>
               <div>
                   <div className='footer-link-header'>Contact</div>
                   <div className='footer-link'>About Me</div>
                   <div  className='footer-link'>Teams</div>
                   <div  className='footer-link'>Profile</div>
                   <div  className='footer-link'>FAQ</div>
               </div>
               <div>
                   <div className='footer-link-header'>Legals</div>
                   <div className='footer-link'>Privacy</div>
                   <div  className='footer-link'>Disclaimer</div>
                   <div  className='footer-link'>Terms</div>
                   <div  className='footer-link'>Company</div>
               </div>
           </div>
          </div>
       </div>
       <div className='footer-copyright'>Copyright © 2021. All Right Reserved.</div>
    
      </div>
    )
  }
}
