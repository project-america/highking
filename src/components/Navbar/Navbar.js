import React, { Component } from 'react'
import './Navbar.css'
import Logo from '../../assects/icons/logo.svg'
import MenuIcon from '@mui/icons-material/Menu';
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
                       <a href='#location'> <div className='navbar-field'>Location</div></a>
                       <a href='#blogs'> <div className='navbar-field'>Blogs</div></a>
                       <a href='#testimonials'> <div className='navbar-field'>Testimonials</div></a>
                       <a href='#contact'> <div className='navbar-field'>Contact</div></a>
                   </div>
                   <div  className='navbar-menu-icon' ><MenuIcon  sx={{fontSize:30}} /></div>
                   
              </div>
          </div>
      </div>
    )
  }
}
