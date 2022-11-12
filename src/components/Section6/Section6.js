import React, { Component } from 'react'
import './Section6.css'
import MessageIcon from '../../assects/icons/mail.svg'
import swal from 'sweetalert';

export default class Section6 extends Component {

  Constructor(props) {
    // super(props);  
    this.state = {
      email: "",
      crctEmail: 0
    }
  }
  changeEmail = (e) => {
    this.setState({ email: e.target.value })
    var email1 = e.target.value
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e.target.value)) {
      this.setState({ crctEmail: 1 })
    }
    else
    {
      this.setState({crctEmail:0})
    }
  }

  subscribeHere = () => {
    if (this.state.email.length!=0 && this.state.crctEmail==1){
      swal({
        title: "Good job!",
        text: "You subscribed to HighKing !",
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


  render() {
    return (
      <div>
        <div className='section6-container' id="contact">

          <div className='section6-inner-container'>
            <div className='section6-header'>Subscribe to Our Newsletter For Weekly Article Update.</div>
            <div className='section6-text'>We have hiking-related blog so we can share our thought and rutinity in our blog that updated weekly. We will not spam you, we promise.</div>
            <div className='section6-input-container'>
              <input type="email" className='section6-input' placeholder='Enter your e-mail address' onChange={this.changeEmail}></input>
              <div className='section6-button'>
                <button className='section1-contact-button' onClick={this.subscribeHere}> Subscribe</button>

              </div>
            </div>
            <div className='section6-message'><img src={MessageIcon}></img></div>
          </div>
        </div>
      </div>
    )
  }
}
