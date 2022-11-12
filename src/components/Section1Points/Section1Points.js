import React, { Component } from 'react'
import './Section1Points.css'
import LocationImg from '../../assects/icons/location.svg'
export default class Section1Points extends Component {
  render() {
    return (
      <div className='section1-points-container' id="location">
          {/* <div> */}
             <div className='section1-points-card'>
                 <img src={LocationImg}></img>
                 <div className='section1-points-card-header'>Secret Locations</div>
                 <div className='section1-points-card-text'>Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do eiusmod tempor.</div>
                 <div className='section1-points-read'>Read More</div>
             </div>

             <div className='section1-points-card'>
                 <img src={LocationImg}></img>
                 <div className='section1-points-card-header'>Secret Locations</div>
                 <div className='section1-points-card-text'>Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do eiusmod tempor.</div>
                 <div className='section1-points-read'>Read More</div>
             </div>
             <div className='section1-points-card'>
                 <img src={LocationImg}></img>
                 <div className='section1-points-card-header'>Secret Locations</div>
                 <div className='section1-points-card-text'>Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do eiusmod tempor.</div>
                 <div className='section1-points-read'>Read More</div>
             </div>
          {/* </div> */}
      </div>
    )
  }
}
