import React, { Component } from 'react'
import './Navbar.css'
import Logo from '../../assects/icons/logo.svg'
export default class Navbar extends Component {
  render() {
    return (
      <div>
          <div className='navbar-container'>
              <div className='navbar-inner-container'>
                   <div className='navbar-logo'>
                        <div><img src={Logo}></img></div>
                   </div>
                   <div className='navbar-fields'>
                       <div className='navbar-field'>Location</div>
                       <div className='navbar-field'>Blogs</div>
                       <div className='navbar-field'>Testimonials</div>
                       <div className='navbar-field'>Contact</div>
                   </div>
              </div>
          </div>
      </div>
    )
  }
}
