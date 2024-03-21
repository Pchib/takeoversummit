"use client"
import React, { Component } from 'react';

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    // Set loading to true when the form is submitted
    this.setState({ loading: true });

    // Your form submission logic...
    var fullName = event.target.FullName.value;
    var email = event.target.Email.value;
    var phoneNo = event.target.PhoneNo.value;
    var modeOfParticipation = event.target.ModeOfParticipation.value;
    var summitDiscoveryMethod = event.target.SummitDiscoveryMethod.value;

    // fetch('https://localhost:3001/api/sendEmail',
    fetch('https://takeoverbackend.onrender.com/api/sendEmail',
     {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName: event.target.FullName.value,
          email: event.target.Email.value,
          phoneNo: event.target.PhoneNo.value,
          modeOfParticipation: event.target.ModeOfParticipation.value,
          summitDiscoveryMethod: event.target.SummitDiscoveryMethod.value,
        }),
      })
        .then(response => response.json())
        .then(data => {
          console.log('Success:', data);
          console.log('Form submitted successfully!');
        })
        .catch((error) => {
          console.error('Error:', error);
          console.log('Error submitting the form. Please try again.');
        });

    const formEle = document.querySelector('form');
    const formDatab = new FormData(formEle);

    fetch(
      'https://script.google.com/macros/s/AKfycbyA-JMs64INLVORSqgfRSWwJex5LXnnL2ZR8URhg52MbWoMg09J6kvj9BlfYzCFyodK8g/exec',
      {
        method: 'POST',
        body: formDatab,
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        alert('Registration successfully!');
      })
      .catch((error) => {
        console.log(error);
        alert(error);
      })
      .finally(() => {
        // Set loading to false when the fetch request is complete
        this.setState({ loading: false });
      });
  };

  render() {
    const containerStyle = {
      backgroundColor: 'black',
      color: 'white',
      transition: 'color 0.3s',
    };

    return (
      <section  id="register" >
<div className="bodyform">
        <div>
       
          <div className="container">
            <div className="row">
              <div className="ring">
                <i style={{ '--clr': '#00ff0a' }}></i>
                <i style={{ '--clr': '#ff0057' }}></i>
                <i style={{ '--clr': '#fffd44' }}></i>
                <div className="login">
                  <h2>Register</h2>
                  <div>
                    <form className="form" onSubmit={this.handleSubmit}>
                      <div className="inputBx mb-1" style={{ textAlign: 'center' }}>
                        {/* <label htmlFor="FullName">Full Name</label> */}
                        <input type="text" id="FullName" name="FullName" placeholder="Full Name" required />
                      </div>
                      <div className="inputBx mb-1" style={{ textAlign: 'center' }}>
                        {/* <label htmlFor="Email">Email</label> */}
                        <input type="email" id="Email" name="Email" placeholder="Email" required />
                      </div>
                      <div className="inputBx mb-1" style={{ textAlign: 'center' }}>
                        {/* <label htmlFor="PhoneNo">Phone No.</label> */}
                        <input type="tel" id="PhoneNo" name="PhoneNo" placeholder="Phone No." required />
                      </div>
                      <div className="inputBx mb-1" style={{ textAlign: 'center' }}>
                        {/* <label htmlFor="ModeOfParticipation">Mode of Participation</label> */}
                        <select style={{fontSize:"1rem"}}
                          id="ModeOfParticipation"
                          name="ModeOfParticipation"
                          className="inputBx2"
                          required
                        >
                          <option value="" >Preferred Hall Selection.</option>
                          <option style={containerStyle} value="physical">Physical</option> 
                          <option style={containerStyle} value="virtual">Virtual Participation</option>
                          <option style={containerStyle} value="other">Other</option>
                        </select>
                      </div>
                      <div className="inputBx mb-1" style={{ textAlign: 'center' }}>
                        {/* <label htmlFor="SummitDiscoveryMethod">Summit Discovery Method</label> */}
                        <select style={{fontSize:"1rem"}}
                          id="SummitDiscoveryMethod"
                          name="SummitDiscoveryMethod"
                          className="inputBx2"
                          placeholder="mode"
                          required
                        >
                          <option  value="" >Where did you hear about us</option>
                          <option style={containerStyle} value="website">Website</option>
                          <option style={containerStyle} value="social_media">Social Media</option>
                          <option style={containerStyle} value="Email">Email</option>
                          <option style={containerStyle} value="word_of_mouth">Word of Mouth</option>
                          <option style={containerStyle} value="other">Other</option>
                        </select>
                      </div>
                      <div className="inputBx" style={{ textAlign: 'center' }}>
                        <input
                          type="submit"
                          value={this.state.loading ? 'Loading...' : 'Submit'}
                          disabled={this.state.loading}
                        />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </section>
      
    );
  }
}
