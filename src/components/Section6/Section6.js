import React, { Component } from 'react'
import './Section6.css'
import MessageIcon from '../../assects/icons/mail.svg'
export default class Section6 extends Component {
  render() {
    return (
      <div>
          <div className='section6-container'>

              <div className='section6-inner-container'>
                  <div className='section6-header'>Subscribe to Our Newsletter For Weekly Article Update.</div>
                  <div className='section6-text'>We have hiking-related blog so we can share our thought and rutinity in our blog that updated weekly. We will not spam you, we promise.</div>
                  <div className='section6-input-container'>
                      <input type="email" className='section6-input' placeholder='Enter your e-mail address'></input>
                      <div className='section6-button'>
                      <button className='section1-contact-button'> Subscribe</button>

                      </div>
                  </div>
                  <div className='section6-message'><img src={MessageIcon}></img></div>
              </div>
          </div>
      </div>
    )
  }
}
