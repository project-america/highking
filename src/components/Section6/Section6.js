import React, { Component, useState } from 'react'
import './Section6.css'
import MessageIcon from '../../assects/icons/mail.svg'
import swal from 'sweetalert';

 const Section6 =()=> {

  const [email,setEmail]=useState("")
  const [crctEmail,setCrctEmail]=useState(0)
  const changeEmail = (e) => {
    setEmail(e.target.value)
    // this.setState({ email: e.target.value })
    var email1 = e.target.value
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e.target.value)) {
      // this.setState({/ crctEmail: 1 })
      setCrctEmail(1)
    }
    else
    {
      setCrctEmail(0);
    }
  }

  const subscribeHere = () => { 
    if (email!="" && crctEmail==1){
      swal({
        title: "Yoo amigos!",
        text: "You have subscribed to HighKing!",
        icon: "success",
        button: "Okay!",
      });

    }
    else{
      swal({
        title: "Invalid!",
        text: "Please enter valid Email!",
        icon: "error",
        button: "Okay!",
      });
    }
  }


    return (
      <div>
        <div className='section6-container' id="contact">

          <div className='section6-inner-container'>
            <div className='section6-header'>Subscribe to Our Newsletter For Weekly Article Update.</div>
            <div className='section6-text'>We have hiking-related blog so we can share our thought and rutinity in our blog that updated weekly. We will not spam you, we promise.</div>
            <div className='section6-input-container'>
            <div className='section6-message'><img src={MessageIcon}></img></div>
              <input type="email" className='section6-input'
               placeholder='Enter your e-mail address'
                onChange={changeEmail}></input>
              <div className='section6-button'>
                <button className='section6-contact-button' onClick={subscribeHere}> Subscribe</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Section6;