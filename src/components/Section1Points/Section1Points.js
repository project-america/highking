import React, { Component } from 'react'
import './Section1Points.css'
import LocationImg from '../../assects/icons/location.svg'
import AdventureImg from '../../assects/icons/shoe.svg'
import BagImg from '../../assects/icons/bag.svg'
// import Adventure from '../../assects/icons/'
export default class Section1Points extends Component {
  render() {
    return (
      <div className='section1-points-container' id="location">
          {/* <div> */}
             <div className='section1-points-card'>
                 <img src={LocationImg}></img>
                 <div className='section1-points-card-header'>Secret Locations</div>
                 <div className='section1-points-card-text'>Get excited about the hidden destinations and make your journey unforgettable</div>
                 <div className='section1-points-read'>Read More</div>
             </div>

             <div className='section1-points-card'>
                 <img src={AdventureImg}></img>
                 <div className='section1-points-card-header'>Safe Adventure</div>
                 <div className='section1-points-card-text'>Ensuring your safety, we also make sure there will be adventure.</div>
                 <div className='section1-points-read'>Read More</div>
             </div>
             <div className='section1-points-card'>
                 <img src={BagImg}></img>
                 <div className='section1-points-card-header'>Professional Hikers</div>
                 <div className='section1-points-card-text'>Get chance to interact with experienced hikers and learn about their hiking backgrounds.</div>
                 <div className='section1-points-read'>Read More</div>
             </div>
          {/* </div> */}
      </div>
    )
  }
}
