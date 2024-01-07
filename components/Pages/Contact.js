"use client"
import React, { Component } from 'react'

export default class Contact extends Component {
  handleSubmit = (event) => {
    event.preventDefault();

    // You need to implement the logic to send the form data to the server
    // and then have the server send an email using a service like nodemailer.

    // For the client-side part, you can fetch the server endpoint.
   var  fullName= event.target.fullName.value;
   var  email= event.target.email.value;
   var  phoneNo= event.target.phoneNo.value
    var modeOfParticipation= event.target.modeOfParticipation.value;
    var summitDiscoveryMethod= event.target.summitDiscoveryMethod.value;
    console.log(fullName);
    console.log(email);
    console.log(phoneNo);
    console.log(modeOfParticipation);
    console.log(summitDiscoveryMethod);



    fetch('http://localhost:3001/api/sendEmail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        fullName: event.target.fullName.value,
        email: event.target.email.value,
        phoneNo: event.target.phoneNo.value,
        modeOfParticipation: event.target.modeOfParticipation.value,
        summitDiscoveryMethod: event.target.summitDiscoveryMethod.value,
      }),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
        alert('Form submitted successfully!');
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('Error submitting the form. Please try again.');
      });
  };

  render() {
    return (
      <div className='bodyform'>
        <div id="contact">
          <div className="container">
            <div className="row ">
              <div className="ring">
                <i style={{ '--clr': '#00ff0a' }}></i>
                <i style={{ '--clr': '#ff0057' }}></i>
                <i style={{ '--clr': '#fffd44' }}></i>
                <div className="login">
                  <h2>Register</h2>
                  <div>
                    <form onSubmit={this.handleSubmit}>
                      <div className="inputBx mb-1">
                        <input type="text" name="fullName" placeholder="Full Name" />
                      </div>
                      <div className="inputBx mb-1">
                        <input type="email" name="email" placeholder="Email" />
                      </div>
                      <div className="inputBx mb-1">
                        <input type="text" name="phoneNo" placeholder="Phone No." />
                      </div>
                      <div className="inputBx mb-1">
                        <select name="modeOfParticipation" className="inputBx2">
                          <option value="" disabled selected>Mode of Participation</option>
                          <option value="physical">Physical Attendance</option>
                          <option value="virtual">Virtual Participation</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      <div className="inputBx mb-1">
                        <select name="summitDiscoveryMethod" className="inputBx2">
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
