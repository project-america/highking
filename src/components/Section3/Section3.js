import React, { Component } from 'react'
import './Section3.css'
import TravelAdvisor from '../../assects/icons/Travel Advisor.svg'
import  UnitedTravel from '../../assects/icons/United Travel.svg'
import TravelChannel from '../../assects/icons/Travel Channel.svg'
import TripRaja from '../../assects/icons/tripraja.svg'
import BookingCom from '../../assects/icons/Booking.svg'
export default class Section3 extends Component {
  render() {
    return (
      <div>
          <div className='section3-container'>
              <div className='section3-inner-container'>
                  <div>
                      <div className='section3-header-container'>
                          <div className='section3-header-text1'>Safe Journey</div>
                          <div className='section3-header-text2'>Trusted by Big Companies </div>
                      </div>
                      <div className='section3-bottom-container'>
                        <img src={TravelAdvisor}></img>
                        <img src={UnitedTravel}></img>
                        <img src={TravelChannel}></img>
                      </div>
                      <div className='section3-bottom2-container'>
                      <img src={TripRaja}></img>
                        <img src={BookingCom}></img>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    )
  }
}
