"use client"
import React, { Component } from 'react'

export default class Contact extends Component {
  
  handleSubmit = (event) => {
    event.preventDefault();

    // You need to implement the logic to send the form data to the server
    // and then have the server send an email using a service like nodemailer.

    // For the client-side part, you can fetch the server endpoint.
   var  fullName= event.target.FullName.value;
   var  email= event.target.Email.value;
   var  phoneNo= event.target.PhoneNo.value
    var modeOfParticipation= event.target.ModeOfParticipation.value;
    var summitDiscoveryMethod= event.target.SummitDiscoveryMethod.value;
    console.log(fullName);
    console.log(email);
    console.log(phoneNo);
    console.log(modeOfParticipation);
    console.log(summitDiscoveryMethod);

      const formEle = document.querySelector("form");
      const formDatab = new FormData(formEle);
      fetch(
        "https://script.google.com/macros/s/AKfycby8536Nyp8W_-QVBqsW4CMB_x4Xyiosjw3dXGL-BuioP-V7__BSnnu1MHX6L3C8o_tt/exec",
        {
          method: "POST",
          body: formDatab
        }
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          alert('Form submitted successfully!');

        })
        .catch((error) => {
          console.log(error);
          alert(error);

        });

    // fetch('http://localhost:3001/api/sendEmail', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     fullName: event.target.FullName.value,
    //     email: event.target.Email.value,
    //     phoneNo: event.target.PhoneNo.value,
    //     modeOfParticipation: event.target.ModeOfParticipation.value,
    //     summitDiscoveryMethod: event.target.SummitDiscoveryMethod.value,
    //   }),
    // })
    //   .then(response => response.json())
    //   .then(data => {
    //     console.log('Success:', data);
    //     alert('Form submitted successfully!');
    //   })
    //   .catch((error) => {
    //     console.error('Error:', error);
    //     alert('Error submitting the form. Please try again.');
    //   });
  };

  render() {
  
    return (
      <div id="contact" className='bodyform'>
        <div >
          <div className="container">
            <div className="row ">
              <div className="ring">
                <i style={{ '--clr': '#00ff0a' }}></i>
                <i style={{ '--clr': '#ff0057' }}></i>
                <i style={{ '--clr': '#fffd44' }}></i>
                <div className="login">
                  <h2>Register</h2>
                  <div>
                    <form className="form"onSubmit={this.handleSubmit}>
                      <div className="inputBx mb-1">
                        <input type="text" name="FullName" placeholder="Full Name" />
                      </div>
                      <div className="inputBx mb-1">
                        <input type="email" name="Email" placeholder="Email" />
                      </div>
                      <div className="inputBx mb-1">
                        <input type="text" name="PhoneNo" placeholder="Phone No." />
                      </div>
                      <div className="inputBx mb-1">
                        <select name="ModeOfParticipation" className="inputBx2">
                          <option value="" disabled selected>Mode of Participation</option>
                          <option value="physical">Physical Attendance</option>
                          <option value="virtual">Virtual Participation</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      <div className="inputBx mb-1">
                        <select name="SummitDiscoveryMethod" className="inputBx2">
                          <option value="" disabled selected>Summit Discovery Method</option>
                          <option value="website">Website</option>
                          <option value="social_media">Social Media</option>
                          <option value="word_of_mouth">Word of Mouth</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      <div className="inputBx">
                        <input type="submit" value="Submit" />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
